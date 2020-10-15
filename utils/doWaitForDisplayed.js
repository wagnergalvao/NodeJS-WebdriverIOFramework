exports.doWaitForDisplayed = (element, timeout) => {
  timeout = timeout ? timeout : 3000;
  browser.$(element).waitForDisplayed({ timeout: timeout });
};
