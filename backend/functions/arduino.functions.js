const mysql = require('../config/db')

const { resolve } = require('promise');

exports.add_measure_db_call = async (data) =>{

//jjjooottry


    var query = mysql.query("Insert into db.mediciones (idSensor, Valor, Fecha, Latitud, Longitud) VALUES('"+data.idsensor+"','"+data.valor+"','"+data.fecha+"','"+data.latitud+"','"+data.longitud+"')").then((data, error) => {
        
        if (data) {
            return data
        } else {
            return false 
        }
    })

    await query
    return query
}