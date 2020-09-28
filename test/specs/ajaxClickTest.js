describe('Verificar se o botão é clicável após o carregador Ajax concluir o carregamento', () => {
	it('Clicar no botão o mais rápido possível', () => {
		browser.maximizeWindow();
		browser.url('/Ajax-Loader/index.html');
		browser.$('#button1').click();
	});

	it.only('Clicar no botão após 7 segundos', () => {
		browser.maximizeWindow();
		browser.url('/Ajax-Loader/index.html');
		browser.pause(7000);
		browser.$('#button1').click();
		browser.pause(7000);
	}).timeout(30000);
})
