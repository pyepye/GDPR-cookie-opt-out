/* global browser */

export function clickElement(selector) {
  const element = document.querySelector(selector);
  if (element !== undefined && element !== null) {
    element.click();
    return true;
  }
  return false;
}


export function clickOneElement(selectorList) {
  return selectorList.some(clickElement);
}


export function clickAllElementsDifferentSelectors(selectorList) {
  return selectorList.every(clickElement);
}


export function clickAllElementsSameSelector(selector) {
  const elements = document.querySelectorAll(selector);
  if (elements.length === 0) {
    return false;
  }
  elements.forEach((element) => {
    element.click();
  });
  return true;
}


export function selectorExists(selectors) {
  let exists = false;
  selectors.forEach((selector) => {
    const element = document.querySelector(selector);
    if (element !== undefined && element !== null) {
      exists = true;
    }
  });
  return exists;
}


export function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


export function getStorageData(keys) {
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
