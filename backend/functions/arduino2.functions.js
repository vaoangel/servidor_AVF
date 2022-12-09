const mysql = require('../config/db')
exports.add_measure2_db_call = async (data) =>{


    var query = mysql.query("Insert into db.mediciones (idSensor, Valor, Fecha, Latitud, Longitud) VALUES('"+data.idsensor+"','"+data.valor+"','"+data.fecha+"','"+data.latitud+"','"+data.longitud+"')").then((data, error) => {


        if (data) {
            return true
        } else {
            return false
        }
    })

    await query
    return query
}
