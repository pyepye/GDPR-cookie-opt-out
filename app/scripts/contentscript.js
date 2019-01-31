import {
  oathOptOut, quantcastOptOut, ezCookieOptOut, optanonOptOut, shareThisOptOut,
  surbmaOptOut, streamAmpOptOut,
  // evidonOptOut, trusteOptOut, cmpOptOut, trustArcOptOut  - Do not work
} from './workers';
import { selectorExists } from './utils';


let interval = '';
let loopCount = 0;

function runSelectors() {
  console.log(`runSelectors: ${loopCount}`);

  /* Quantcast */
  if (selectorExists(['.qc-cmp-showing'])) {
    quantcastOptOut();
    clearInterval(interval);
  }


  /* Oath family */
  if (selectorExists(['.consent-wizard', '.consent-container'])) {
    oathOptOut();
    clearInterval(interval);
  }


  /* EZ Cookie */
  if (selectorExists(['#ez-cookie-dialog'])) {
    ezCookieOptOut();
    clearInterval(interval);
  }


  /* Optanon OneTrust */
  if (selectorExists(['.optanon-alert-box-wrapper'])) {
    optanonOptOut();
    clearInterval(interval);
  }


  /* Sharethis */
  if (selectorExists(['.app_gdpr'])) {
    shareThisOptOut();
    clearInterval(interval);
  }

  /* Surbma */
  const snackbar = document.querySelector('.snackbar-container button');
  if (snackbar !== undefined && snackbar !== null && snackbar.textContent === 'Cookie settings') {
    surbmaOptOut();
    clearInterval(interval);
  }

  /* StreamAmp */
  if (selectorExists(['.app_gdpr--2k2uB'])) {
    streamAmpOptOut();
    clearInterval(interval);
  }

  /* Future Consent-Management Platform */
  /*
    Does not work due to not being able to find any node inside main div
  */
  // if (selectorExists(['#cmp-container-id'])) {
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
