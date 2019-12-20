chrome.runtime.onInstalled.addListener(function() {

  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("New background available!");
  });

});

chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
  chrome.declarativeContent.onPageChanged.addRules([{
    conditions: [new chrome.declarativeContent.PageStateMatcher({
      pageUrl: {hostEquals: 'www.twitch.tv'},
    })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }]);
});

chrome.commands.onCommand.addListener(function(command) {
  console.log('onCommand event received for message: ', command);
});
