// Import our Controllers

const arduino  = require("../controllers/arduino.controller")

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
    }

   
]

  
module.exports = routes
