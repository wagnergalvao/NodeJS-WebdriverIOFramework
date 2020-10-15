const { getAttribute } = require("../utils/getAttribute");
const { getTagName } = require("../utils/getTagName");
const { getText } = require("../utils/getText");
const { switchToWindow } = require("../utils/switchToWindow");
const { waitForDisplayed } = require("../utils/waitForDisplayed");

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
  homeTitle: 'WebDriverUniversity.com',
  homeUri: '/'
};
exports.accessContactUsPage = () => {
  browser.maximizeWindow();
  browser.url(contactUsPage.homeUri);
  waitForDisplayed(contactUsPage.homeButton);
  browser.$(contactUsPage.homeButton).click();
  switchToWindow(1);
  this.validateContactUsPage()
};
exports.openContactUsPage = () => {
  browser.maximizeWindow();
  browser.url(contactUsPage.uri);
  this.validateContactUsPage()
};
exports.clickOnHomePageLink = () => {
  browser.maximizeWindow();
  waitForDisplayed(homePageLink.locator);
  browser.$(homePageLink.locator).click();
  expect(browser).toHaveUrl(getAttribute(homePageLink.locator, 'href'))
  waitForDisplayed(contactUsPage.homeButton);
};
exports.validateContactUsPage = () => {
  waitForDisplayed(contactUsHeader.locator);
  expect(getTagName(contactUsHeader.locator)).toBe(contactUsHeader.tag);
  expect(getText(contactUsHeader.locator)).toBe(contactUsHeader.text);
};
