var selection = '';

function pasteSelection() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      var pageForSelection = $('#with_selection');
      var pageForError = $('#without_selection');
      var pageForSuccess = $('#completed');
      console.log(response);
      selection = response.data;
      pageForSuccess.addClass("hidden");
      if (selection != "") {
        pageForSelection.removeClass("hidden");
      	pageForError.addClass("hidden");
      	$("#selection").text(selection);
      } else {
      	pageForSelection.addClass("hidden");
      	pageForError.removeClass("hidden");
      }
    });
  });
}

function updateDatalist() {
	var input = $('#classifier').val();
	// go query matt's db
	console.log(input);
	$.ajax({
		method: "GET",
		url: "http://ec2-54-200-108-132.us-west-2.compute.amazonaws.com:5678/search/categories",
		headers: { query: input }
	}).done(function( msg ) {
		var results = msg, dataList = $('.suggestions');
		dataList.html("");
    console.log(results);
		for (var i = 0; i < results.length; i++) {
			dataList.append("<div class='col-xs-3 col-sm-2 classifier-btn'><button data-classifier='" + results[i] + "' type='button' class='btn btn-primary'>" + results[i] + "</button></div>");
		}
      $('.classifier-btn button').click(function () {
        classifier = $(this).attr('data-classifier');
        submitData(classifier, selection);
      });
  	});
}

function submitData(className, docText) {
  $.ajax({
    method: "POST",
    url: "http://ec2-54-200-108-132.us-west-2.compute.amazonaws.com:5678/document",
    data: {
      "className": className,
      "docText": docText
    }
  }).done(function(result){
    console.log(result);
    var pageForSelection = $('#with_selection');
    var pageForError = $('#without_selection');
    var pageForSuccess = $('#completed');
    pageForSuccess.removeClass("hidden");
    pageForError.addClass("hidden");
    pageForSelection.addClass("hidden");
  });
}

$('#classifier').on("input", function () {
	updateDatalist();
});

updateDatalist();
pasteSelection();
