

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

//Devuelve un JSON con la info de las empresas