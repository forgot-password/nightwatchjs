exports.assertion = function verifyElementHasText(selector, elementText) {
  this.message = `Verifying that the Element with selector${
    selector.toString
  } contains the following text: ${elementText}`;
  this.value = function setValue(result) {
    return result.value;
  };

  this.expected = elementText;
  this.pass = value => value === this.expected;

  this.command = callback =>
    this.api.getText(
      selector.toString().includes('//') ? 'xpath' : 'css selector',
      selector,
      callback,
    );
};
