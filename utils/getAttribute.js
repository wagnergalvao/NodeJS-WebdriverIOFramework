exports.getAttribute = (element, attribute) => {
  attribute = attribute ? attribute : 'tagName';
  return browser.$(element).getAttribute(attribute);
};
