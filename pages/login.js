var commands = {
    login: function(email, password) {
        return this.waitForElementVisible('@email')
                   .setValue('@email', email)
                   .setValue('@password', password)
                   .click('@submit');
    }
}
module.exports = {
    commands: [commands],
    elements: {
        email: '#email',
        password: '#passwd',
        submit: '#SubmitLogin'
    }
};