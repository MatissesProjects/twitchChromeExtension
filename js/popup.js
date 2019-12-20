let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      // {code: 'document.body.style.backgroundColor = "' + color + '";'}
      {code: 'document.getElementsByTagName("textarea")[0].value = "' + color + '";'}
    );
  });
};

chrome.commands.onCommand.addListener(function(command) {
  console.log('outside command:', command);
});

