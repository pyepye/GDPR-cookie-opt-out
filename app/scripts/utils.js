/* global browser */

export function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


export function getStorageData(keys) {
  console.log(browser);
  return browser.storage.sync.get(keys);
}


export function setStorageData(data) {
  return browser.storage.sync.set(data);
}


export function getCurrentTab() {
  const queryInfo = {
    active: true,
    currentWindow: true,
  };
  return browser.tabs.query(queryInfo);
}
