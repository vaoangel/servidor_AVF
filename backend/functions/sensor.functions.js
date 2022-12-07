const mysql = require('../config/db')


/*
    {date: DATE, type: text, id_user:int} -> f() -> json_array : JsonArray

    Esta funcion recoge todos los valores de las mediciones tomadas por el sensor del tipo en concreto en una fecha concreta
*/
exports.get_measurements_by_type_db_call = async(data) =>{

    //Devuelve las ids de los sensores que tiene el usuario
    console.log("Select idSensor from db.sensores where idUsuario = '"+data.id_user+"'")
    var query = mysql.query("Select idSensor from db.sensores where idUsuario = '"+data.id_user+"' and Tipo = '"+data.type+"'").then((data, error) => {

        if (data) {
            return data.results
        } else {
            return false
        }
    })

    var results = await query;
    if(results)
    {
        console.log(results);
        console.log("Numero de sensores del usuario: " + results.length);

        json_array=[]
        for(let i = 0; i<results.length;i++)
        {
            console.log("Select * from db.mediciones where idSensor = '"+results[i].idSensor+"' and Fecha = '"+data.date+"'");
            var query2  = mysql.query("Select * from db.mediciones where idSensor = '"+results[i].idSensor+"' and Fecha = '"+data.date+"'").then((data, error) => {
    
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

        


    }

    return json_array
    
    // var esp = await query
    // var suma = 0;
    // var valoralto = 0;
    // var json_result = {};


    // for (let i = 0; i < esp.length; i++) {
    //     suma += esp[i].Valor
    //     if(esp[i].Valor > valoralto)
    //     {
    //         valoralto = esp[i].Valor;
    //     }
    
    // }
    // var media = suma/esp.length;

    // json_result = {

    //     "media":media,
    //     "valoralto": valoralto
    // }
    
    // return json_result
    
    

}

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
    var valoralto = 0;
    var json_result = {};


    for (let i = 0; i < esp.length; i++) {
        suma += esp[i].Valor
        if(esp[i].Valor > valoralto)
        {
            valoralto = esp[i].Valor;
        }
    
    }
    var media = suma/esp.length;

    json_result = {

        "media":media,
        "valoralto": valoralto
    }
    
    return json_result
    
    

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