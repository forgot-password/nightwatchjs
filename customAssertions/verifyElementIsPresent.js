exports.assertion = function verifyElementIsPresent(selector, customMessage) {
  this.message =
    customMessage ||
    `Verifying that element with selector ${
      selector.toString
    } is present on the page.`;
  this.value = function setValue(result) {
    return result.status === 0;
  };

  this.expected = true;
  this.pass = value => value === this.expected;

  this.command = callback =>
    this.api.element(
      selector.toString().includes('//') ? 'xpath' : 'css selector',
      selector,
      callback,
    );
};
