describe('Validar links da página inicial', () => {

  it('Deve abrir a página de contato ao clicar no botão CONTACT US', () => {
    browser.maximizeWindow();
    //    browser.debug();
    browser.url('/')
    expect(browser).toHaveUrlContaining('/');
    expect(browser).toHaveTitle('WebDriverUniversity.com');
    browser.$('#contact-us').click();
    browser.switchToWindow(browser.getWindowHandles()[1]);
    expect(browser).toHaveUrlContaining('/Contact-Us/contactus.html');
    expect(browser.$('.//h2[@name="contactme"]')).toHaveText('CONTACT US');
  });

  it('Deve abrir a página de login do portal ao clicar no botão LOGIN PORTAL', () => {
    browser.maximizeWindow();
    browser.url('/')
    expect(browser).toHaveUrlContaining('/');
    expect(browser).toHaveTitle('WebDriverUniversity.com');
    browser.$('#login-portal').click();
    browser.switchToWindow(browser.getWindowHandles()[2]);
    expect(browser).toHaveUrlContaining('/Login-Portal/index.html');
    expect(browser.$('#login-button')).toHaveText('Login');
  });

  it('Deve abrir a página de cliques de botão ao clicar no botão BUTTON CLICKS', () => {
    browser.maximizeWindow();
    browser.url('/')
    expect(browser).toHaveUrlContaining('/');
    expect(browser).toHaveTitle('WebDriverUniversity.com');
    browser.$('#button-clicks').click();
    browser.switchToWindow(browser.getWindowHandles()[3]);
    expect(browser).toHaveUrlContaining('/Click-Buttons/index.html');
    expect(browser.$('//h2[text()="WebElement Click"]'));
    expect(browser.$('//h2[text()="JavaScript Click"]'));
    expect(browser.$('//h2[text()="Action Move & Click"]'));
  });

  it('Deve abrir a página de lista de tarefas ao clicar no botão TO DO LIST', () => {
    browser.maximizeWindow();
    browser.url('/')
    expect(browser).toHaveUrlContaining('/');
    expect(browser).toHaveTitle('WebDriverUniversity.com');
    browser.$('#to-do-list').click();
    browser.switchToWindow(browser.getWindowHandles()[4]);
    expect(browser).toHaveUrlContaining('/To-Do-List/index.html');
    expect(browser.$('h1')).toHaveTextContaining('TO-DO LIST');
  });

});
