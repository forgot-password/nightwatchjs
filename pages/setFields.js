var commands = {
    set: function(email, password) {
        return this.waitForElementVisible('@email')
                   .setValue('@email', email)
                   .setValue('@password', password);
    }
}

module.exports = {
    commands: [commands],
    elements: {
        email: '#email',
        password: '#passwd',
    }
};