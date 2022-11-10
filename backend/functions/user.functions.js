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

            console.log(response);
            return response.results
        } else {
            return error
        }

    })
await query
console.log("query");



    // if (await query) {
        

    //     var query2 = mysql.query("Update db.Usuarios set contrasena = '" + data.newpass + "' where usuario like '"+data.username+"' && contrasena like '"+data.oldpass +"';").then((data, error) => {
    
    //         if (data) {
    //             return data.results
    //         } else {
    //             return error
    //         }
    //     })
    // }

    await query
    return query
}



    /*
    var query = mysql.query("Select contrasena from db.Usuarios where usuario like '" + data.username + "';").then((data, error) => {

        

        if (data) {
            return data.results
        } else {
            return error
        }

    })



    if (await query) {

        console.log("datos del select: " + data.results);
        console.log("cantidad de filas del select: " + data.results.length);
        const valorselect = data.results[0];
        console.log("valorselect: " + valorselect);

        //console.log("contraseña actual del usuario " + valorselect.contrasena);

        console.log("contraseña nueva del usuario" + data.newpass);
        /*if (data != data.newpass) {
            
            
            //var query2 = mysql.query("Update db.Usuarios set contrasena = '" + data.newpass + "' where usuario like '"+data.username+"';")
    
        }
        else{ //las contraseñas son iguales
            return 123
        }
    }

*/

    //await query2
    //return query2

