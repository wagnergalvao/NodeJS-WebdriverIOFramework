const {
  accessContactUsPage,
  clickOnHomePageLink,
  submitFormSuccessfully,
  submitFormWithoutData,
  submitFormWithoutField,
  resetFormSuccessfully
} = require("../../pages/contactUs.page");

beforeEach(() => {
  accessContactUsPage();
})

describe('Testar o formulário de contato Page Object', () => {

  it('Deve enviar mensagem com sucesso', () => {
    submitFormSuccessfully();
  });

  it('Deve redefinir os campos do formulário ao clicar no botão RESET', () => {
    resetFormSuccessfully();
  });

  it('Não deve enviar mensagem com o campo Email Address inválido', () => {
    submitFormWithoutField('validEmailAddress');
  });

  it('Não deve enviar mensagem sem preencher o campo First Name', () => {
    submitFormWithoutField('firstName');
  });

  it('Não deve enviar mensagem sem preencher o campo Last Name', () => {
    submitFormWithoutField('lastName');
  });

  it('Não deve enviar mensagem sem preencher o campo Email Address', () => {
    submitFormWithoutField('emailAddress');
  });

  it('Não deve enviar mensagem sem preencher o campo Comments', () => {
    submitFormWithoutField('comments');
  });

  it('Não deve enviar mensagem sem dados', () => {
    submitFormWithoutData();
  });

  it('Deve retornar a página inicial ao clicar no menu WebdriverUniversity.com (New Approach To Learning)-US', () => {
    clickOnHomePageLink();
  });

});
