describe('Teste a página inicial da webdriveruniversity', function () {

  it('Validar a miniatura da promoção udemy na página inicial', () => {
    browser.maximizeWindow();
    browser.url('./');
    expect(browser
      .$('#udemy-promo-video')
      .getAttribute('src')
    ).toBe('https://player.vimeo.com/video/250015017');

    expect(browser
      .$('#udemy-promo-thumbnail')
      .getCSSProperty('height')
      .value
    ).toBe('350px');

    expect(browser
      .$('#udemy-promo-thumbnail')
      .getCSSProperty('width')
      .value
    ).toBe('1110px');

  });

});