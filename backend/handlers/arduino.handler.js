const arduino_functions = require("../functions/arduino.functions")


exports.insert_measure1  = async req=>{

    console.log(req.body);
    
        if(!req.body){
    
            return false
        }else{
// HIJO DE PUTA .DATA.
            var idsensor = req.body.data.idsensor
            var valor = req.body.data.valor
            var fecha = req.body.data.fecha
            var latitud = req.body.data.latitud
            var longitud = req.body.data.longitud

     
    
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
    