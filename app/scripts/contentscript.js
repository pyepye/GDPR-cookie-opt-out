import { delay } from './utils';
import { oathOptOut, quantcastOptOut, ezCookieOptOut, evidonOptOut } from './workers';


// function delay(ms) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, ms);
//   });
// }


document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    console.log('readyState');

    /* Quantcast */
    const quantcast = document.querySelector('.qc-cmp-showing');
    if (quantcast !== undefined && quantcast !== null) {
      quantcastOptOut();
    }

    /* Oath family */
    const consentWizard = document.querySelector('.consent-wizard');
    if (consentWizard !== undefined && consentWizard !== null) {
      oathOptOut();
    }

    /* EZ Cookie */
    const ezCookie = document.querySelector('#ez-cookie-dialog');
    if (ezCookie !== undefined && ezCookie !== null) {
      ezCookieOptOut();
    }

    /* Evidon */
    const evidon = document.querySelector('#_evidon-barrier-wrapper');
    console.log(evidon);
    if (evidon !== undefined && evidon !== null) {
      evidonOptOut();
    }

  }

}

// delay(3000).then(() => {
//   console.log('trustArc');
//   const trustArc = document.querySelector('.gwt-Frame');
//   console.log(trustArc);
// }).catch((error) => {
//   console.log('Error', error);
// });

// const trustArc = document.querySelector('.gwt-Frame');
// console.log(trustArc);

/*
// Select the node that will be observed for mutations
var targetNode = document.querySelector('body');
// Options for the observer (which mutations to observe)
var config = { attributes: true, childList: true, subtree: true };
// Callback function to execute when mutations are observed
showMoreClicked = false;
var callback = function(mutationsList, observer) {
  for(var mutation of mutationsList) {
    if (mutation.type == 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type == 'attributes') {
      console.log('The ' + mutation.attributeName + ' attribute was modified.');
    }
  }
};
// Create an observer instance linked to the callback function
var observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
*/


// const landing = document.querySelector('.landing-review')
// if (landing !== undefined && landing !== null) {
//   landing.click();
// }

// const panel = document.querySelector('.data-privacy');
// if (panel !== undefined) {
//   const buttons = document.querySelectorAll('.dk');
//   console.log(buttons);
//   buttons.forEach(function (button) {
//     button.classList.add('no');
//     button.classList.add('active');
//     button.classList.remove('dk');
//     button.textContent = 'No';
//     const span = button.parentElement.querySelector('span');
//     span.textContent = '';
//   });
// }


/* IGN */
// const moreOptions = document.querySelector('.evidon-barrier-cookiebutton');
// if (moreOptions !== undefined && moreOptions !== null) {
//   moreOptions.click();
//   const optOut = document.querySelector('#opt-out-all-button');
//   optOut.click()
// }
