var faker = require('faker-br');
const { doRemoveAccents } = require("../../utils/doRemoveAccents.js");
var request = require('sync-request');

before(() => {
  browser.addCommand("submitContactUsForm",
    function (firstName, lastName, emailAddress, comments) {
      if (firstName) {
        browser.$('[name="first_name"]').setValue(firstName);
      }
      if (lastName) {
        browser.$('[name="last_name"]').setValue(lastName);
      }
      if (emailAddress) {
        browser.$('[name="email"]').setValue(emailAddress);
      }
      if (comments) {
        browser.$('[name="message"]').setValue(comments);
      }
      browser.$('[type="submit"]').click();
    }
  )
})

beforeEach(() => {
  browser.maximizeWindow();
  browser.url('/Contact-Us/contactus.html');
  expect(browser).toHaveUrlContaining('/Contact-Us/contactus.html');
  expect(browser.$('.//h2[@name="contactme"]')).toHaveText('CONTACT US');
  firstNameFake = faker.name.firstName();
  lastNameFake = faker.name.lastName();
  email = `${firstNameFake.toLowerCase()
    //    + faker.random.objectElement("!#$%&'*+-=?^_`~;.")
    + faker.random.objectElement("-._")
    + lastNameFake.toLowerCase()
    }@${faker.internet.email().split('@')[1]}`;
  emailFake = doRemoveAccents(email);
  messageFake = faker.lorem.words(faker.random.number(10) + 1);
})


describe('Testar o formulário de contato', () => {
  var res = request('GET', 'http://jsonplaceholder.typicode.com/posts/3/comments');
  var contactusDetails = JSON.parse(res.getBody().toString('utf8'));

  contactusDetails.forEach((contactusDetail) => {

    it(`Deve enviar mensagem com o email ${contactusDetail.email.toLowerCase()}`, () => {
      browser.submitContactUsForm(
        firstNameFake,
        lastNameFake,
        contactusDetail.email.toLowerCase(),
        contactusDetail.body
      );
      expect(browser).toHaveUrlContaining('/Contact-Us/contact-form-thank-you.html');
      expect(browser.$('h1')).toHaveText('Thank You for your Message!');
    });
  });

  it('Não deve enviar mensagem sem preencher os campos do formulário', () => {
    browser.submitContactUsForm();
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveTextContaining(
      'Error: all fields are required',
      'Error: Invalid email address');
  });

  it('Não deve enviar mensagem sem preencher o campo First Name', () => {
    browser.submitContactUsForm(
      null,
      lastNameFake,
      emailFake,
      messageFake
    );
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveText('Error: all fields are required');
  });

  it('Não deve enviar mensagem sem preencher o campo Last Name', () => {
    browser.submitContactUsForm(
      firstNameFake,
      null,
      emailFake,
      messageFake
    );
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveText('Error: all fields are required');
  });

  it('Não deve enviar mensagem com o campo Email inválido', () => {
    browser.submitContactUsForm(
      firstNameFake,
      lastNameFake,
      'q!w#e$r%t¨@gmail.com',
      messageFake
    );
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveText('Error: Invalid email address');
  });

  it('Não deve enviar mensagem sem preencher o campo Email', () => {
    browser.submitContactUsForm(
      firstNameFake,
      lastNameFake,
      null,
      messageFake
    );
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveTextContaining(
      'Error: all fields are required',
      'Error: Invalid email address');
  });

  it('Não deve enviar mensagem sem preencher o campo Comentários', () => {
    browser.submitContactUsForm(
      firstNameFake,
      lastNameFake,
      email
    );
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveText('Error: all fields are required');
  });
});