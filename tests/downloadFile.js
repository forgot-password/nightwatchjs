let fs = require("fs");
let dir = "./downloads";
function getDownloads(path, timeout) {  
    const timeout = setInterval(function() {
        const fileExists = fs.existsSync(path);

        console.log('Checking for: ', file);
        console.log('Exists: ', fileExists);

        if (fileExists) {
            clearInterval(timeout);
            return true;
        }
    }, timeout);
};

 function getDownloads(browser){
     
     fs.exists(dir, data=>{
        console.log(data)})
   
}
module.exports = {

    before: browser => {

        // browser.url("https://github.com/forgot-password/nightwatchjs")
        //     .click('.get-repo-select-menu')
        //     .click('.get-repo-btn')
           
       

    },

    'Download file': async  (browser) => {
        browser.verify.equal(getDownloads(), true);
    }
};