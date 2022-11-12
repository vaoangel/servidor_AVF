const mysql = require('../config/db')

//Recibe la información del handler en forma de JSON ya filtrada y realiza las querys de base de datos
exports.update_user_db_call = async (data) => {

    console.log("Update db.Usuarios set nombre = '" + data.name + "', mail = '" + data.mail + "', telefono = '" + data.phone + "' where usuario like '" + data.username + "';");

    var query = mysql.query("Update db.Usuarios set nombre = '" + data.name + "', mail = '" + data.mail + "', telefono = '" + data.phone + "' where usuario like '" + data.username + "';").then((data, error) => {


        if (data) {
            return data.results
        } else {
            return error
        }
    })

    if (await query) {
        var query2 = mysql.query("Select nombre,telefono,mail,usuario from db.Usuarios where usuario like '" + data.username + "'").then((data, error) => {
            if (data) {
                return data.results
            } else {
                return error
            }

        })
    }




    await query2
    return query2

}
//Si el update va bien devuelve la información de la query con los datos del usuario en formato JSON

//Función modificar contraseña

exports.modificar_pass_db_call = async (data) => {



    var query = mysql.query("Select contrasena from db.Usuarios where usuario like '" + data.username + "';").then((response, error) => {
        if (response) {

            return response.results
        } else {
            return error
        }

    })


    var esp = await query;

    var json_error = {};
    var json_result = {};

    var oldpass_db = esp[0].contrasena
    if(data.oldpass !== oldpass_db){
        json_error = {

            "tipo":"Contraseña incorrecta",
            "code": 666
        }
        return json_error
    }
    else if (data.newpass === oldpass_db) {
        
        json_error = {

            "tipo":"Contraseña igual",
            "code": 504
        }

        return json_error


    }


     if (oldpass_db) {
        

         var query2 = mysql.query("Update db.Usuarios set contrasena = '" + data.newpass + "' where usuario like '"+data.username+"' and contrasena like '"+data.oldpass +"';").then((data, error) => {
    
            if (data) {
               return data.results
             } else {
                return error
            }
         })

         json_result = {

            "tipo":"Contraseña cambiada correctamente",
            "code": 200
        }
     }

    await query2
    return json_result
}



   

