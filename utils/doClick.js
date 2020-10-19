const { clickOnHomePageLink } = require("../pages/contactUs.page");

exports.doClick = (element) => {
  browser.$(element).click();
};
