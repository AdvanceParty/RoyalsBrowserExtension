'use strict';

// universal Web Extension
window.browser = window.msBrowser || window.browser || window.chrome;

browser.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

browser.browserAction.onClicked.addListener(function() {
  browser.tabs.create({
    url: appURL,
  });
});
