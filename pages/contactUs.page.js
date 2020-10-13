const { default: contactUsConfig } = require("../config/contactUs.config");
const { default: elementActions } = require("../utils/elementActions");

class ContactUsPage {
  openPage() {
    elementActions.doGoToPage(contactUsConfig.pageUri());
  }
  fillContactForm(firstName, lastName, emailAddress, comments) {
    if (firstName) {
      elementActions.doSetValue(
        contactUsConfig.firstNameField(), contactUsConfig.firstName
      );
    }
    if (lastName) {
      elementActions.doSetValue(
        contactUsConfig.lastNameField(), contactUsConfig.lastName
      );
    }
    if (emailAddress) {
      elementActions.doSetValue(
        contactUsConfig.emailAddressField(), contactUsConfig.emailAddress
      );
    }
    if (comments) {
      elementActions.doSetValue(
        contactUsConfig.commentsField(), contactUsConfig.comments
      );
    }
  }
  fillFakeContactForm() {
    elementActions.doSetValue(
      contactUsConfig.firstNameField(), contactUsConfig.firstNameFake()
    );
    elementActions.doSetValue(
      contactUsConfig.lastNameField(), contactUsConfig.lastNameFake()
    );
    elementActions.doSetValue(
      contactUsConfig.emailAddressField(), contactUsConfig.emailAddressFake()
    );
    elementActions.doSetValue(
      contactUsConfig.commentsField(), contactUsConfig.commentsFake()
    );
  }
  validatePageElements() {
    expect(browser).toHaveUrl(`${contactUsConfig.pageUrl()}${contactUsConfig.pageUri()}`);
    expect(elementActions.doGetPageTitle()).toHaveText(contactUsConfig.pageTitle());
    expect(
      elementActions.doGetTagName(contactUsConfig.navTitle())
    ).toBe(contactUsConfig.navTitleTag);
    expect(
      elementActions.doGetText(contactUsConfig.navTitle())
    ).toBe(contactUsConfig.navTitleText());
    expect(
      elementActions.doGetTagName(contactUsConfig.headerTitle())
    ).toBe(contactUsConfig.headerTitleTag());
    expect(
      elementActions.doGetText(contactUsConfig.headerTitle())
    ).toBe(contactUsConfig.headerTitleText());
    expect(
      elementActions.doGetText(contactUsConfig.resetButton())
    ).toBe(contactUsConfig.resetButtonText());
    expect(
      elementActions.doGetText(contactUsConfig.submitButton())
    ).toBe(contactUsConfig.submitButtonText());
  }
  validateFormReset() {

  }
  validateFormSubmitSuccess() {

  }
  validateFormSubmitUnsuccess() {

  }
  validateMessageAllFieldsRequired() {

  }
  validateMessaInvalidEmail() {

  }
}
export default new ContactUsPage();