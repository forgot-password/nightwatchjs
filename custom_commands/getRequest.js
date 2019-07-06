module.exports.command = function () {
  const browser = this;
  return browser.perform(() => {
    var request = require('request');
    request.get('https://reqres.in/api/users', { timeout: 5000 })
      .on('response', response => {
        console.log(response.statusCode)
      }).on('error', error => {
        console.log(error)
        throw Error("There was a problem with the request")
      });
  })
};