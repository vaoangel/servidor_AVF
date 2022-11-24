
const login_functions = require("../functions/login.functions")

// Recibe la información en el body del post en formato JSON
exports.login_data_from_post = async req =>{

    //Si el body está vacio devuelve un false;
    if(!req.body){

        return false
    }else{

        var username = req.body.username
        var password = req.body.password

        var parsedData = {
            "username":username,
            "password":password
        }

        console.log(parsedData);

        var test = await login_functions.login_db_calls(parsedData)

        if (test != '') {
            return test
        }else{
            return false
        }
    }

    
  
     
   
}
//Si va todo bien  devuelve la información del usuario