const arduino_functions = require("../functions/arduino.functions")


exports.insert_measure1  = async req=>{

    console.log(req.body);
    
        if(!req.body){
    
            return false
        }else{
            var idsensor = req.body.idsensor
            var valor = req.body.valor
            var fecha = req.body.fecha
            var latitud = req.body.latitud
            var longitud = req.body.longitud

     
    
            var parsedData = {
                "idsensor":idsensor,
                "valor":valor,
                "fecha":fecha,
                "latitud":latitud,
                "longitud":longitud,
            }
    
            var results = await arduino_functions.add_measure_db_call(parsedData);
             console.log(results);
            if (results != '') {
                return results
            }else{
                return false
            }
    
        }
       
    }
    