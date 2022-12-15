const mysql = require('../config/db')


/*
    {date: DATE, id_user:int} -> f() -> json_array : JsonArray

    Esta funcion recoge todos los valores de las mediciones tomadas por el usuario en una fecha concreta en caso de pasarle un id_User
    Si el id_User que recibe es 0 va a coger todas las medidas sin importar el usuario

*/
exports.get_higher_measurements_db_call = async (data) => {

    //Devuelve las ids de los sensores que tiene el usuario
    console.log("ID_USER " + data.id_user);

    json_array_mediciones = []
    valores_maximos = []

    if (data.id_user == 0)    //TODAS LAS MEDIDAS DE BBDD (MÉTODO PARA LA LANDING)
    {

        var query3 = mysql.query("Select Valor,Latitud,Longitud from db.mediciones as a , db.sensores as b  where a.idSensor=b.idSensor and a.Fecha like '" + data.date + "%'").then((data, error) => {

            if (data) {

                return data.results

            } else {
                return false
            }
        })



        var esp2 = await query3 //todas las mediciones
        esp2.forEach(element => {
            json_array_mediciones.push(element)
        });

        console.log(json_array_mediciones);
        var maxima
        var array_final = []
        for (let i = 0; i < json_array_mediciones.length; i++) {
            maxima = json_array_mediciones[i]
            for (let j = 0; j < json_array_mediciones.length; j++) {


                if ((json_array_mediciones[i].Latitud == json_array_mediciones[j].Latitud) && (json_array_mediciones[i].Longitud == json_array_mediciones[j].Longitud)) {

                    if (maxima.Valor <= json_array_mediciones[j].Valor) {

                        maxima = json_array_mediciones[j]

                    }

                }
            }
            if (!array_final.includes(maxima)) {
                array_final.push(maxima)

            }
        }

        return array_final

    } else {
        //MEDIDAS DE UN USUARIO EN CONCRETO
        var query = mysql.query("Select idSensor from db.sensores where idUsuario = '" + data.id_user + "'").then((data, error) => {

            if (data) {
                return data.results
            } else {
                return false
            }
        })



        var results = await query;
        if (results) {
            console.log("Numero de sensores del usuario: " + results.length);


            for (let i = 0; i < results.length; i++) {
                console.log("Select Valor,Latitud,Longitud,LatitudCiudad,LongitudCiudad from db.mediciones as a , db.sensores as b, db.usuarios as u, db.empresas as e, db.ciudades as c  where a.idSensor=b.idSensor and u.idEmpresa=e.idEmpresa and  a.idSensor = '" + results[i].idSensor + "' and a.Fecha like '" + data.date + "%'");
                var query2 = mysql.query("Select Valor,Latitud,Longitud,LatitudCiudad,LongitudCiudad from db.mediciones as a , db.sensores as b, db.usuarios as u, db.empresas as e, db.ciudades as c  where a.idSensor=b.idSensor and u.idEmpresa=e.idEmpresa and  a.idSensor = '" + results[i].idSensor + "' and a.Fecha like '" + data.date + "%'").then((data, error) => {

                    if (data) {

                        return data.results

                    } else {
                        return false
                    }
                })



                var esp = await query2

                console.log(esp);

                //AQUÍ YA ESTAMOS OBTENIENDO TODAS LAS MEDICIONES EN json_array_mediciones
                //por cada elemento del sensor se añade en el array a devolver final
                esp.forEach(element => {
                    json_array_mediciones.push(element)
                });


            }

            console.log(json_array_mediciones);
            var maxima
            var array_final = []
            for (let i = 0; i < json_array_mediciones.length; i++) {
                console.log("entra al for");
                maxima = json_array_mediciones[i]
                for (let j = 0; j < json_array_mediciones.length; j++) {


                    if ((json_array_mediciones[i].Latitud == json_array_mediciones[j].Latitud) && (json_array_mediciones[i].Longitud == json_array_mediciones[j].Longitud)) {

                        if (maxima.Valor <= json_array_mediciones[j].Valor) {

                            maxima = json_array_mediciones[j]

                        }

                    }
                }
                if (!array_final.includes(maxima)) {
                    array_final.push(maxima)

                }
            }








        }

        return array_final

    }

}


/*
    {date: DATE, type: text, id_user:int} -> f() -> json_array : JsonArray

    Esta funcion recoge todos los valores de las mediciones tomadas por el sensor del tipo en concreto en una fecha concreta
*/
exports.get_measurements_by_type_db_call = async (data) => {

    //Devuelve las ids de los sensores que tiene el usuario
    console.log("Select idSensor from db.sensores where idUsuario = '" + data.id_user + "'")
    var query = mysql.query("Select idSensor from db.sensores where idUsuario = '" + data.id_user + "' and Tipo = '" + data.type + "'").then((data, error) => {

        if (data) {
            return data.results
        } else {
            return false
        }
    })

    var results = await query;
    if (results != false) {
        console.log(results);
        console.log("Numero de sensores del usuario: " + results.length);

        json_array = []
        for (let i = 0; i < results.length; i++) {
            console.log("Select Valor,Latitud,Longitud,LatitudCiudad,LongitudCiudad from db.mediciones as a , db.sensores as b, db.usuarios as u, db.empresas as e, db.ciudades as c  where a.idSensor=b.idSensor and u.idEmpresa=e.idEmpresa and  a.idSensor = '" + results[i].idSensor + "' and a.Fecha like '" + data.date + "%'");

            //console.log("Select * from db.mediciones where idSensor = '" + results[i].idSensor + "' and Fecha = '" + data.date + "'");
            var query2 = mysql.query("Select Valor,Latitud,Longitud,LatitudCiudad,LongitudCiudad from db.mediciones as a , db.sensores as b, db.usuarios as u, db.empresas as e, db.ciudades as c  where a.idSensor=b.idSensor and u.idEmpresa=e.idEmpresa and  a.idSensor = '" + results[i].idSensor + "' and a.Fecha like '" + data.date + "%'").then((data, error) => {

                if (data) {

                    return data.results

                } else {
                    return false
                }
            })



            var esp = await query2

            console.log(esp);
            console.log(esp.length);

            //por cada elemento del sensor se añade en el array a devolver final
            esp.forEach(element => {
                json_array.push(element)
            });


        }


        return json_array


    }

    return results


}



/*
    {date: DATE, type: text, id_empresa:int} -> f() -> json_array : JsonArray

    Esta funcion recoge todos los valores de las mediciones tomadas por los sensores de una empresa por un tipo concreto y una fecha concreta
*/
exports.get_measurements_by_type_admin_db_call = async (data) => {

    
    console.log("Select Valor,Fecha,Latitud,Longitud,LatitudCiudad,LongitudCiudad from db.mediciones as a , db.sensores as b, db.usuarios as u, db.empresas as e, db.ciudades as c  where a.idSensor=b.idSensor  and  e.idEmpresa= 1  and b.idUsuario=u.idUsuario and u.idEmpresa=e.idEmpresa and e.idCiudad=c.idCiudad and b.Tipo = '" + data.type + "' and a.Fecha like '" + data.date + "%'");
       var query = mysql.query("Select Valor,Fecha,Latitud,Longitud,LatitudCiudad,LongitudCiudad from db.mediciones as a , db.sensores as b, db.usuarios as u, db.empresas as e, db.ciudades as c  where a.idSensor=b.idSensor  and  e.idEmpresa = '" + data.id_empresa + "'  and b.idUsuario=u.idUsuario and u.idEmpresa=e.idEmpresa and e.idCiudad=c.idCiudad and b.Tipo = '" + data.type + "' and a.Fecha like '" + data.date + "%'").then((data, error) => {
            if (data) {
                return data.results
            } else {
                return false
            }
            
        })



        var esp = await query

        return esp


    

}


/*
    {date: DATE, id_sensor: int} -> f() -> media: float

    Esta funcion recoge todos los valores de las mediciones tomadas por el sensor en una fecha concreta y realiza una media
*/
exports.average_measurements_db_call = async (data) => {


    var query = mysql.query("Select Valor from db.mediciones where idSensor = '" + data.id_sensor + "' and Fecha = '" + data.date + "' ").then((data, error) => {

        if (data) {
            return data.results
        } else {
            return false
        }
    })


    var esp = await query
    var suma = 0;
    var valoralto = 0;
    var json_result = {};


    for (let i = 0; i < esp.length; i++) {
        suma += esp[i].Valor
        if (esp[i].Valor > valoralto) {
            valoralto = esp[i].Valor;
        }

    }
    var media = suma / esp.length;

    json_result = {

        "media": media,
        "valoralto": valoralto
    }

    return json_result



}

/*
    {username: string, type: string, name: string} -> f()

    Esta funcion inserta un sensor en bbdd a un usurio
*/
exports.insert_sensor_db_call = async (data) => {

    var checkExistent = mysql.query("Select * from db.sensores where idUsuario = (Select idUsuario from db.usuarios where Usuario = '" + data.username + "') ").then((data, error) => {


        if (data) {
            return data.results
        } else {
            return false
        }
    })

    var results = await checkExistent




    if (results == false) {
        var query = mysql.query("Insert into db.sensores (Tipo, idUsuario, Nombre) VALUES('" + data.type + "', (Select idUsuario from db.usuarios where Usuario = '" + data.username + "'), '" + data.name + "'  )").then((data, error) => {


            if (data) {
                return true
            } else {
                return false
            }
        })

        await query
        return query
    } else {
        var query = mysql.query("Update db.sensores set Nombre = '" + data.name + "', Tipo = '" + data.type + "' where idUsuario = (Select idUsuario from db.usuarios where Usuario = '" + data.username + "')").then((data, error) => {


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

/*
    {username: string} -> f() -> {respuesta: JSON}

    Esta funcion recoge todos los sensores del usuario
*/
exports.get_one_sensor_db_call = async (data) => {
    var checkExistent = mysql.query("Select * from db.sensores where idUsuario = (Select idUsuario from db.usuarios where Usuario = '" + data.username + "') ").then((data, error) => {


        if (data) {
            return data.results
        } else {
            return false
        }
    })


    await checkExistent

    return checkExistent
}