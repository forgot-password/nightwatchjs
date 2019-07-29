module.exports.command = function command(email, password) {  
    return this.page.login().login(email, password).waitForElementVisible('[title="Orders"]')
}