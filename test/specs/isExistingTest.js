beforeEach(() => {
  browser.maximizeWindow();
  browser.url('/Hidden-Elements/index.html');
  expect(browser).toHaveUrlContaining('/Hidden-Elements/index.html');
})

describe('Testar existência de elementos ocultos', () => {

  it('Deve encontrar botão CLICK ME! não exibido', () => {
    expect(browser.$('.thumbnail')
      .$('./h2[text()="Not Displayed"]')
    ).toExist();
    expect(browser.$('.thumbnail')
      .$('#not-displayed')
      .$('#button1')
    ).toExist();
  });

  it('Deve encontrar botão CLICK ME! oculto', () => {
    expect(browser.$$('.thumbnail')[1]
      .$('./h2[text()="Visibility Hidden"]')
    ).toExist();
    expect(browser.$$('.thumbnail')[1]
      .$('#visibility-hidden')
      .$('#button2')
    ).toExist();
  });

  it('Deve encontrar botão CLICK ME! com opacidade zero', () => {
    expect(browser.$$('.thumbnail')[2]
      .$('./h2[text()="Zero Opacity"]')
    ).toExist();
    expect(browser.$$('.thumbnail')[2]
      .$('#zero-opacity')
      .$('#button3')
    ).toExist();
  });

  it('Deve encontrar o texto Hidden Elements.. do cabeçalho', () => {
    expect(browser.$('#main-header')
      .$('./h1[text()="Hidden Elements.."]')
    ).toExist();
  });

  it('Não deve encontrar o elemento com id #no-such-element', function (done) {
    expect(browser.$('#no-such-element')).not.toExist();
  });
});