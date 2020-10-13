const faker = require('faker-br');
const { removeAccents } = require('../utils/removeAccents.js');

const contactUs = {
  // Locators
  pageTitle = {
    tag: 'h2',
    locator: '#contact_me [name="contactme"]',
    validText: 'CONTACT-US'
  },
  firstNameField = {
    locator: '#contact_form [name="first_name"][type="text"][placeholder="First Name"]',
    fake: faker.name.firstName()
  },

  lastNameField = {
    locator: '#contact_form [name="last_name"][type="text"][placeholder="Last Name"]',
    fake: faker.name.lastName()
  },

  emailAddressField = {
    locator: '#contact_form [name="email"][type="text"][placeholder="Email Address"]',
    fake: removeAccents(
      `${firstNameField.fake.toLowerCase()
      //    + faker.random.objectElement("!#$%&'*+-=?^_`~;.")
      + faker.random.objectElement("-._")
      + lastNameField.fake.toLowerCase()
      }@${faker.internet.email().split('@')[1]}`
    )
  },

  commentsField = {
    locator: '#contact_form [name="message"][placeholder="Comments"]',
    fake: faker.lorem.paragraphs(faker.random.number(2))
  },

  resetButton = {
    locator: '#form_buttons [type="reset"] [value="RESET"]',
    validText: 'RESET'
  },

  submitButton = {
    locator: '#form_buttons [type="submit"] [value="SUBMIT"]',
    validText: 'SUBMIT'
  },

  successfulMessage = {
    url: '${baseUrl}/Contact-Us/contactus.html',
    locator: '#form_buttons [type="submit"] [value="SUBMIT"]',
    validText: 'Thank You for your Message!'
  },

  unsuccessfulMessage = {
    url: '${baseUrl}/Contact-Us/contact_us.php',
    locator: 'body',
    validText = {
      allFieldsRequired: 'Error: all fields are required',
      InvalidEmail: 'Error: Invalid email address'
    }
  },

  title: () => {
    expect(browser.$(pageTitle.locator)).toHaveText(pageTitle.validText);
  },

  firstNameFake: () => {
    browser.$(firstNameField.locator).setValue(firstNameField.fake)
  }
}
module.exports = contactUs;