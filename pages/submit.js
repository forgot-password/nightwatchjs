var commands = {
    submit: function(email, password) {
        return this.click('@submit');
    }
}

module.exports = {
    commands: [commands],
    elements: {
        submit: '#SubmitLogin'
    }
};