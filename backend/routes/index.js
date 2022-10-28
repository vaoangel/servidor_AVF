// Import our Controllers

const arduino  = require("../handlers/arduino.controller")
const login = require("../handlers/login.handler")
//Declaramos todas las rutas
const routes = [
    {

        method:"POST",
        path:"/insertar_valor",
        handler: arduino.insert_arduino_value
    },
 
    { 
        method:"GET",
        path:"/obtener_mediciones",
        handler: arduino.obtener_mediciones
    },
 
    {
        method:"POST",
        path: "/eliminar_medicion_id",
        handler: arduino.eliminar_medicion_id
    },
    {
        method:"POST",
        path: "/obtener_medicion_id",
        handler: arduino.obtener_medicion_id
    },
    {

          
        method:"POST",
        path: "/login",
        handler: login.login_data_from_post
    }
  
 
   
]

  
module.exports = routes
