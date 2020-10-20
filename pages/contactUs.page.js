var faker = require('faker-br');
const { doClick } = require('../utils/doClick');
const { doGetAttribute } = require("../utils/doGetAttribute");
const { doGetTagName } = require("../utils/doGetTagName");
const { doGetText } = require("../utils/doGetText");
const { doGetValue } = require("../utils/doGetValue");
const { doRemoveAccents } = require('../utils/doRemoveAccents');
const { doSetValue } = require('../utils/doSetValue');
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
const successfulMessage = {
  url: `${contactUsPage.url}/Contact-Us/contact-form-thank-you.html`,
  title: 'Gianni Bruno - Designer',
  locator: '#contact_reply h1',
  text: 'Thank You for your Message!'
};
const unsuccessfulMessage = {
  url: `${contactUsPage.url}/Contact-Us/contact_us.php`,
  title: 'Contact form handler',
  locator: 'body',
  allFieldsText: 'Error: all fields are required',
  invalidEmailText: 'Error: Invalid email address'
};
// Fake contact
doGetFakeContact = () => {
  return (
    fakeContact = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      emailAddress: '',
      comments: faker.lorem.words(20)
    },
    fakeContact.emailAddress = doRemoveAccents(`${fakeContact.firstName.toLowerCase()
      //    + faker.random.objectElement("!#$%&'*+-=?^_`~;.")
      + faker.random.objectElement("-._")
      + fakeContact.lastName.toLowerCase()
      }@${faker.internet.email().split('@')[1]}`)
  )
}
// Fill form
fillForm = (fieldName) => {
  doGetFakeContact();
  if (fieldName != 'firstName') {
    doSetValue(firstNameField.locator, fakeContact.firstName);
  }
  if (fieldName != 'lastName') {
    doSetValue(lastNameField.locator, fakeContact.lastName);
  }
  if (fieldName != 'emailAddress') {
    emailAddress = fakeContact.emailAddress;
    if (fieldName === 'validEmailAddress') {
      emailAddress = emailAddress.replace("@", "#");
    }
    doSetValue(emailAddressField.locator, emailAddress);
  }
  if (fieldName != 'comments') {
    doSetValue(commentsField.locator, fakeContact.comments);
  }
};
//  Exports
exports.accessContactUsPage = () => {
  browser.maximizeWindow();
  browser.url(contactUsPage.homeUri);
  doWaitForDisplayed(contactUsPage.homeButton);
  browser.$(contactUsPage.homeButton).click();
  doWaitForDisplayed(contactUsPage.homeButton);
  doSwitchToWindow(browser.getWindowHandles().length - 1);
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
  doWaitForDisplayed(contactUsPage.homeButton);
  expect(browser).toHaveUrl(doGetAttribute(homePageLink.locator, 'href'));
};
exports.resetFormSuccessfully = () => {
  fillForm('');
  doClick(resetButton.locator);
  expect(doGetValue(firstNameField.locator)).toBe('');
  expect(doGetValue(lastNameField.locator)).toBe('');
  expect(doGetValue(emailAddressField.locator)).toBe('');
  expect(doGetValue(commentsField.locator)).toBe('');
};
exports.submitFormSuccessfully = () => {
  fillForm('');
  doClick(submitButton.locator);
  doWaitForDisplayed(successfulMessage.locator);
  expect(browser).toHaveUrl(successfulMessage.url);
  expect(browser).toHaveTitle(successfulMessage.title);
  expect(doGetText(successfulMessage.locator)).toBe(successfulMessage.text);
};
exports.submitFormWithoutData = () => {
  doClick(submitButton.locator);
  doWaitForDisplayed(unsuccessfulMessage.locator);
  expect(browser).toHaveUrl(unsuccessfulMessage.url);
  expect(browser).toHaveTitle(unsuccessfulMessage.title);
  expect(browser.$(unsuccessfulMessage.locator)).toHaveTextContaining(
    unsuccessfulMessage.allFieldsText, unsuccessfulMessage.invalidEmailText
  );
}
exports.submitFormWithoutField = (fieldName) => {
  fillForm(fieldName);
  doClick(submitButton.locator);
  doWaitForDisplayed(unsuccessfulMessage.locator);
  expect(browser).toHaveUrl(unsuccessfulMessage.url);
  expect(browser).toHaveTitle(unsuccessfulMessage.title);
  switch (fieldName) {
    case 'emailAddress':
      expect(browser.$(unsuccessfulMessage.locator)).toHaveTextContaining(
        unsuccessfulMessage.allFieldsText, unsuccessfulMessage.invalidEmailText
      );
      break;
    case 'validEmailAddress':
      expect(doGetText(unsuccessfulMessage.locator)).toBe(
        unsuccessfulMessage.invalidEmailText
      );
      break;
    default:
      expect(doGetText(unsuccessfulMessage.locator)).toBe(unsuccessfulMessage.allFieldsText);
  };
};
exports.validateContactUsPage = () => {
  doWaitForDisplayed(contactUsHeader.locator);
  expect(browser).toHaveUrl(`${contactUsPage.url}${contactUsPage.uri}`);
  expect(browser).toHaveTitle(contactUsPage.title);
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
