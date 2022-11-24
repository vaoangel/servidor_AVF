

const mysql = require('../config/db')

//Refibe la información filtrada en formato JSON
exports.login_db_calls = async (data) =>{
    

    console.log("Select Nombre,Telefono,mail,Usuario from db.usuarios where Usuario like '"+ data.username+"' and Contrasena like '"+data.password+"';");
    
 var  query = mysql.query("Select Nombre,Telefono,mail,Usuario,Tipo,idEmpresa from db.usuarios where Usuario like '"+ data.username+"' and Contrasena like '"+data.password+"';").then((data,error)=>{


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