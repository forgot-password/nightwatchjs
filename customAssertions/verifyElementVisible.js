exports.assertion = function verifyElementCount(
  selector,
  count,
  customMessage = null,
) {
  this.message =
    customMessage != null
      ? `${customMessage}. Verifying with selector "${selector}"`
      : `Verifying that element with selector "${selector}" is visible.`;
  this.expected = true;

  this.pass = value => value === this.expected;
  this.value = result => result.value.length;

  this.command = callback =>
    this.api.isVisible(
      selector.toString().includes('//') ? 'xpath' : 'css selector',
      selector,
      callback,
    );
};
