const mysql = require('../config/db')


exports.update_user_db_call= async (data) =>{
    
console.log("Update db.Usuarios set nombre = '"+data.name+"', mail = '"+data.mail+"', telefono = '" +data.phone+"' where usuario like '"+data.username+"';" );
    
    var  query = mysql.query("Update db.Usuarios set nombre = '"+data.name+"', mail = '"+data.mail+"', telefono = '" +data.phone+"' where usuario like '"+data.username+"';" ).then((data,error)=>{
   
   
       if (data) {
           return data.results
       }else{
           return error
       }
   })

   if ( await query) {
    var  query2= mysql.query("Select nombre,telefono,mail,usuario from db.Usuarios where usuario like '"+ data.username+"'").then((data,error)=>{
        if (data) {
            return data.results
        }else{
            return error
        }

    })
   }

  
   
   
   await query2
   return query2
   
   }