const {
  accessContactUsPage,
  clickOnHomePageLink,
  fillFormCorrectly,
  openContactUsPage
} = require("../../pages/contactUs.page");

beforeEach(() => {
  accessContactUsPage();
})

describe('Testar o formulário de contato', () => {
  it('Deve enviar mensagem com sucesso', () => {
    fillFormCorrectly()
  });
  it('Deve retornar a página inicial ao clicar no menu WebdriverUniversity.com (New Approach To Learning)-US', () => {
    clickOnHomePageLink();
  });

});
