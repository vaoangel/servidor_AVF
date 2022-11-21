const mysql = require('../config/db')


exports.insert_sensor_db_call = async (data) => {

    var checkExistent = mysql.query("Select * from db.sensores where idUsuario = (Select idUsuario from db.usuarios where Usuario = '"+data.username+"') ").then((data, error) => {


        if (data) {
            return data.results
        } else {
            return false
        }
    })

 var results =  await checkExistent




    if (results == false) {
        var query = mysql.query("Insert into db.sensores (Tipo, idUsuario, Nombre) VALUES('"+data.type+"', (Select idUsuario from db.usuarios where Usuario = '"+data.username+"'), '"+data.name+"'  )").then((data, error) => {

 
            if (data) {
                return true
            } else {
                return false
            }
        })
    
        await query
        return query
    }else{
        var query = mysql.query("Update db.sensores set Nombre = '"+data.name+"', Tipo = '"+data.type+"' where idUsuario = (Select idUsuario from db.usuarios where Usuario = '"+data.username+"')").then((data, error) => {

 
            if (data) {
                return true
            } else {
                return false
            }
        })
    
        await query
        return query
    }




}


exports.get_one_sensor_db_call = async (data) =>{
    var checkExistent = mysql.query("Select * from db.sensores where idUsuario = (Select idUsuario from db.usuarios where Usuario = '"+data.username+"') ").then((data, error) => {


        if (data) {
            return data.results
        } else {
            return false
        }
    })


    await checkExistent

    return checkExistent
}