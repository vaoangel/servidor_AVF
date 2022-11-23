

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



    var results = await admin_functions.add_one_enterprise_db_call(req.body.nombreEmpresa);
     console.log(results);
    if (results != '') {
        return results
    }else{
        return false
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