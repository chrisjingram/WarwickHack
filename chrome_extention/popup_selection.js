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
	var input = $('#classifier').val;
	// go query matt's db
	var results = ['food', 'car', 'truck', 'animal', 'furniture', 'computer'];
	var dataList = $('#suggestions');
	dataList.html("");
	for (var i = 0; i < results.length; i++) {
		dataList.append("<option>" + results[i]);
	}
}

$.fn.select2.amd.require(['select2/compat/matcher'], function (oldMatcher) {
  $(".js-example-matcher-start").select2({
    matcher: function () { updateDatalist() }
  })
});

$(".select-2").select2();

pasteSelection();