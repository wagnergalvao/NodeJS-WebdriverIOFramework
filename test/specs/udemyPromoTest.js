describe('Teste a página inicial da webdriveruniversity', function () {

  it('Validar a miniatura da promoção udemy na página inicial', () => {
    browser.maximizeWindow();
    browser.url('./');
    browser.pause(2000);
    //    var divCarouselHeight = browser.getCssProperty('#udemy-promo-thumbnail', 'height');
    //    console.log(divCarouselHeight);
    expect(browser
      .$('#udemy-promo-video')
      .getAttribute('src')
    ).toBe('https://player.vimeo.com/video/250015017');

    expect(browser
      .$('#udemy-promo-thumbnail')
      .getCSSProperty('height')
      .value
    ).toBe('350pxs');

    expect(browser
      .$('#udemy-promo-thumbnail')
      .getCSSProperty('width')
      .value
    ).toBe('1110px');

  });

});