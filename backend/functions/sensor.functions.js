const mysql = require('../config/db')


/*
    {date: DATE, id_sensor: int} -> f() -> media: float

    Esta funcion recoge todos los valores de las mediciones tomadas por el sensor en una fecha concreta y realiza una media
*/
exports.average_measurements_db_call = async (data) => {

    var query = mysql.query("Select Valor from db.mediciones where idSensor = '"+data.id_sensor+"' and Fecha = '"+data.date+"' ").then((data, error) => {

        if (data) {
            return data.results
        } else {
            return false
        }
    })

    
    var esp = await query
    var suma = 0;


    for (let i = 0; i < esp.length; i++) {
        suma += esp[i].Valor
    
    }
    var media = suma/esp.length;
 
    
    return media
    
    

}


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