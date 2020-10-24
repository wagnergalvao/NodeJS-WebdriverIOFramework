const LoginPortalPage = require("../../pages/loginPortal.page");

beforeEach(() => {
  LoginPortalPage.accessLoginPortalPage();
});

describe('Testar o formulário de login do portal', () => {

  it('Deve fazer login com sucesso', () => {
    LoginPortalPage.doLogin(LoginPortalPage.userName2, LoginPortalPage.password2);
    LoginPortalPage.validateSuccessfulLogin();
  });

  it('Não deve fazer login com senha errada', () => {
    LoginPortalPage.doLogin(LoginPortalPage.userName2, LoginPortalPage.password1);
    LoginPortalPage.validateFailLogin();
  });

  it('Não deve fazer login com usuário não autorizado', () => {
    LoginPortalPage.doLogin(LoginPortalPage.fakeUserName, LoginPortalPage.fakePassword);
    LoginPortalPage.validateFailLogin();
  });

  it('Não deve fazer login sem dados', () => {
    LoginPortalPage.doLogin(null, null);
    LoginPortalPage.validateFailLogin();
  });

  it('Não deve fazer login sem nome do usuário', () => {
    LoginPortalPage.doLogin(null, LoginPortalPage.password1);
    LoginPortalPage.validateFailLogin();
  });

  it('Não deve fazer login sem senha', () => {
    LoginPortalPage.doLogin(LoginPortalPage.userName1, null);
    LoginPortalPage.validateFailLogin();
  });
});