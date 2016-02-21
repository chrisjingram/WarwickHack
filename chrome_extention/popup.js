var selection = '';

function pasteSelection() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      var pageForSelection = $('#with_selection');
      var pageForError = $('#without_selection');
      console.log(response);
      selection = response.data;
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
			dataList.append("<div class='col-xs-3 col-sm-2'><button type='button' onClick=submitData(" + results[i] + ", " + selection + ") class='btn btn-primary'>" + results[i] + "</button></div>");
		}
  	});
}

function submitData(className, docText) {
  jquery.post('/document/', {
   "className": className,
   "docText": docText
  }).done(function(result){
   if(result.error){
     return callback(result.error);
   }else{
     return callback(null, result);
   }
  });
}

$('#classifier').on("input", function () {
	updateDatalist();
});

updateDatalist();
pasteSelection();
