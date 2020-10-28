var faker = require('faker-br');
const { doRemoveAccents } = require("../../utils/doRemoveAccents.js");
var firstName;
var lastName;
var email;

beforeEach(() => {
  browser.maximizeWindow();
  browser.url('/Contact-Us/contactus.html');
  expect(browser).toHaveUrlContaining('/Contact-Us/contactus.html');
  expect(browser.$('.//h2[@name="contactme"]')).toHaveText('CONTACT US');
  firstName = faker.name.firstName();
  lastName = faker.name.lastName();
  email = `${firstName.toLowerCase()
    //    + faker.random.objectElement("!#$%&'*+-=?^_`~;.")
    + faker.random.objectElement("-._")
    + lastName.toLowerCase()
    }@${faker.internet.email().split('@')[1]}`;
  email = doRemoveAccents(email);
})

describe('Testar o formulário de contato original', () => {

  it('Deve enviar mensagem com sucesso', () => {
    browser.$('[name="first_name"]').setValue(firstName);
    browser.$('[name="last_name"]').setValue(lastName);
    browser.$('[name="email"]').setValue(email);
    browser.$('[name="message"]').setValue(faker.lorem.paragraphs(2));
    browser.$('[type="submit"]').click();
    expect(browser).toHaveUrlContaining('/Contact-Us/contact-form-thank-you.html');
    expect(browser.$('h1')).toHaveText('Thank You for your Message!');
  });

  it('Deve redefinir os campos do formulário ao clicar no botão RESET', () => {
    browser.$('[name="first_name"]').setValue(firstName);
    browser.$('[name="last_name"]').setValue(lastName);
    browser.$('[name="email"]').setValue(email);
    browser.$('[name="message"]').setValue(faker.lorem.paragraphs(2));
    browser.$('[type="reset"]').click();
    expect(browser).toHaveUrlContaining('/Contact-Us/contactus.html');
    expect(browser.$('.//h2[@name="contactme"]')).toHaveText('CONTACT US');
    expect(browser.$('[name="first_name"]')).toHaveValue('');
    expect(browser.$('[name="last_name"]')).toHaveValue('');
    expect(browser.$('[name="email"]')).toHaveValue('');
    expect(browser.$('[name="message"]')).toHaveValue('');
  });

  it('Não deve enviar mensagem sem preencher os campos do formulário', () => {
    browser.$('[type="submit"]').click();
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveTextContaining(
      'Error: all fields are required',
      'Error: Invalid email address');
  });

  it('Não deve enviar mensagem sem preencher o campo First Name', () => {
    browser.$('[name="last_name"]').setValue(lastName);
    browser.$('[name="email"]').setValue(email);
    browser.$('[name="message"]').setValue(faker.lorem.paragraphs(2));
    browser.$('[type="submit"]').click();
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveText('Error: all fields are required');
  });

  it('Não deve enviar mensagem sem preencher o campo Last Name', () => {
    browser.$('[name="first_name"]').setValue(firstName);
    browser.$('[name="email"]').setValue(email);
    browser.$('[name="message"]').setValue(faker.lorem.paragraphs(2));
    browser.$('[type="submit"]').click();
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveText('Error: all fields are required');
  });

  it('Não deve enviar mensagem com o campo Email inválido', () => {
    browser.$('[name="first_name"]').setValue(firstName);
    browser.$('[name="last_name"]').setValue(lastName);
    browser.$('[name="email"]').setValue('q!w#e$r%t¨@gmail.com');
    browser.$('[name="message"]').setValue(faker.lorem.paragraphs(2));
    browser.$('[type="submit"]').click();
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveText('Error: Invalid email address');
  });

  it('Não deve enviar mensagem sem preencher o campo Email', () => {
    browser.$('[name="first_name"]').setValue(firstName);
    browser.$('[name="last_name"]').setValue(lastName);
    browser.$('[name="message"]').setValue(faker.lorem.paragraphs(2));
    browser.$('[type="submit"]').click();
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveTextContaining(
      'Error: all fields are required',
      'Error: Invalid email address');
  });

  it('Não deve enviar mensagem sem preencher o campo Comentários', () => {
    browser.$('[name="first_name"]').setValue(firstName);
    browser.$('[name="last_name"]').setValue(lastName);
    browser.$('[name="email"]').setValue(email);
    browser.$('[type="submit"]').click();
    expect(browser).toHaveUrlContaining('/Contact-Us/contact_us.php');
    expect(browser.$('body')).toHaveText('Error: all fields are required');
  });

});