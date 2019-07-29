module.exports.command = function command(url, element) {  
    return this.url(url).waitForElementVisible(element)
}