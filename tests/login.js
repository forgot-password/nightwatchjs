module.exports = {

  'Test PO': browser => {
    const login = browser.page.submit2();
    browser.url("http://automationpractice.com/index.php?controller=authentication&back=my-account")
      .waitForElementVisible('#email');
    login.submit('test@test.ts', 'test1');
    browser.expect.element('.account').to.be.visible;

    const pages = browser.page.pages();
    browser.url("http://automationpractice.com/index.php?controller=authentication&back=my-account")
      .waitForElementVisible('#email');
    pages.setFieldsPage().set('test@test.ts', 'test1');
    pages.submitPage().submit();
    browser.expect.element('.account').to.be.visible;
  },

  'Test REST call': async browser => {
    browser.url("https://www.npmjs.com/package/request", () => {
      console.log("url opened")
    })

      .waitForElementVisible("#nav-products-link", () => {
        browser.getRequest();
      })
      .url('https://github.com/request/request')
      .waitForElementVisible('.BtnGroup', 10000)


    browser.expect.element('.BtnGroup').to.be.visible;
  }
};