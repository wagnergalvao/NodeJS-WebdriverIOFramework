var faker = require("faker-br");
const { doAcceptAlert } = require("../utils/doAcceptAlert");
const { doGetAlertText } = require("../utils/doGetAlertText");
const { doSwitchToWindow } = require("../utils/doSwitchToWindow");
const { doTakeScreenshot } = require("../utils/doTakeScreenshot");

class LoginPortalPage {
  // Page Elements
  get pageUrl() { return browser.getUrl() };
  get pageTitle() { return browser.getTitle() };
  //  Homepage Elements
  get navigateToHomePage() {
    browser.maximizeWindow();
    browser.url(this.homeUrl);
    this.homeLoginPortalButton.waitForDisplayed();
    expect(browser).toHaveUrl(this.homeUrl);
    expect(this.pageTitle).toBe(this.homeTitle);
  };
  get homeLoginPortalButton() {
    return browser.$('#login-portal');
  };
  //  Homepage Validators
  get homeTitle() { return 'WebDriverUniversity.com' };
  get homeUrl() { return 'http://www.webdriveruniversity.com/' };
  //  LoginPortalPage Validators
  get loginPortalTitle() { return 'WebDriver | Login Portal' };
  get loginPortalUrl() { return 'http://www.webdriveruniversity.com/Login-Portal/index.html' };
  get fakeUserName() { return faker.internet.userName() };
  get fakePassword() { return faker.internet.password() };
  get userName1() { return 'webdriver' };
  get password1() { return 'webdriver123' };
  get userName2() { return 'webdriver2' };
  get password2() { return 'webdriver321' };
  //  LoginPortal elements
  get userNameField() {
    return browser.$('.form input[type="text"][id="text"][placeholder="Username"]')
  };
  get passwordField() {
    return browser.$(
      '.form input[type="password"][id="password"][placeholder="Password"]'
    )
  };
  get loginButton() {
    return browser.$(
      '.form button[type="submit"][id="login-button"][onclick="javascript:validate()"]'
    )
  };
  get failedAlertText() { return 'validation failed' };
  get failedAlertUrl() {
    return 'http://www.webdriveruniversity.com/Login-Portal/fail.html'
  };
  get successAlertText() { return 'validation succeeded' };
  get successAlertUrl() {
    return 'http://www.webdriveruniversity.com/Login-Portal/run.html'
  };
  // methods
  accessLoginPortalPage = () => {
    this.navigateToHomePage;
    this.homeLoginPortalButton.click();
    doSwitchToWindow(browser.getWindowHandles().length - 1);
    this.validateLoginPortalPage();
  };
  navigateToLoginPortalPage() {
    browser.maximizeWindow();
    browser.url(this.loginPortalUrl);
    this.validateLoginPortalPage();
  };
  validateLoginPortalPage() {
    expect(browser).toHaveUrl(this.loginPortalUrl);
    expect(this.pageTitle).toBe(this.loginPortalTitle);
    this.userNameField.waitForDisplayed();
    this.passwordField.waitForDisplayed();
    this.loginButton.waitForDisplayed();
  };
  doClickloginButton() {
    this.loginButton.click();
  };
  fillUserName(userName) {
    return this.userNameField.setValue(userName);
  };
  fillPassword(password) {
    return this.passwordField.setValue(password);
  };
  doLogin(userName, password) {
    if (userName) { this.fillUserName(userName) };
    if (password) { this.fillPassword(password) };
    this.doClickloginButton();
  };
  validateFailLogin() {
    expect(doGetAlertText()).toBe(this.failedAlertText);
    doAcceptAlert();
    expect(browser).toHaveUrl(this.failedAlertUrl);
    expect(this.pageTitle).toBe(this.loginPortalTitle);
  };
  validateSuccessfulLogin() {
    expect(doGetAlertText()).toBe(this.successAlertText);
    doAcceptAlert();
    expect(browser).toHaveUrl(this.successAlertUrl);
    expect(this.pageTitle).toBe(this.loginPortalTitle);
  };
};
module.exports = new LoginPortalPage();