describe('Validar links da página inicial', () => {

  it('Deve abrir a página de contato ao clicar no botão de contato', () => {
    browser.maximizeWindow();
    browser.url('/')
    expect(browser).toHaveTitle('WebDriverUniversity.com');
    $('#contact-us').click();
  });

  it('Deve abrir a página de login do portal ao clicar no botão login', () => {
    browser.maximizeWindow();
    browser.url('/')
    expect(browser).toHaveTitle('WebDriverUniversity.com');
    browser.$('#login-portal').click();
  });
});

//describe(`Verificar se os links na página inicial da webdriveruniversity estão funcionando corretamente`, () {
//
//  it(`verificar se o botão de contato abre a página de contato ${pathStep.name}`, function (done) {
//    browser.maximizeWindow();
//    browser.url('/');
//    title = browser.getTitle()
//    console.log('Title is: ' + title);
//    browser.click('#contact-us')
//    browser.pause(15000);
//  });
//
//  it(`verificar se o botão login abre a página de login do portal  ${pathStep.name}`, function (done) {
//    browser.maximizeWindow();
//    browser.url('/');
//    browser.click('#login-portal')
//    title = browser.getTitle()
//    console.log('Title is: ' + title);
//    browser.pause(15000);
//  });
//})