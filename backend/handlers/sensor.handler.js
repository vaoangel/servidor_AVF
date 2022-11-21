
//Recibe los datos del body, los parsea a JSON y lo manda a la funcón en cuestión para insertarlo
const sensor_function = require("../functions/sensor.functions")

//Recibe los valores en formato JSON

exports.insert_sensor = async req=>{

    //Si el body está vacio devuelve un false;

    if(!req.body){

        return false
    }else{

        var username = req.body.username
        var type = req.body.type
        var name = req.body.name

    

        var parsedData = {
            "username":username,
            "type":type,
            "name":name,

        }

        var results = await sensor_function.insert_sensor_db_call(parsedData);
         console.log(results);
        if (results != '') {
            return results
        }else{
            return false
        }

    }
}

//Recibe el username en el body y lo asigna a una variable para pasarlo a la función de bdd

exports.get_one_sensor= async req=>{
        //Si el body está vacio devuelve un false;

    if(!req.body){

        return false
    }else{

        var username = req.body.username

        var parsedData = {
            "username":username,


        }

        var results = await sensor_function.get_one_sensor_db_call(parsedData);
         console.log(results);
        if (results != '') {
            return results
        }else{
            return false
        }

    }
}

//Devuelve true o false dependiendo de si ha ido bien la operación
