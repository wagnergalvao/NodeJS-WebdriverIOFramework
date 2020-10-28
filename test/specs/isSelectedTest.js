const textRadioButtons = '#radio-buttons-selected-disabled';
const radioLettuce = '#radio-buttons-selected-disabled [type="radio"][name="vegetable"][value="lettuce"]';
const radioCabbage = '#radio-buttons-selected-disabled [type="radio"][name="vegetable"][value="cabbage"]';
const radioPumpkin = '#radio-buttons-selected-disabled [type="radio"][name="vegetable"][value="pumpkin"]';
const textSelect = '#fruit-selects';
const selectOptionApple = '#fruit-selects option[value="apple"]';
const selectOptionOrange = '#fruit-selects option[value="orange"]';
const selectOptionPear = '#fruit-selects option[value="pear"]';
const selectOptionGrape = '#fruit-selects option[value="grape"]';
const textCheckBoxes = '#checkboxes';
const checkBoxOption1 = '#checkboxes * [type="checkbox"][value="option-1"]';
const checkBoxOption2 = '#checkboxes label:nth-child(3) [type="checkbox"][value="option-2"]';
const checkBoxOption3 = '#checkboxes label:nth-child(5) [type="checkbox"][value="option-3"]';
const checkBoxOption4 = '#checkboxes label:nth-child(7) [type="checkbox"][value="option-4"]';

before(() => {
  browser.maximizeWindow();
  browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
  expect(browser).toHaveUrlContaining('/Dropdown-Checkboxes-RadioButtons/index.html');
  expect(browser.$('#main-header')
    .$('./h1[text()="Dropdown Menu(s), Checkboxe(s) & Radio Button(s)"]')
  ).toBeVisible();
})

describe('Testar seleção dos itens dos elementos da página Dropdown Menu(s), Checkboxe(s) & Radio Button(s)', () => {

  it('Deve exibir o título Selected & Disabled', () => {
    expect(browser.$$('.thumbnail')[3]
      .$('./h2[text()="Selected & Disabled"]')
    ).toBeDisplayed();
  });

  it('Deve exibir o Botão Lettuce não selecionado', () => {
    expect(browser.$(textRadioButtons)).toHaveTextContaining('Lettuce');
    expect(browser.$(radioLettuce)).not.toBeSelected()
  });

  it('Deve exibir o Botão Cabbage não selecionado', () => {
    expect(browser.$(textRadioButtons)).toHaveTextContaining('Lettuce');
    expect(browser.$(radioCabbage)).not.toBeSelected()
  });

  it('Deve exibir o Botão Pumpkin selecionado', () => {
    expect(browser.$(textRadioButtons)).toHaveTextContaining('Lettuce');
    expect(browser.$(radioPumpkin)).toBeSelected()
  });

  it('Deve expandir o Menu Fruits', () => {
    browser.$(textSelect).click();
  });

  it('Deve exibir a Opção Apple ativada', () => {
    expect(browser.$(textSelect)).toHaveTextContaining('Apple');
    expect(browser.$(selectOptionApple)).toBeEnabled()
  });

  it('Deve exibir a Opção Orange desativada', () => {
    expect(browser.$(textSelect)).toHaveTextContaining('Orange');
    expect(browser.$(selectOptionOrange)).not.toBeEnabled()
  });

  it('Deve exibir a Opção Pear ativada', () => {
    expect(browser.$(textSelect)).toHaveTextContaining('Pear');
    expect(browser.$(selectOptionPear)).toBeEnabled()
  });

  it('Deve exibir a Opção Grape ativada', () => {
    expect(browser.$(textSelect)).toHaveTextContaining('Grape');
    expect(browser.$(selectOptionGrape)).toBeEnabled()
  });

  it('Deve exibir o título Checkboxe(s)', () => {
    expect(browser.$$('.thumbnail')[1]
      .$('./h2[text()="Checkboxe(s)"]')
    ).toBeVisible();
  });

  it('Deve exibir o Checkbox Option 1 não selecionado', () => {
    expect(browser.$$(textCheckBoxes)).toHaveTextContaining('Option 1');
    expect(browser.$(checkBoxOption1)).not.toBeSelected();
  });

  it('Deve exibir o Checkbox Option 2 não selecionado', () => {
    expect(browser.$$(textCheckBoxes)).toHaveTextContaining('Option 2');
    expect(browser.$(checkBoxOption2)).not.toBeSelected();
  });

  it('Deve exibir o Checkbox Option 3 selecionado', () => {
    expect(browser.$$(textCheckBoxes)).toHaveTextContaining('Option 3');
    expect(browser.$(checkBoxOption3)).toBeSelected();
  });

  it('Deve exibir o Checkbox Option 4 não selecionado', () => {
    expect(browser.$$(textCheckBoxes)).toHaveTextContaining('Option 4');
    expect(browser.$(checkBoxOption4)).not.toBeSelected();
  });
});