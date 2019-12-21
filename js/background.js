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

  if(command === 'last_command') {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
        tabs[0].id,
        {code: `area = document.getElementsByTagName("textarea")[0];
                message = '!themed(html=testing a small part of my extensions automation)'
                alert(area.textContent);
                area.textContent = message;
                area.value = message;
                area.innerText = message;
                area.innerHTML = message;`}
      );
    });
  }


  console.log('onCommand event received for message: ', command);
});
