module.exports = {

 'Log into account': browser =>{  
   browser.browseTo(
     "http://automationpractice.com/index.php?controller=authentication&back=my-account", '#email')
     .logIn("nw@test.com", "test1");
   browser.expect.element('[title="Orders"]').to.be.visible;
 }
};