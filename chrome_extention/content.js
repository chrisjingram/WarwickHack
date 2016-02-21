function log (msg) {
  chrome.runtime.sendMessage({logMsg: msg, method: "log"}, function() {});
}

chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.method == "getSelection")
    sendResponse({data: window.getSelection().toString()});
  else
    sendResponse({}); // snub them.
});

log("CONTENT.JS HAS LOADED");