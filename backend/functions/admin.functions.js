
const mysql = require('../config/db')


/*
    f()-> [{empresas:JSON}]

    Esta funcion recoge todas las empresas dadas de alta en la base de datos
*/
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

//Devuelve la información de la query sql como JSON





/*
    { id_empresa: int} ->f() 

    Esta funcion recibe  un Id de empresa y ejecuta una query para eliminarla de la base de datos
*/
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

//Devuelve la información de todas las empresas una vez borrada la empresa en cuestión.

/*
    { nombreEmpresa: string } -> f()

    Esta funcion recibe  un nombre de empresa y ejecuta una query para eliminarla de la base de datos
*/
exports.add_one_enterprise_db_call = async (data) =>{
    console.log("get_all_enterprises:          Entra");

    try {
        //Ejecución de la query a base de datos

        var results1=  await mysql.query("Insert into    db.empresas (idCiudad,Nombre)  VALUES('" + data.idCiudad + "','"+data.nombre+"');")



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

//Devuelve la información de todas las empresas una vez añadida la empresa en cuestión.







/*
    { idEmpresa: int } -> f() -> [{usuarios}]

    Esta funcion recibe  un Id de empresa y ejecuta una query para obtener todos los usuarios que pertenecen a dicha empresa
*/
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

//Devuelve la información de todos los usuarios que pertenecen a una empresa





/*
    {idUsuario: int,
    idEmpresa: int  } -> f()

    Esta funcion recibe  un Id de empresa y un IdUsuario  y elimina un usuario
*/
exports.delete_users_by_enterprise_db_call = async (data) =>{
    console.log("delete_users_by_enterprise_db_call:          Entra");

    try {
        //Ejecución de la query a base de datos

        var results1=  await mysql.query("delete from    db.usuarios where idUsuario = "+data.idUsuario)


        if (results1) {
            var results=  await mysql.query("Select * from db.usuarios where idEmpresa ="+data.idEmpresa).then((data,error)=>{

 
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
    console.log("delete_users_by_enterprise_db_call:          Termina");



}

//Devuelve la información de los usuarios de la empresa a la que pertenece el idEmpresa
