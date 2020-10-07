var faker = require('faker-br');
var request = require('sync-request');
var firstName;
var lastName;

beforeEach(() => {
  browser.maximizeWindow();
  browser.url('/Contact-Us/contactus.html');
  expect(browser).toHaveUrlContaining('/Contact-Us/contactus.html');
  expect(browser.$('.//h2[@name="contactme"]')).toHaveText('CONTACT US');
  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
})

describe('Testar o formulário de contato', () => {
  var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
  var contactusDetails = JSON.parse(res.getBody().toString('utf8'));

  contactusDetails.forEach((contactusDetail) => {
    it(`Deve enviar mensagem com o email ${contactusDetail.email.toLowerCase()}`, () => {
      browser.$('[name="first_name"]').setValue(firstName);
      browser.$('[name="last_name"]').setValue(lastName);
      browser.$('[name="email"]').setValue(contactusDetail.email.toLowerCase());
      browser.$('[name="message"]').setValue(contactusDetail.body);
      browser.$('[type="submit"]').click();
      expect(browser).toHaveUrlContaining('/Contact-Us/contact-form-thank-you.html');
      expect(browser.$('h1')).toHaveText('Thank You for your Message!');
    });
  });
});