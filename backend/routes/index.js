// Import our Controllers

const arduino  = require("../handlers/arduino.handler")
const login = require("../handlers/login.handler")
const user = require("../handlers/user.handler")
const sensor = require("../handlers/sensor.handler")
//const map = require("../handlers/map.handler")

const admin = require("../handlers/admin.handler")

//Declaramos todas las rutas
const routes = [
    
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
        path: "/update_password",
        handler: user.change_password
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
        path: "/recover_password",
        handler: login.recuperar_contrasena
        
    }, 
    {
        method: "POST",
        path: "/average_measurements",
        handler: sensor.average_measurements
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
    },
    {
        method: "POST",
        path: "/get_measurements_by_type",
        handler: sensor.get_measurements_by_type
    },
    {
        method: "POST",
        path: "/get_higher_measurements",
        handler: sensor.get_higher_measurements
    },
    {
        method: "POST",
        path: "/get_measurements_by_type_admin",
        handler: sensor.get_measurements_by_type_admin
    },
    {
        method: "POST",
        path: "/insert_measure1",
        handler: arduino.insert_measure1
    }

   



    
]
 
  
module.exports = routes
