const { doGetAttribute } = require("../utils/doGetAttribute");
const { doGetTagName } = require("../utils/doGetTagName");
const { doGetText } = require("../utils/doGetText");
const { doGetValue } = require("../utils/doGetValue");
const { doSwitchToWindow } = require("../utils/doSwitchToWindow");
const { doWaitForDisplayed } = require("../utils/doWaitForDisplayed");
//  Page Elements
const contactUsPage = {
  title: 'WebDriver | Contact Us',
  homeUri: '/',
  homeButton: '#contact-us',
  uri: '/Contact-Us/contactus.html',
  url: 'http://www.webdriveruniversity.com'
};
const contactUsHeader = {
  locator: '#contact_me [name="contactme"]',
  tag: 'h2',
  text: 'CONTACT US'
};
const homePageLink = {
  locator: '#nav-title',
  tag: 'a',
  href: '../index.html',
  text: 'WebdriverUniversity.com (New Approach To Learning)-US',
  homeTitle: 'WebDriverUniversity.com'
};
//  Form Elements
const firstNameField = {
  locator: '#contact_form [name="first_name"][type="text"][class="feedback-input"][placeholder="First Name"]',
  tag: 'input'
};
const lastNameField = {
  locator: '#contact_form [name="last_name"][type="text"][class="feedback-input"][placeholder="Last Name"]',
  tag: 'input'
};
const emailAddressField = {
  locator: '#contact_form [name="email"][type="text"][class="feedback-input"][placeholder="Email Address"]',
  tag: 'input'
};
const commentsField = {
  locator: '#contact_form [name="message"][class="feedback-input"][placeholder="Comments"]',
  tag: 'textarea'
};
const resetButton = {
  locator: '#form_buttons [type="reset"][value="RESET"]'
};
const submitButton = {
  locator: '#form_buttons [type="submit"][value="SUBMIT"]'
};
//  Exports
exports.accessContactUsPage = () => {
  browser.maximizeWindow();
  browser.url(contactUsPage.homeUri);
  doWaitForDisplayed(contactUsPage.homeButton);
  browser.$(contactUsPage.homeButton).click();
  doSwitchToWindow(1);
  this.validateContactUsPage()
};
exports.openContactUsPage = () => {
  browser.maximizeWindow();
  browser.url(contactUsPage.uri);
  this.validateContactUsPage()
};
exports.clickOnHomePageLink = () => {
  browser.maximizeWindow();
  doWaitForDisplayed(homePageLink.locator);
  browser.$(homePageLink.locator).click();
  expect(browser).toHaveUrl(doGetAttribute(homePageLink.locator, 'href'))
  doWaitForDisplayed(contactUsPage.homeButton);
};
exports.validateContactUsPage = () => {
  doWaitForDisplayed(contactUsHeader.locator);
  expect(doGetTagName(contactUsHeader.locator)).toBe(contactUsHeader.tag);
  expect(doGetText(contactUsHeader.locator)).toBe(contactUsHeader.text);
  expect(doGetValue(firstNameField.locator));
  expect(doGetTagName(firstNameField.locator)).toBe(firstNameField.tag);
  expect(doGetValue(lastNameField.locator));
  expect(doGetTagName(lastNameField.locator)).toBe(lastNameField.tag);
  expect(doGetValue(emailAddressField.locator));
  expect(doGetTagName(emailAddressField.locator)).toBe(emailAddressField.tag);
  expect(doGetValue(commentsField.locator));
  expect(doGetTagName(commentsField.locator)).toBe(commentsField.tag);
  expect(doGetValue(resetButton.locator));
  expect(doGetValue(submitButton.locator));
};
