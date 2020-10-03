const labelOption1 = '#checkboxes label:nth-child(1)';
const checkBoxOption1 = '#checkboxes label:nth-child(1) [type="checkbox"][value="option-1"]';
const labelOption2 = '#checkboxes label:nth-child(3)';
const checkBoxOption2 = '#checkboxes label:nth-child(3) [type="checkbox"][value="option-2"]';
const labelOption3 = '#checkboxes label:nth-child(5)';
const checkBoxOption3 = '#checkboxes label:nth-child(5) [type="checkbox"][value="option-3"]';
const labelOption4 = '#checkboxes label:nth-child(7)';
const checkBoxOption4 = '#checkboxes label:nth-child(7) [type="checkbox"][value="option-4"]';

before(() => {
  browser.maximizeWindow();
  browser.url('/Dropdown-Checkboxes-RadioButtons/index.html');
  expect(browser).toHaveUrlContaining('/Dropdown-Checkboxes-RadioButtons/index.html');
  expect(browser.$('#main-header')
    .$('./h1[text()="Dropdown Menu(s), Checkboxe(s) & Radio Button(s)"]')
  ).toBeVisible();
})

describe('Testar foco dos elementos da página Dropdown Menu(s), Checkboxe(s) & Radio Button(s)', () => {
  describe('Deve exibir um título e quatro checkboxes no quadro Checkboxe(s)', () => {
    it('Deve exibir o título Checkboxe(s)', () => {
      expect(browser.$$('.thumbnail')[1]
        .$('./h2[text()="Checkboxe(s)"]')
      ).toBeVisible();
    });

    it('Deve exibir o Checkbox Option 1 desmarcado', () => {
      expect(browser.$(labelOption1)).toHaveText('Option 1');
      expect(browser.$(checkBoxOption1)).not.toHaveAttr('checked')
    });

    it('Deve exibir o Checkbox Option 2 desmarcado', () => {
      expect(browser.$(labelOption2)).toHaveText('Option 2');
      expect(browser.$(checkBoxOption2)).not.toHaveAttr('checked')
    });

    it('Deve exibir o Checkbox Option 3 marcado', () => {
      expect(browser.$(labelOption3)).toHaveText('Option 3');
      expect(browser.$(checkBoxOption3)).toHaveAttr('checked')
    });

    it('Deve exibir o Checkbox Option 4 desmarcado', () => {
      expect(browser.$(labelOption4)).toHaveText('Option 4');
      expect(browser.$(checkBoxOption4)).not.toHaveAttr('checked')
    });
  });
  describe('Deve receber foco ao clicar no Checkbox', () => {
    it('Deve estar focado ao clicar no Chekbox Option 1 desmarcado', () => {
      browser.$(checkBoxOption1).click();
      expect(browser.$(checkBoxOption1)).toBeFocused();
    });

    it('Deve estar marcado após clicar no Chekbox Option 1 desmarcado', () => {
      expect(browser.$(checkBoxOption1)).toHaveAttr('checked');
    });

    it('Deve estar focado ao clicar no Chekbox Option 3 marcado', () => {
      browser.$(checkBoxOption3).click();
      expect(browser.$(checkBoxOption3)).toBeFocused();
    });

    it('Deve estar desmarcado após clicar no Chekbox Option 3 marcado', () => {
      expect(browser.$(checkBoxOption3)).not.toHaveAttr('checked');
    });
  });
});