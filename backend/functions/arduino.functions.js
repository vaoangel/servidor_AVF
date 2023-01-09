const mysql = require('../config/db')

const { resolve } = require('promise');
//JSON--->add_measure_db_call()-----> true
exports.add_measure_db_call = async (data) =>{


    var query = mysql.query("Insert into db.mediciones (idSensor, Valor, Fecha, Latitud, Longitud) VALUES('"+data.idsensor+"','"+data.valor+"','"+data.fecha+"','"+data.latitud+"','"+data.longitud+"')").then((data, error) => {
        
        if (data) {//ha funcionado el metodo
            return true
        } else {//no ha funcionado el metodo
            return false 
        }
    })

    await query
    return query
}