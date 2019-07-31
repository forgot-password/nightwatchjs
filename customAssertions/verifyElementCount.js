exports.assertion = function verifyElementCount(
  selector,
  count,
  customMessage = null,
) {
  this.message =
    customMessage != null
      ? `${customMessage}. Verifying with selector "${selector}"`
      : `Expecting "${count}" elements with selector "${selector}".`;
  this.expected = count;

  this.pass = value => value === this.expected;
  this.value = result => result.value.length;

  this.command = callback =>
    this.api.elements(
      selector.toString().includes('//') ? 'xpath' : 'css selector',
      selector,
      callback,
    );
};
