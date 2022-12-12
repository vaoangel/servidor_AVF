const map_functions = require("../functions/map.functions")

// Recibe la información en el body del post en formato JSON
exports.save_map = async req =>{

    //Si el body está vacio devuelve un false;
    if(!req.body){

        return false
    }else{

        var id_ciudad = req.body.id_ciudad
        var fecha = req.body.fecha
        var puntos = req.body.puntos

        var parsedData = {
            "id_ciudad":id_ciudad,
            "fecha":fecha,
            "puntos":puntos
        }

        console.log(parsedData);

        var test = await map_functions.save_map_db_calls(parsedData)

        if (test != '') {
            return test
        }else{
            return false
        }
    }
}


// Recibe la información en el body del post en formato JSON
exports.load_map = async req =>{

    //Si el body está vacio devuelve un false;
    if(!req.body){

        return false
    }else{

        var id_ciudad = req.body.id_ciudad
        var fecha = req.body.fecha

        var parsedData = {
            "id_ciudad":id_ciudad,
            "fecha":fecha
        }

        console.log(parsedData);

        var test = await map_functions.load_map_db_calls(parsedData)

        if (test != '') {
            return test
        }else{
            return false
        }
    }
}

