async function goTo(browser) {
    return new Promise((resolve, reject) => {
        browser.url(result => {
            resolve(result.value)
        })

    });

}


function waitToBeVisible(browser, retry) {
     browser.isVisible('css selector', '#user_login', ({ value }) => {
        if (value === true && retry <=10) {
            browser.url('https://developer.mozilla.org')
        } else {
            console.log("Element not found, retry number: " + retry)
            browser.pause(1000)
            waitToBeVisible(browser, retry+1)
        }
    })
}
module.exports = {

    'Get url': async browser => {
        browser.url("https://github.com/")
        waitToBeVisible(browser, 1);
    }
};