

const mysql = require('../config/db')
exports.login_db_calls = async (data) =>{
    

    
 var  query = mysql.query("Select nombre,telefono,mail,usuario from db.Usuarios where usuario like '"+ data.username+"' and contrasena like '"+data.password+"';").then((data,error)=>{


    if (data) {
        return data.results
    }else{
        return error
    }
})

await query
return query

}