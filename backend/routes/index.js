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
        method:"GET",
        path:"/obtener_mediciones_fake",
        handler: arduino.obtener_mediciones_fake 
    },
    {
        method: "POST", 
        path: "/eliminar_medidion_id",
        handler: arduino.eliminar_medidion_id

    }
   
]

  
module.exports = routes
