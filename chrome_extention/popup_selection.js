function pasteSelection() {
  chrome.tabs.query({active:true, windowId: chrome.windows.WINDOW_ID_CURRENT}, 
  function(tab) {
    chrome.tabs.sendMessage(tab[0].id, {method: "getSelection"}, 
    function(response){
      var pageForSelection = $('#with_selection');
      var pageForError = $('#without_selection');
      console.log(response);
      if (response.data != "") {
      	pageForSelection.removeClass("hidden");
      	pageForError.addClass("hidden");
      	$("#selection").text(response.data);
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
		url: "http://188.166.154.40:5678/search/categories",
		headers: { query: input }
	}).done(function( msg ) {
		var results = msg;
		console.log(results);
		var dataList = $('.suggestions');
		dataList.html("");
		for (var i = 0; i < results.length; i++) {
			dataList.append("<div class='col-xs-3 col-sm-2'><button type='button' class='btn btn-primary'>" + results[i] + "</button></div>");
		}
  	});
}

$('#classifier').on("input", function () {
	updateDatalist();
});

pasteSelection();