const arduino2_functions = require("../functions/arduino2.functions")

exports.insert_measure2  = async req=>{

    console.log(req.body);
    
        if(!req.body){
    
            return false
        }else{
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
    
            var results = await user_functions.add_measure2_db_call(parsedData);
             console.log(results);
            if (results != '') {
                return results
            }else{
                return false
            }
    
        }
       
    }
    