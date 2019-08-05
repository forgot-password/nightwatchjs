const randomize = require('randomatic');

module.exports = {
  randomAlphaNumericString: length => randomize('Aa0', length),

  randomEmail: (localLength, domain = '@signal.co') =>
    randomize('Aa0', localLength) + domain,
};
