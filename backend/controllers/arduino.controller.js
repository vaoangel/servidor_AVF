
const { resolve } = require('promise');
const mysql = require('../config/db')

//Inserta una medida nueva en la base de datos
exports.insert_arduino_value = async req =>{

    console.log("insert_arduino_value:          Comienza");
 /*

    req = información de la petición al servidor
    valor = donde guardamos al información que llega de la petición
    d = fecha actual
    dataDef = parseamos la fecha para que la acepte la base de datos
 */


    

    //Comprobamos si req.body está lleno

    if (req.body!= '') {
          

        //Establecemos los datos en variables
        var valor = req.body.medida
        var d = new Date
        var dataDef = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";

        try {
            //Ejecución de la query a base de datos
            await mysql.query("Insert into db.mediciones (`date_added`, `valor_arduino`) VALUES ('"+dataDef+"',"+ valor+");").done(()=>{
                return true

            })
        } catch (error) {
            console.log(error);
        }
    }else{
        //respuesta en caso de que la información que nos llega de la petición esté vacia
        return "Body de la petición vacio"
    }


    console.log("insert_arduino_value:          Acaba");

return true
}

//Obtiene todas las mediciónes de la base de datos
exports.obtener_mediciones = async ()=>{
    console.log("obtener_mediciones:          Comienza");
 /*

response = promseas asincrona a la base de datos
 */
//Ejecución de la query a base de datos

 try {
    var response = await mysql.query("SELECT * FROM db.mediciones;  ").then((data, err)=>{

        if(data.results){
            //Si existe la información la devolvemos
            return data.results
        }else{
            return error
        }
    })
 } catch (error) {
    
    return error
 }


    console.log("obtener_mediciones:          Acaba");
    return response

}


// Elimina una medición en específico filtrando por id
exports.eliminar_medicion_id = async req =>{
    console.log("eliminar_medidion_id:          Entra");
    if (req.body!= '') {
// Comprobamos si existe el elemento body 

        var id = req.body.id
    try {
        //Ejecución de la query a base de datos
        await mysql.query("Delete from db.mediciones where id = "+id)
    } catch (error) {
        console.log(error);
        return error
    }
}else{
    return "Body de la petición vacio"
    }

    console.log("eliminar_medidion_id:          Termina");

        return true
}

// Obtiene una medición en específico filtrando por id
exports.obtener_medicion_id = async req =>{

    console.log("obtener_medicion_id:          Comienza");
    /*
   
       req = información de la petición al servidor
       id = donde guardamos al información que llega de la petición
     
    */
   
       //Comprobamos si req.body está lleno
   
       if (req.body!= '') {
            
   
           //Establecemos los datos en variables
           var valor = req.body.id
          
   
           try {
               //Ejecución de la query a base de datos
              var resuelta=   mysql.query("Select * from db.mediciones where id =  "+valor).then((data)=>{
                return data.results
               })
           } catch (error) {
               console.log(error);
           }
       }else{
           //respuesta en caso de que la información que nos llega de la petición esté vacia
           return "Body de la petición vacio"
       }
   
   
       console.log("obtener_medicion_id:          Acaba");
   //esperamos a la promesa y la devolvemos
       await resuelta
       return resuelta
}

// Elimina una medición en específico filtrando por valor

exports.eliminar_medicion_valor = async req =>{

    console.log("eliminar_medicion_valor:          Comienza");
    /*
   
       req = información de la petición al servidor
       id = donde guardamos al información que llega de la petición
     
    */
   
       //Comprobamos si req.body está lleno
   
       if (req.body!= '') {
            
   
           //Establecemos los datos en variables
           var valor = req.body.medida
          
   
           try {
               //Ejecución de la query a base de datos
              var resuelta=   mysql.query("Delete from db.mediciones where valor_arduino =  "+valor).then((data)=>{
                return data.results
               })
           } catch (error) {
               console.log(error);
           }
       }else{
           //respuesta en caso de que la información que nos llega de la petición esté vacia
           return "Body de la petición vacio"
       }
   
   
       console.log("obtener_medicion_valor:          Acaba");
   //esperamos a la promesa y la devolvemos
       await resuelta
       return resuelta
}


// Obtiene una medición en específico filtrando por valor

exports.obtener_medicion_valor = async req =>{

    console.log("obtener_medicion_id:          Comienza");
    /*
   
       req = información de la petición al servidor
       id = donde guardamos al información que llega de la petición
     
    */
   
       //Comprobamos si req.body está lleno
   
       if (req.body!= '') {
            
   
           //Establecemos los datos en variables
           var valor = req.body.medida
          
   
           try {
               //Ejecución de la query a base de datos
              var resuelta=   mysql.query("Select * from db.mediciones where valor_arduino =  "+valor).then((data)=>{
                return data.results
               })
           } catch (error) {
               console.log(error);
           }
       }else{
           //respuesta en caso de que la información que nos llega de la petición esté vacia
           return "Body de la petición vacio"
       }
   
   
       console.log("obtener_medicion_id:          Acaba");
   //esperamos a la promesa y la devolvemos
       await resuelta
       return resuelta
}