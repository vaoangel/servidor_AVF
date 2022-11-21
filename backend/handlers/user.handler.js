const user_functions = require("../functions/user.functions")
 
 
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


exports.update_password = async req=>{

    if(!req.body){

        return false
    }else{

        var username = req.body.username
        var oldpass = req.body.oldpass
        var newpass = req.body.newpass

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

    if(!req.body){

        return false
    }else{

        var username = req.body.username
        var name = req.body.name
        var mail = req.body.mail
        var phone = req.body.phone
        var password = req.body.password
        var enterprise = req.body.enterprise
        var type = req.body.type
 

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



