const textRadioButtons = '#radio-buttons-selected-disabled';
const radioLettuce = '#radio-buttons-selected-disabled [type="radio"][type="radio"][name="vegetable"][value="lettuce"]';
const radioCabbage = '#radio-buttons-selected-disabled [type="radio"][type="radio"][name="vegetable"][value="cabbage"]';
const radioPumpkin = '#radio-buttons-selected-disabled [type="radio"][type="radio"][name="vegetable"][value="pumpkin"]';
const textSelect = '#fruit-selects';
const selectOptionApple = '#fruit-selects option[value="apple"]';
const selectOptionOrange = '#fruit-selects option[value="orange"]';
const selectOptionPear = '#fruit-selects option[value="pear"]';
const selectOptionGrape = '#fruit-selects option[value="grape"]';
const labelOption2 = '#checkboxes label:nth-child(3)';
const checkBoxOption2 = '#checkboxes label:nth-child(3) [type="checkbox"][value="option-2"]';

before(() => {
  browser.maximizeWindow();
  browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
  expect(browser).toHaveUrlContaining('/Dropdown-Checkboxes-RadioButtons/index.html');
  expect(browser.$('#main-header')
    .$('./h1[text()="Dropdown Menu(s), Checkboxe(s) & Radio Button(s)"]')
  ).toBeVisible();
})

describe('Testar ativação dos itens dos elementos da página Dropdown Menu(s), Checkboxe(s) & Radio Button(s)', () => {
  describe('Quadro Selected & Disabled:', () => {
    it('Deve exibir o título Selected & Disabled', () => {
      expect(browser.$$('.thumbnail')[3]
        .$('./h2[text()="Selected & Disabled"]')
      ).toBeDisplayed();
    });

    describe('Radio Buttons Vegetables:', () => {
      it('Deve exibir o Botão Lettuce ativado', () => {
        expect(browser.$(textRadioButtons)).toHaveTextContaining('Lettuce');
        expect(browser.$(radioLettuce)).toBeEnabled()
      });

      it('Deve exibir o Botão Cabbage desativado', () => {
        expect(browser.$(textRadioButtons)).toHaveTextContaining('Lettuce');
        expect(browser.$(radioCabbage)).not.toBeEnabled()
      });

      it('Deve exibir o Botão Pumpkin ativado', () => {
        expect(browser.$(textRadioButtons)).toHaveTextContaining('Lettuce');
        expect(browser.$(radioPumpkin)).toBeEnabled()
      });
    });

    describe('Dropdown Menu Fruits:', () => {
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
    });
  });
  describe('Quadro Checkboxe(s)', () => {
    it('Deve exibir o título Checkboxe(s)', () => {
      expect(browser.$$('.thumbnail')[1]
        .$('./h2[text()="Checkboxe(s)"]')
      ).toBeVisible();
    });

    it('Deve exibir o Checkbox Option 2 ativado', () => {
      expect(browser.$(labelOption2)).toHaveText('Option 2');
      expect(browser.$(checkBoxOption2)).toBeEnabled();
    });
  });
});