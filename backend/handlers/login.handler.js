
const login_functions = require("../functions/login.functions")

exports.login_data_from_post = async req =>{

    
    if(!req.body){

        return false
    }else{

        var username = req.body.username
        var password = req.body.password

        var parsedData = {
            "username":username,
            "password":password
        }
        var test = await login_functions.login_db_calls(parsedData)
        return test
    }

    
  
     
   
}