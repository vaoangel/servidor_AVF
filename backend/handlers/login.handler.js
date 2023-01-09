
const login_functions = require("../functions/login.functions")
var md5 = require('md5');
 
// Recibe la información en el body del post en formato JSON
exports.login_data_from_post = async req =>{

    //Si el body está vacio devuelve un false;
    if(!req.body){

        return false
    }else{

        var username = req.body.username
        var password = md5(req.body.password);

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
//{mail: Texto, password: Texto} -> recuperar_contrasena() -> Texto | VoF 
exports.recuperar_contrasena = async req =>{
console.log(req.body);
    //Si el body está vacio devuelve un false;
    if(!req.body){
        return false
    }else{

        var mail = req.body.email
        var password = req.body.password

        var parsedData = {
            "mail":mail,
            "password":password
        }
        var test = await login_functions.recuperar_contrasena_db_calls(parsedData)

        if (test != '') {
            return test
        }else{
            return false
        }
    }   
}