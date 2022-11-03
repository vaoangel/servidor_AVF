const update_user_db_call = require("../functions/user.functions")
 
 
// Recibe el body de una petición post
exports.update_user = async req=>{
    if(!req.body){

        return false
    }else{

        var username = req.body.usuario
        var name = req.body.nombre
        var mail = req.body.mail
        var phone = req.body.telefono

        var parsedData = {
            "username":username,
            "name":name,
            "mail": mail,
            "phone": phone
        }

        var results = await update_user_db_call.update_user_db_call(parsedData);
         console.log(results);
        if (results != '') {
            return results
        }else{
            return false
        }

    }

}

//Si la petición ha sido correcta devuelve la información modificada del usuario