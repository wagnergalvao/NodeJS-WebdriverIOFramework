exports.switchToWindow = (handle) => {
  handle = handle ? handle : 0;
  browser.switchToWindow(browser.getWindowHandles()[handle]);
};
