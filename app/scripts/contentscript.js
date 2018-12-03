import { delay } from './utils';
import {
  oathOptOut, quantcastOptOut, ezCookieOptOut, optanonOptOut, shareThisOptOut,
  cmpOptOut,
  // evidonOptOut, trusteOptOut  - Does not work
} from './workers';


let quantcast = null;
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    console.log('readyState');

    /* Quantcast */
    /* Delay needed for sites like https://www.neowin.net */
    delay(3000).then(() => {
      quantcast = document.querySelector('.qc-cmp-showing');
      if (quantcast !== undefined && quantcast !== null) {
        quantcastOptOut();
      }
    }).catch((error) => {
      console.log('Error', error);
    });


    /* Oath family */
    const oathContainers = [
      document.querySelector('.consent-wizard'),
      document.querySelector('.consent-container'),
    ];
    oathContainers.forEach((container) => {
      if (container !== undefined && container !== null) {
        oathOptOut();
      }
    });

    /* EZ Cookie */
    const ezCookie = document.querySelector('#ez-cookie-dialog');
    if (ezCookie !== undefined && ezCookie !== null) {
      ezCookieOptOut();
    }

    /* Optanon OneTrust */
    delay(1000).then(() => {
      const optanon = document.querySelector('.optanon-alert-box-wrapper');
      if (optanon !== undefined && optanon !== null) {
        optanonOptOut();
      }
    }).catch((error) => {
      console.log('Error', error);
    });

    /* Sharethis */
    const appGdpr = document.querySelector('.app_gdpr');
    if (appGdpr !== undefined && appGdpr !== null) {
      shareThisOptOut();
    }

    /* Consent-Management Platform */
    const cmpContainer = document.querySelector('#cmp-container-id');
    if (cmpContainer !== undefined && cmpContainer !== null) {
      cmpOptOut();
    }


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
  }
};
