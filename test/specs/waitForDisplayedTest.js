clickMeButton = '#button1'

before(() => {
	browser.maximizeWindow();
	browser.url('/Ajax-Loader/index.html');
	expect(browser).toHaveUrlContaining('/Ajax-Loader/index.html');
})

describe('Verificar se o botão foi exibido', () => {

	it('Aguardar exibição do botão antes de oito segundos', () => {
		expect(browser.$(clickMeButton).waitForDisplayed({ timeout: 8000 })).toBe(true);
	});

	it('Deve exibir o texto CLICK ME! no botão', () => {
		expect(browser.$(clickMeButton)).toHaveText('CLICK ME!');
	});

})
