//const { default: contactUsPage } = require("../../pages/contactUs.page");

beforeEach(() => {
  console.log('beforeEach');
  browser.url('/Contact-Us/contactus.html');
  //contactUsPage.openPage();
  //contactUsPage.validatePageElements();
})

describe('Testar o formulário de contato', () => {
  it('Deve enviar mensagem com sucesso', () => {
    console.log('it => Deve enviar mensagem com sucesso');
  });

});
