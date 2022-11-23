
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





//No recibe nada
exports.delete_one_enterprise_db_call = async (data) =>{
    console.log("get_all_enterprises:          Entra");

    try {
        //Ejecución de la query a base de datos

        var results1=  await mysql.query("Delete from  db.empresas where idEmpresa = "+data)

 

        if (results1) {
            var results=  await mysql.query("Select * from db.empresas").then((data,error)=>{


                if (data.results) {
                    return data.results
                }
            }) 

            return results

        }
  
    } catch (error) {
        console.log(error);
        return error
    }


    console.log("get_all_enterprises:          Termina");

}

exports.add_one_enterprise_db_call = async (data) =>{
    console.log("get_all_enterprises:          Entra");

    try {
        //Ejecución de la query a base de datos

        var results1=  await mysql.query("Insert into    db.empresas (Nombre)  VALUES('"+data+"');")



        if (results1) {
            var results=  await mysql.query("Select * from db.empresas").then((data,error)=>{


                if (data.results) {
                    return data.results
                }
            }) 

            return results

        }
  
    } catch (error) {
        console.log(error);
        return error
    }


    console.log("get_all_enterprises:          Termina");

}


exports.get_all_users_by_enterprise_db_call = async (data) =>{
    console.log("get_all_enterprises:          Entra");

    try {
        //Ejecución de la query a base de datos

        var results1=  await mysql.query("Select * from     db.usuarios where idEmpresa = "+data).then((data,error)=>{


            if (data.results) {
                return data.results
            }
        })



        await results1
        console.log("get_all_enterprises:          Termina");

        return results1
        
    } catch (error) {
        console.log(error);
        console.log("get_all_enterprises:          Termina");

        return error
        
    }



}