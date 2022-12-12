const mysql = require('../config/db')

/*
    {fecha: DATETIME, id_ciudad:int, puntos:[[latitud,longitud,valor]]} -> f()

    Esta funcion guarda los valores de un array de puntos de una ciudad en una fecha concreta a la que se guarda el mapa en la bbdd.

*/
exports.save_map_db_calls = async (data) =>{
    

    console.log("insert into db.mapas (Fecha,idCiudad,Puntos) values ('" + data.fecha + "','" + data.id_ciudad + "','" + data.puntos + "');");
    var  query = mysql.query("insert into db.mapas (Fecha,idCiudad,Puntos) values ('" + data.fecha + "','" + data.id_ciudad + "','" + data.puntos + "');").then((data,error)=>{



    if (data) {
        return data.results
    }else{
        return error
    }
})

await query
return query

}


/*
    {fecha: DATETIME, id_ciudad:int} -> f() -> puntos:[[latitud,longitud,valor]]} 

    Esta funcion carga los valores de un array de puntos de un mapa creado en una fecha en concreto y en una ciudad.

*/
exports.load_map_db_calls = async (data) =>{
    

    var query = mysql.query("Select Puntos from db.mapas where idCiudad = '" + data.id_ciudad + "' and Fecha like '" + data.fecha + "%'").then((data, error) => {



    if (data) {
        return data.results
    }else{
        return error
    }
})

await query
return query

}