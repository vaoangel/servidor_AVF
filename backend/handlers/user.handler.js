const user_functions = require("../functions/user.functions")
var md5 = require('md5');

 
// Recibe el body de una petición post
exports.update_user = async req=>{
    if(!req.body){

        return false
    }else{

        var username = req.body.username
        var name = req.body.name
        var mail = req.body.mail
        var phone = req.body.phone

        var parsedData = {
            "username":username,
            "name":name,
            "mail": mail,
            "phone": phone
        }

        var results = await user_functions.update_user_db_call(parsedData);
         console.log(results);
        if (results != '') {
            return results
        }else{
            return false
        }

    }

}

//Si la petición ha sido correcta devuelve la información modificada del usuario


exports.change_password = async req=>{

    if(!req.body){

        return false
    }else{

        var username = req.body.username
        var oldpass = md5(req.body.oldpass)
        var newpass = md5(req.body.newpass)

        var parsedData = {
            "username":username,
            "oldpass":oldpass,
            "newpass": newpass
        }

        var results = await user_functions.modificar_pass_db_call(parsedData);
         console.log(results);
        if (results != '') {
            return results
        }else{
            return false
        }

    }
   
}

exports.add_user  = async req=>{

console.log(req.body);

    if(!req.body){

        return false
    }else{

        var username = req.body.data.username
        var name = req.body.data.name
        var mail = req.body.data.mail
        var phone = req.body.data.phone
        var password = md5(req.body.data.password);
        var enterprise = req.body.data.enterprise
        var type = req.body.data.type
 

        var parsedData = {
            "username":username,
            "name":name,
            "mail":mail,

            "phone":phone,
            "password":password,
            "enterprise":enterprise,
            "type":type,

           
        }

        var results = await user_functions.add_user_db_call(parsedData);
         console.log(results);
        if (results != '') {
            return results
        }else{
            return false
        }

    }
   
}

//Recibe el id del usuario por el body 
exports.delete_user  = async req=>{
    //Si el body está vacio devuelve un false;

    if(!req.body){

        return false
    }else{

        var user_id = req.body.user_id

 

        var parsedData = {
            "user_id":user_id,
 

           
        }

        var results = await user_functions.delete_user_db_call(parsedData);
         console.log(results);
        if (results != '') {
            return results
        }else{
            return false
        }

    }
   
}

//Devuelve true o false dependiendo de si ha ido bien la operación



