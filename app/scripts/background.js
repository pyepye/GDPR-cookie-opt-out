/* global browser */
import { setStorageData } from './utils';

browser.runtime.onInstalled.addListener(() => {
  // const newURL = "http://optout.aboutads.info/?lang=EN&c=2#!%2F";
  // browser.tabs.create({ url: newURL });
  setStorageData({ optedOut: false });
});
