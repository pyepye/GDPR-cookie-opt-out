import {
  oathOptOut, quantcastOptOut, ezCookieOptOut, optanonOptOut, shareThisOptOut,
  // evidonOptOut, trusteOptOut, cmpOptOut, trustArcOptOut  - Do not work
} from './workers';

let interval = '';
let loopCount = 0;

function runSelectors() {
  console.log(`\n\nrunSelectors: ${loopCount}\n\n`);

  /* Quantcast */
  let quantcast = null;
  quantcast = document.querySelector('.qc-cmp-showing');
  if (quantcast !== undefined && quantcast !== null) {
    quantcastOptOut();
    clearInterval(interval);
  }


  /* Oath family */
  const oathContainers = [
    document.querySelector('.consent-wizard'),
    document.querySelector('.consent-container'),
  ];
  oathContainers.forEach((container) => {
    if (container !== undefined && container !== null) {
      oathOptOut();
      clearInterval(interval);
    }
  });


  /* EZ Cookie */
  const ezCookie = document.querySelector('#ez-cookie-dialog');
  if (ezCookie !== undefined && ezCookie !== null) {
    ezCookieOptOut();
    clearInterval(interval);
  }


  /* Optanon OneTrust */
  /* Find out which one delay is needed for:
      * https://www.onetrust.com/
      * https://videologygroup.com/en/learn-about-interest-based-ads-opt-out
      * https://www.thetimes.co.uk/
      * https://www.thesun.co.uk/
  */
  const optanon = document.querySelector('.optanon-alert-box-wrapper');
  if (optanon !== undefined && optanon !== null) {
    optanonOptOut();
    clearInterval(interval);
  }


  /* Sharethis */
  const appGdpr = document.querySelector('.app_gdpr');
  if (appGdpr !== undefined && appGdpr !== null) {
    shareThisOptOut();
    clearInterval(interval);
  }


  /* Consent-Management Platform */
  // const cmpContainer = document.querySelector('#cmp-container-id');
  // if (cmpContainer !== undefined && cmpContainer !== null) {
  //   cmpOptOut();
  //   clearInterval(interval);
  // }


  /* Evidon */
  // const evidon = document.querySelector('#_evidon-barrier-wrapper');
  // if (evidon !== undefined && evidon !== null) {
  //   evidonOptOut();
  // }


  /* Truste */
  // const truste = document.querySelector('.truste_box_overlay');
  // if (truste !== undefined && truste !== null) {
  //   trusteOptOut();
  // }

  /* TrustArc */
  /* Has loading delays -
    Sometimes before manage settings  - https://www.formula1.com/
    Sometimes after manage settings - https://www.trustarc.com/
  */
  // const TrustArc = document.querySelector('.trustarc-banner');
  // if (TrustArc !== undefined && TrustArc !== null) {
  //   trustArcOptOut();
  //   clearInterval(interval);
  // }


  /* Handle loop */
  if (loopCount > 10) {
    clearInterval(interval);
  }
  loopCount += 1;
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    /* Delay / interval needed for sites like https://www.neowin.net */
    interval = window.setInterval(runSelectors, 500);
  }
};
