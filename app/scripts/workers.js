import { getStorageData, setStorageData, delay } from './utils';

export async function oathOptOut() {
  const setting = await getStorageData('optedOut');
  const { optedOut } = setting;

  if (!optedOut) {
    let moreOptions = null;
    moreOptions = document.querySelector('.moreOptions');
    if (moreOptions !== undefined && moreOptions !== null) {
      moreOptions.click();
    }
    moreOptions = document.querySelector('button[name=moreOptions]');
    if (moreOptions !== undefined && moreOptions !== null) {
      moreOptions.click();
    }
    const manage = document.querySelector('.boxed-content a');
    if (manage !== undefined && manage !== null) {
      manage.click();
    }
    const links = document.querySelectorAll('.our-partners-text a');
    if (links.length === 3) {
      const show = links[links.length - 1];
      show.click();
    }
    const iabTab = document.querySelector('label[for=iabTab]');
    if (iabTab !== undefined && iabTab !== null) {
      iabTab.click();
      const deselectAll = document.querySelector('.tpp-deselect-all');
      if (deselectAll !== undefined && deselectAll !== null) {
        deselectAll.click();
        const done = document.querySelector('input[name=agree].btn-primary');
        if (done !== undefined && done !== null) {
          setStorageData({ optedOut: true });
          done.click();
        }
      }
    }
  } else {
    const done = document.querySelector('input[name=agree].btn-primary');
    if (done !== undefined && done !== null) {
      done.click();
    }
    const ok = document.querySelector('input.btn-primary.agree');
    if (ok !== undefined && ok !== null) {
      ok.click();
      setStorageData({ optedOut: false });
      console.log('Opted out of Oath');
    }
  }
}


export function quantcastOptOut() {
  const showPurposes = document.querySelector('#qc-cmp-purpose-button');
  if (showPurposes !== undefined && showPurposes !== null) {
    showPurposes.click();
    document.querySelector('.qc-cmp-secondary-button').click();
    document.querySelector('.qc-cmp-save-and-exit').click();
    console.log('Opted out of Quantcast');
  }
}


export function ezCookieOptOut() {
  const cookieDetails = document.querySelector('#ez-cookie-details');
  if (cookieDetails !== undefined && cookieDetails !== null) {
    cookieDetails.click();
    document.querySelector('#ez-cookie-option-preference').value = '0';
    document.querySelector('#ez-cookie-option-statistics').value = '0';
    document.querySelector('#ez-cookie-option-marketing').value = '0';
    document.querySelector('#ez-ok-cookies').click();
    console.log('Opted out of EZ Cookie');
  }
}


export function optanonOptOut() {
  const cookieSettings = document.querySelector('.optanon-toggle-display');
  if (cookieSettings !== undefined && cookieSettings !== null) {
    cookieSettings.click();
    let checkbox = null;
    const cookieTypes = [
      document.querySelector('#optanon-menu .menu-item-performance a'),
      document.querySelector('#optanon-menu .menu-item-functional a'),
      document.querySelector('#optanon-menu .menu-item-advertising a'),
      document.querySelector('#optanon-menu .menu-item-performance button'),
      document.querySelector('#optanon-menu .menu-item-functional button'),
      document.querySelector('#optanon-menu .menu-item-advertising button'),
    ];
    cookieTypes.forEach((element) => {
      if (element !== undefined && element !== null) {
        element.click();
        checkbox = document.querySelector('.optanon-status-checkbox');
        if (checkbox.getAttribute('aria-checked') === 'true') {
          checkbox.click();
        }
        checkbox = document.querySelector('.optanon-status-on input');
        if (checkbox !== undefined && checkbox !== null) {
          checkbox.click();
        }
      }
    });
    const saveButtons = [
      document.querySelector('a[title="Save Settings"]'),
      document.querySelector('button[title="Save Settings"]'),
      document.querySelector('.optanon-white-button-middle a'),
      document.querySelector('.optanon-white-button-middle button'),
    ];
    saveButtons.forEach((button) => {
      if (button !== undefined && button !== null) {
        button.click();
      }
    });
    console.log('Opted out of Optanon One Trust');
  }
}

export function shareThisOptOut() {
  const showPurposes = document.querySelector('a.intro_showPurposes');
  if (showPurposes !== undefined && showPurposes !== null) {
    showPurposes.click();
    const enabled = document.querySelectorAll('.switch_isSelected');
    enabled.forEach((element) => {
      element.click();
    });
    delay(10).then(() => {
      document.querySelector('.details_save').click();
      console.log('Opted out of ShareThis');
    });
  }
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
//   noButtons.forEach((button) => {
//     button.click();
//   });
//   console.log('Opted out of TrustArc');
// }
