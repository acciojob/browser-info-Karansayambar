//your JS code here. If required.
function displayBrowserInfo() {
    var browserName = navigator.appName;
    var version = navigator.appVersion;

    var browserInfoMessage = "You are using " + browserName + " version " + version;
    var browserInfoDiv = document.getElementById('browser-info');
    if (browserInfoDiv) {
      browserInfoDiv.innerHTML = browserInfoMessage;
    }
  }

  // Call the function when the page is loaded
  window.onload = displayBrowserInfo;