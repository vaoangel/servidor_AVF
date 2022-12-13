

const mysql = require('../config/db')

/*
    {username: string,
    password: string  } -> f() -> {respuesta: JSON}

    Esta funcion recibe  un username y un password  y devuelve información del usuario
*/
exports.login_db_calls = async (data) =>{
    

    console.log("Select idUsuario, Nombre,Telefono,mail,Usuario from db.usuarios where Usuario like '"+ data.username+"' and Contrasena like '"+data.password+"';");
    
 var  query = mysql.query("Select idUsuario, Nombre,Telefono,mail,Usuario,Tipo,idEmpresa from db.usuarios where Usuario like '"+ data.username+"' and Contrasena like '"+data.password+"';").then((data,error)=>{
 

    if (data) {
        return data.results
    }else{
        return error
    }
})

await query
return query

}

//Recibe la información filtrada en formato JSON
//{mail: Texto, password: Texto} -> recuperar_contrasena_db_calls() -> Texto | Error 
exports.recuperar_contrasena_db_calls = async (data) =>{
    //Actualiza la contraseña del usuario cuyo correo sea el que se ha indicado
    console.log("Update db.usuarios set Contrasena = '" + data.password + "' where Mail like '" + data.mail + "';");
    var  query = mysql.query("Update db.usuarios set Contrasena = '" + data.password + "' where Mail like '" + data.mail + "';").then((data,error)=>{
   
       if (data) {
           return data.results
       }else{
           return error
       }
   })
   
   await query
   return query
   
   }

//Si vatodo bien devuelve la información de base de datos en formato JSON 