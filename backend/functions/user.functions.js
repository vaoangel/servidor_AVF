const mysql = require('../config/db')


exports.update_user_db_call= async (data) =>{
    

    
    var  query = mysql.query("Update db.Usuarios set nombre = '"+data.name+"', mail = '"+data.mail+"', telefono = '" +data.phone+"' where usuario like '"+data.username+"';" ).then((data,error)=>{
   
   
       if (data) {
           return data.results
       }else{
           return error
       }
   })
   
   await query
   return query
   
   }