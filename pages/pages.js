var commands = {
    setFieldsPage:  function setFields(){ return this.api.page.setFields()},
    submitPage:  function submit(){ return this.api.page.submit()},
}
module.exports = {
    commands: [    
       commands
    ]
};