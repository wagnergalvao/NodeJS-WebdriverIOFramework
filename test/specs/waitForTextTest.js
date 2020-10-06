buttonClickAccordion = '#click-accordion';
panelTimeout = '#timeout'
textAppearBox = '#text-appear-box #hidden-text'
hiddenText = '#hidden-text'

before(() => {
  browser.maximizeWindow();
  browser.url('/Accordion/index.html');
  expect(browser).toHaveUrlContaining('/Accordion/index.html');
  expect(browser.$('#main-header')
    .$('./h1[text()="Click on One of the Accordian Items Below!"]')
  ).toBeVisible();
})

describe('Testar conteúdos do Botão Sanfona da página Accordion Items & Text Appear', () => {

  it('Deve exibir o texto LOADING.. PLEASE WAIT..', () => {
    expect(browser.$(textAppearBox)).toHaveText('LOADING.. PLEASE WAIT..');
  });

  it('Não deve exibir conteúdo ao clicar no botão Keep Clicking! - Text will Appear After 5 Seconds!', () => {
    browser.$(buttonClickAccordion).click();
    expect(browser.$(panelTimeout)).toHaveText('');
  });

  it('Deve esperar até o texto mudar para LOADING COMPLETE.', () => {
    browser.waitUntil(
      () => $(hiddenText).getText() === 'LOADING COMPLETE.',
      {
        timeout: 20000,
        timeoutMsg: 'expected text to be different after 5s'
      }
    );
  });

  it('Deve exibir conteúdo ao clicar no botão Keep Clicking! - Text will Appear After 5 Seconds!', () => {
    browser.$(buttonClickAccordion).click();
    expect(browser.$(panelTimeout)).toHaveText('This text has appeared after 5 seconds!');
  });

});