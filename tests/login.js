module.exports = {

    'Test PO': browser => {
      const loginPage = browser.page.login();
      browser.url("http://automationpractice.com/index.php?controller=authentication&back=my-account")
      .waitForElementVisible('#email');
      loginPage.login('test@test.ts', 'test1');
      browser.expect.element('.account').to.be.visible;
    }
  };