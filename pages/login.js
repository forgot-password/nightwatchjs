var commands = {
    login: function (email, password) {
        return this.setValue('@email', email)
            .setValue('@password', password)
            .click('@signIn');
    }
}

module.exports = {
    commands: [commands],
    elements: {
        email: '#email',
        password: '#passwd',
        signIn: '#SubmitLogin'
    }
};