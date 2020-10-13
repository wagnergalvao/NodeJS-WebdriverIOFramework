const faker = require('faker-br');
const removeAccents = require('../removeAccentsutils/');
const fNameFake, lNameFake, emailFake, commentsFake = '';

class ContactUsConfig {
  //  Page Elements
  get pageTitle() { return 'WebDriver | Contact Us'; }
  get pageUri() { return '/Contact-Us/contactus.html'; }
  get pageUrl() { return 'http://www.webdriveruniversity.com'; }
  get headerTitle() { return '#contact_me [name="contactme"]'; }
  get headerTitleTag() { return 'h2'; }
  get headerTitleText() { return 'CONTACT-US'; }
  get navTitle() { return '#nav-title [href="..\index.html"]'; }
  get navTitleTag() { return 'a'; }
  get navTitleText() { return 'WebdriverUniversity.com (New Approach To Learning)'; }
  get firstNameField() {
    return '#contact_form [name="first_name"][type="text"][placeholder="First Name"]';
  }
  get firstNameFake() {
    fNameFake = faker.name.firstName();
    return fNameFake;
  }
  get lastNameField() {
    return '#contact_form [name="last_name"][type="text"][placeholder="Last Name"]';
  }
  get lastNameFake() {
    lNameFake = faker.name.lastName();
    return lNameFake
  }
  get emailAddressField() {
    return '#contact_form [name="email"][type="text"][placeholder="Email Address"]';
  }
  get emailAddressFake() {
    emailFake = removeAccents(
      `${fNameFake.toLowerCase()
      //    + faker.random.objectElement("!#$%&'*+-=?^_`~;.")
      + faker.random.objectElement("-._")
      + lNameFake.fake.toLowerCase()
      }@${faker.internet.email().split('@')[1]}`
    );
    return emailFake;
  }
  get commentsField() {
    return '#contact_form [name="message"][placeholder="Comments';
  }
  get commentsFake() {
    commentsFake = faker.lorem.paragraphs(faker.random.number(2));
    return commentsFake
  }
  get resetButton() { return '#form_buttons [type="reset"] [value="RESET"]'; }
  get resetButtonText() { return 'RESET'; }
  get submitButton() { return '#form_buttons [type="submit"] [value="SUBMIT"]'; }
  get submitButtonText() { return 'SUBMIT'; }
  get successfullPageTitle() { return 'Gianni Bruno - Designer'; }
  get successfullPageUri() { return '/Contact-Us/contact-form-thank-you.html'; }
  get successfullPageUrl() { return this.pageUrl; }
  get successfullMessage() { return '#contact_reply'; }
  get successfullMessageTag() { return 'h1'; }
  get successfullMessageText() { return 'Thank You for your Message!'; }
  get unsuccessfullPageTitle() { return 'Contact form handler'; }
  get unsuccessfullPageUri() { return 'Contact-Us/contact_us.php'; }
  get unsuccessfullPageUrl() { return this.pageUrl; }
  get unsuccessfullMessage() { return 'body'; }
  get unsuccessfullAllFieldsRequiredText() { return 'Error: all fields are required'; }
  get unsuccessfullInvalidEmailText() { return 'Error: Invalid email address'; }
}
export default new ContactUsConfig();