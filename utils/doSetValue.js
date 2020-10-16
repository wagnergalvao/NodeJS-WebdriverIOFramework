exports.doSetValue = (element, text) => {
  text = text ? text : '';
  return browser.$(element).setValue(text);
};
