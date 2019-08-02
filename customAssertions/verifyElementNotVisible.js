exports.assertion = function verifyElementIsNotVisible(selector, customMessage) {
  this.message =
    customMessage ||
    `Verifying that the element with selector ${
      selector.toString
    } is not visible.`;
  this.value = function setValue(result) {
    return result.status !== 0;
  };

  this.expected = true;
  this.pass = value => value === this.expected;

  this.command = callback =>
    this.api.isVisible(
      selector.toString().includes('//') ? 'xpath' : 'css selector',
      selector,
      callback,
    );
};
