var s = document.createElement('script');
s.src = chrome.extension.getURL('script.js');
(document.head || document.documentElement).appendChild(s);
s.onload = function () {
    s.parentNode.removeChild(s);
};

// // Save it using the Chrome extension storage API.
// chrome.storage.sync.set({ 'foo': 'hello', 'bar': 'hi' }, function () {
//     console.log('Settings saved');
// });

// // Read it using the storage API
// chrome.storage.sync.get(['foo', 'bar'], function (items) {
//     console.log('Settings retrieved', items);
// });