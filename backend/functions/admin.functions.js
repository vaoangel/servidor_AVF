
const mysql = require('../config/db')


//No recibe nada
exports.get_all_enterprises_db_call = async () =>{
    console.log("get_all_enterprises:          Entra");

    try {
        //Ejecución de la query a base de datos
       var results=  await mysql.query("Select * from db.empresas").then((data,error)=>{


            if (data.results) {
                return data.results
            }
        })
    } catch (error) {
        console.log(error);
        return error
    }


    console.log("get_all_enterprises:          Termina");

        return results
}

//Devuelve la info de la base de datos