var a = document.getElementsByTagName('a');
console.log(document.getRootNode());
var port = chrome.runtime.connect();

window.addEventListener("message", function(event) {
  // We only accept messages from ourselves
  if (event.source != window)
    return;

  if (event.data.type && (event.data.type == "FROM_PAGE")) {
    console.log("Content script received: " + event.data.text);
    port.postMessage(event.data.text);
  }
}, false);

//var a = document.getElementsByClassName("style-scope ytd-thumbnail no-transition");
var a = document.getElementsByClassName("a");
console.log(document.url);
