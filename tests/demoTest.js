module.exports = {
    'Demo test' : function (browser) {
      browser
        .url("http://automationpractice.com/index.php")
        .click('.login')
        .waitForElementVisible('#SubmitLogin')
        .end();
    }
  };