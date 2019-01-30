import {
  getStorageData, setStorageData, delay, clickOneElement, clickElement,
  clickAllElementsSameSelector,
} from './utils';

export async function oathOptOut() {
  const setting = await getStorageData('optedOut');
  const { optedOut } = setting;

  if (!optedOut) {
    clickOneElement(['.moreOptions', 'button[name=moreOptions]']);
    clickElement('.boxed-content a');
    const links = document.querySelectorAll('.our-partners-text a');
    if (links.length === 3) {
      const show = links[links.length - 1];
      show.click();
    }
    if (clickElement('label[for=iabTab]')) {
      if (clickElement('.tpp-deselect-all')) {
        if (clickElement('input[name=agree].btn-primary')) {
          setStorageData({ optedOut: true });
        }
      }
    }
  } else {
    clickElement('input[name=agree].btn-primary');
    if (clickElement('input.btn-primary.agree')) {
      setStorageData({ optedOut: false });
      console.log('Opted out of Oath');
    }
  }
}


export function quantcastOptOut() {
  clickElement('#qc-cmp-purpose-button');
  clickElement('.qc-cmp-secondary-button');
  clickElement('.qc-cmp-save-and-exit');
  console.log('Opted out of Quantcast');
}


export function ezCookieOptOut() {
  clickElement('#ez-cookie-details');
  document.querySelector('#ez-cookie-option-preference').value = '0';
  document.querySelector('#ez-cookie-option-statistics').value = '0';
  document.querySelector('#ez-cookie-option-marketing').value = '0';
  clickElement('#ez-ok-cookies');
  console.log('Opted out of EZ Cookie');
}


export function optanonOptOut() {
  clickElement('.optanon-toggle-display');
  let checkbox = null;
  const cookieTypes = [
    '#optanon-menu .menu-item-performance a',
    '#optanon-menu .menu-item-functional a',
    '#optanon-menu .menu-item-advertising a',
    '#optanon-menu .menu-item-performance button',
    '#optanon-menu .menu-item-functional button',
    '#optanon-menu .menu-item-advertising button',
  ];
  cookieTypes.forEach((selector) => {
    clickElement(selector);
    checkbox = document.querySelector('.optanon-status-checkbox');
    if (checkbox.getAttribute('aria-checked') === 'true') {
      checkbox.click();
    }
    checkbox = document.querySelector('.optanon-status-on input');
    if (checkbox !== undefined && checkbox !== null) {
      checkbox.click();
    }
  });
  const saveSelectors = [
    'a[title="Save Settings"]',
    'button[title="Save Settings"]',
    '.optanon-white-button-middle a',
    '.optanon-white-button-middle button',
  ];
  clickOneElement(saveSelectors);
  console.log('Opted out of Optanon One Trust');
}

export function shareThisOptOut() {
  clickElement('a.intro_showPurposes');
  // Only exists if toggles are turned on
  clickAllElementsSameSelector('.switch_isSelected');
  clickElement('a.details_showVendor');
  clickAllElementsSameSelector('.switch_isSelected');

  delay(10).then(() => {
    clickElement('.details_save');
    console.log('Opted out of ShareThis');
  });
}


// export function cmpOptOut() {
//   let showPurposes = document.querySelector('.cmp-btn-link');
//   // console.log('showPurposes', showPurposes);
//   // showPurposes = document.querySelector('.cmp-btn-link');
//   // console.log('showPurposes2', showPurposes);

//   delay(2000).then(() => {
//     showPurposes = document.querySelector('.cmp-btn-link');
//     console.log('showPurposes delay', showPurposes);
//     showPurposes = document.querySelector('.cmp-btn-link');
//     console.log('showPurposes delay2', showPurposes);
//   });

//   // if (showPurposes !== undefined && showPurposes !== null) {
//   //   showPurposes.click();
//   //   const enabled = document.querySelectorAll('.switch_isSelected');
//   //   enabled.forEach((element) => {
//   //     element.click();
//   //   });
//   //   delay(10).then(() => {
//   //     document.querySelector('.details_save').click();
//   //     console.log('Opted out of ShareThis');
//   //   });
//   // }
// }


// export function evidonOptOut() {
//   const button = document.querySelector('.evidon-barrier-cookiebutton');
//   if (button !== undefined && button !== null) {
//     button.click();
//     // Need to wait for ajax here:
//     // const optOutAll = document.querySelector('#opt-out-all-button');
//     // if (optOutAll !== undefined && optOutAll !== null) {
//     //   optOutAll.click();
//     // }
//     // }).catch((error) => {
//     //   console.log('Error', error);
//     // });
//   }
// }


// export function trusteOptOut() {
//   let viewCookieSettings;
//   viewCookieSettings = document.querySelector('.shp');
//   if (viewCookieSettings !== undefined && viewCookieSettings !== null) {
//     viewCookieSettings.click();
//     // Need to wait for ajax here:
//     // const optOutAll = document.querySelector('#opt-out-all-button');
//     // if (optOutAll !== undefined && optOutAll !== null) {
//     //   optOutAll.click();
//     // }
//     // }).catch((error) => {
//     //   console.log('Error', error);
//     // });
//   }
//   delay(2000).then(() => {
//     viewCookieSettings = document.querySelector('.shp');
//     if (viewCookieSettings !== undefined && viewCookieSettings !== null) {
//       viewCookieSettings.click();
//     }
//   });
// }


// export function trustArcOptOut() {
//   const show = document.querySelector('#truste-show-consent');
//   show.click();
//   const noButtons = document.querySelectorAll('span[aria-label="Choice: no"]');
//   let noPressed = false;
//   noButtons.forEach((button) => {
//     button.click();
//     noPressed = true;
//   });
//   if (noPressed) {
//     const submit = document.querySelector('.pdynamicbutton a.submit');
//     submit.click();
//   }
//   console.log('Opted out of TrustArc');
// }
