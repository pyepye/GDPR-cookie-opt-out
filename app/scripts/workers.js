import { getStorageData, setStorageData } from './utils';

export async function oathOptOut() {
  const setting = await getStorageData('optedOut');
  const optedOut = setting.optedOut;
  console.log(optedOut);

  if (!optedOut) {
    const moreOptions = document.querySelector('.moreOptions');
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
      console.log(show)
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
    }
  }
}


export function quantcastOptOut() {
  const showPurposes = document.querySelector('#qc-cmp-purpose-button');
  if (showPurposes !== undefined && showPurposes !== null) {
    showPurposes.click();
    const reject = document.querySelector('.qc-cmp-secondary-button');
    if (reject !== undefined && reject !== null) {
      reject.click();
      const save = document.querySelector('.qc-cmp-save-and-exit');
      if (save !== undefined && save !== null) {
        save.click();
        console.log('Opted out of Quantcast');
      }
    }
  }
}


export function ezCookieOptOut() {
  console.log('ezCookieOptOut');
  const cookieDetails = document.querySelector('#ez-cookie-details');
  console.log(cookieDetails);
  if (cookieDetails !== undefined && cookieDetails !== null) {
    cookieDetails.click();
    document.querySelector('#ez-cookie-option-preference').value = "0";
    document.querySelector('#ez-cookie-option-statistics').value = "0";
    document.querySelector('#ez-cookie-option-marketing').value = "0";
    const saveButton = document.querySelector('#ez-ok-cookies');
    saveButton.click();
    console.log('Opted out of EZ Cookie');
  }
}


export function evidonOptOut() {
  const button = document.querySelector('.evidon-barrier-cookiebutton');
  if (button !== undefined && button !== null) {
    button.click();
    // Need to wait for ajax here:
    // const optOutAll = document.querySelector('#opt-out-all-button');
    // if (optOutAll !== undefined && optOutAll !== null) {
    //   optOutAll.click();
    // }
    // }).catch((error) => {
    //   console.log('Error', error);
    // });
  }
}
