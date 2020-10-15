exports.doGetAttribute = (element, attribute) => {
  attribute = attribute ? attribute : 'tagName';
  return browser.$(element).getAttribute(attribute);
};
