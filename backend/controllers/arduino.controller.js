
const { resolve } = require('promise');
const mysql = require('../config/db')

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
            await mysql.query("Insert into db.registros (`date_added`, `valor_arduino`) VALUES ('"+dataDef+"',"+ valor+");")
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

exports.obtener_mediciones = async ()=>{
    console.log("obtener_mediciones:          Comienza");
//Ejecución de la query a base de datos

 try {
    var response = await mysql.query("SELECT * FROM db.registros;  ").then((data, err)=>{

        if(data.results){
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

exports.obtener_mediciones_fake = async ()=>{
    console.log("obtener_mediciones_fake:          Comienza");


    //Establecemos la información fake
    var data_fake= [
        {
        "id":1,
        "value": 55,
        "nombre": "Pacoaa"

        },
          {
            "id":2,
            "value": 44,
            "nombre": "Pacob"
    
            },
            {
                "id":4,
                "value": 565,
                "nombre": "Pacoa"
        
                }

    ]

    //Devolvemos la información fake
    console.log("obtener_mediciones_fake:          Termina");

    return data_fake



}

