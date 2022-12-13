

const admin_functions = require("../functions/admin.functions")


//Este método no recibe nada, solo devuelve info
exports.get_all_enterprises = async ()=>{



        var results = await admin_functions.get_all_enterprises_db_call();
         console.log(results);
        if (results != '') {
            return results
        }else{
            return false
        }

    
}
exports.delete_one_enterprise = async req=>{



    var results = await admin_functions.delete_one_enterprise_db_call(req.body.idEmpresa);
     console.log(results);
    if (results != '') {
        return results
    }else{
        return false
    }


}

exports.add_one_enterprise = async req=>{

   //Si el body está vacio devuelve un false;
   if(!req.body){

    return false
}else{

    var idCiudad = req.body.idCiudad
    var nombre = req.body.nombre

    var parsedData = {
        "idCiudad":idCiudad,
        "nombre":nombre
    }

    console.log(parsedData);

    var test = await admin_functions.add_one_enterprise_db_call(parsedData)

    if (test != '') {
        return test
    }else{
        return false
    }
}


}
//Devuelve un JSON con la info de las empresas


exports.get_all_users_by_enterprise = async req=>{



    var results = await admin_functions.get_all_users_by_enterprise_db_call(req.body.idEmpresa);
     console.log(results);
    if (results != '') {
        return results
    }else{
        return false
    }


}


exports.delete_users_by_enterprise = async req=>{



    var results = await admin_functions.delete_users_by_enterprise_db_call(req.body);
     console.log(results);
    if (results != '') {
        return results
    }else{
        return false
    }


}