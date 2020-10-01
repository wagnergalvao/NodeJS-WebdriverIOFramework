beforeEach(() => {
  browser.maximizeWindow();
  browser.url('/Hidden-Elements/index.html');
  expect(browser).toHaveUrlContaining('/Hidden-Elements/index.html');
})

describe('Testar existência de elementos ocultos', () => {

  it('Não deve exibir o botão CLICK ME! no quadro Not Displayed', () => {
    expect(browser.$('.thumbnail')
      .$('./h2[text()="Not Displayed"]')
    ).toBeVisible();
    expect(browser.$('.thumbnail')
      .$('#not-displayed')
      .$('#button1')
    ).not.toBeVisible();
  });

  it('Não deve exibir o botão CLICK ME! no quadro Visibility Hidden', () => {
    expect(browser.$$('.thumbnail')[1]
      .$('./h2[text()="Visibility Hidden"]')
    ).toBeVisible();
    expect(browser.$$('.thumbnail')[1]
      .$('#visibility-hidden')
      .$('#button2')
    ).not.toBeVisible();
  });

  it('Não deve exibir o botão CLICK ME! no quadro Zero Opacity', () => {
    expect(browser.$$('.thumbnail')[2]
      .$('./h2[text()="Zero Opacity"]')
    ).toBeVisible();
    expect(browser.$$('.thumbnail')[2]
      .$('#zero-opacity')
      .$('#button3')
    ).not.toBeVisible();
  });

  it('Deve exibir o texto Hidden Elements.. do cabeçalho', () => {
    expect(browser.$('#main-header')
      .$('./h1[text()="Hidden Elements.."]')
    ).toBeVisible();
  });
});