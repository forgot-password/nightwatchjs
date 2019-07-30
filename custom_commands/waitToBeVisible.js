module.exports.command = function waitToBeVisible(browser, retry, cb) {
     browser.isVisible('css selector', '#user_login', ({ value }) => {
        if (value === true && retry <=10) {
            cb()
        } else {
            console.log("Element not found, retry number: " + retry)
            browser.pause(1000)
            waitToBeVisible(browser, retry+1)
        }
    })
}