chrome.browserAction.onClicked.addListener(function(activeTab){
    var newURL = "https://carbon.now.sh/";
    chrome.tabs.create({ url: newURL });
  });