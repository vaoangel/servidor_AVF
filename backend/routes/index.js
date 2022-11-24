// Import our Controllers

const arduino  = require("../handlers/arduino.controller")
const login = require("../handlers/login.handler")
const user = require("../handlers/user.handler")
const sensor = require("../handlers/sensor.handler")

const admin = require("../handlers/admin.handler")

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
    },
    {  
        method:"POST",
        path: "/update_profile",
        handler: user.update_user
    },
    {
        method:"POST",
        path: "/change_password",
        handler: user.update_password
    },
    {
        method:"POST",
        path: "/insert_sensor",
        handler: sensor.insert_sensor
    },

    {
        method:"POST",
        path: "/add_user",
        handler: user.add_user 
    }
  ,
    {
        method:"POST",
        path: "/get_one_sensor",
        handler: sensor.get_one_sensor 
    },
    {
        method:"POST",
        path: "/delete_user",
        handler: user.delete_user 
    },
    {
        method: "GET",
        path: "/get_enterprises",
        handler: admin.get_all_enterprises
    },
    {
        method: "POST",
        path: "/delete_enterprise",
        handler: admin.delete_one_enterprise
    },
    {
        method: "POST",
        path: "/add_enterprise",
        handler: admin.add_one_enterprise
    },
    {
        method: "POST",
        path: "/get_all_users_by_enterprise",
        handler: admin.get_all_users_by_enterprise
    },
    {
        method: "POST",
        path: "/delete_users_by_enterprise",
        handler: admin.delete_users_by_enterprise
    }
   



    
]
 
  
module.exports = routes
