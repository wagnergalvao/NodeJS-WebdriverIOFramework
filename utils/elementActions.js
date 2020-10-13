class ElementActions {
  doGoToPage(text) {
    browser.Url(text)
  }
  doClick(element) {
    element.waitForDisplayed()
    element.click()
  }
  doDoubleClick(element) {
    element.waitForDisplayed()
    element.doubleClick()
  }
  doGetAttribute(element, attribute) {
    element.waitForDisplayed()
    return element.getAttribute(attribute)
  }
  doGetPageTitle() {
    return browser.getTitle()
  }
  doGetProperty(element, property) {
    element.waitForDisplayed()
    return element.getProperty(property)
  }
  doGetTagName(element) {
    element.waitForDisplayed()
    return element.getTagName()
  }
  doGetText(element) {
    element.waitForDisplayed()
    return element.getText()
  }
  doGetValue(element) {
    element.waitForDisplayed()
    return element.getValue()
  }
  doSelectByAttribute(element, attribute, value) {
    element.waitForDisplayed()
    element.selectByAttribute(attribute, value)
  }
  doSelectByIndex(element, index) {
    element.waitForDisplayed()
    element.selectByIndex(index)
  }
  doSelectByVisibleText(element, text) {
    element.waitForDisplayed()
    element.selectByIndex(text)
  }
  doSetValue(element, value) {
    element.waitForDisplayed()
    element.setValue(value)
  }
}
export default new ElementActions();