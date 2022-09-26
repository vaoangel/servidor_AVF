
const mysql = require('../config/db')

exports.insert_arduino_value = async req =>{

    console.log("insert_arduino_value:          Comienza");
 /*

    req = información de la petición al servidor
 
 */

    //Comprobamos si req.body está lleno

    if (req.body!= '') {
    
        var valor = req.body.data
        var d = new Date
        var dataDef = d.getFullYear().toString()+"-"+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+"-"+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+" "+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+":"+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+":00";


       await mysql.query("Insert into db.registros (`date_added`, `valor_arduino`) VALUES ('"+dataDef+"',"+ valor+");").then((err,data)=>{

            try {
                
            } catch (err) {
                
            }
        })





    }else{
        return "Body de la petición vacio"
    }


    console.log("insert_arduino_value:          Acaba");

return "req"
}