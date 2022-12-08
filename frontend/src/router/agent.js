import axios from 'axios'

let token = null
let API = axios.create({
    //baseURL: 'http://172.20.10.2:3000/',
    baseURL: 'http://192.168.100.119:3000/',
    headers: {
        'Authorization': token!==null ? `Token ${token}` : "",
    },
});

const request ={
    // del:  url => API.delete(url).then().catch(),
    post:(url, body) => API.post(url,body).then(function (data) {       
        return new Promise((resolve,reject)=>{
            console.log(data);
            
            if(data!==undefined){
                //alert("Operación realizada correctamente")
                   resolve(data)
                   
            }else{
                alert("La operación ha fallado")

                reject("error")
            }
       })
    
    }).catch((e)=>{
        alert("La operación ha fallado")

    }),
    patch:(url) =>API.patch(url).then(function (data){       
        return new Promise((resolve,reject)=>{
            if(data.data!==undefined){

                   resolve(data.data)
                   
            }else{
                reject("error")
            }
       })
    
    }).catch((e)=>{
        alert("La operación ha fallado")

    }),
    get:  url => API.get(url).then(function (data){
        return new Promise((resolve,reject)=>{
            if(data.data!==undefined){

                   resolve(data.data)
                   
            }else{
                reject("error")
            }
       })

    }).catch(),
    put: (url,body) => API.put(url,body).then((data)=>{
        return new Promise((resolve,reject)=>{
            console.log(data);
            
            if(data!==undefined){
                alert("Operación realizada correctamente")

                   resolve(data.data)
                   
            }else{
                alert("La operación ha fallado")

                reject("error")
            }
       })
    }).catch((e)=>{
        alert("La operación ha fallado")

        console.log(e)
        console.log(url);
    })
}



const TemperatureApi={
    Obtener_todas_mediciones:()=>{
        const info = request.get('/obtener_mediciones').then(function(data){
            console.log(data);

            return data
        }).catch(function(error){
            return error
        })
/*      console.log(info);
 */        return info
    },
}

const LoginApi={
     login:(data)=>{
        console.log(data);
        
        const info = request.post('login', {
            "username":data.username, 
            "password": data.password
        }).then(function(data){
            
            console.log(data);
            return data.data 
        }).catch(function(error){
            return error
        })
        return info
    
        
    }
}


const ProfileApi={
    update_profile:(data)=>{
       console.log(data);
       
       const info = request.post('update_profile', {

        "username": data.username,
        "name": data.name,
        "mail": data.mail,
        "phone": data.phone
       }).then(function(data){
           
           console.log(data);
           return data.data 
       }).catch(function(error){
           return error
       })
       return info
   
       
   },
   change_password:(data)=>{
    console.log(data);
    
    const info = request.post('update_password', {
 
     "username": data.username,
     "oldpass": data.oldpass,
     "newpass": data.newpass
    }).then(function(data){
        
        console.log(data);
        return data.data 
    }).catch(function(error){
        return error
    })
    return info
 
    
}
}

const AdminApi={
    get_enterprise:()=>{
       
       const info = request.get('get_enterprises').then(function(data){
           
        console.log(data);
           return data 
       }).catch(function(error){
           return error
       })
       return info
   
       
   },

   delete_enterprise:(data)=>{
       
    const info = request.post('delete_enterprise',{"idEmpresa":data}).then(function(data){
        
        return data.data
    }).catch(function(error){
        return error
    })
    return info

    
},

    add_enterprise:(data)=>{
       
    const info = request.post('add_enterprise',{"nombreEmpresa":data}).then(function(data){
        
        return data.data
    }).catch(function(error){
        return error
    })
    return info

    
},


get_all_users_by_enterprise:(data)=>{
       
    const info = request.post('get_all_users_by_enterprise',{"idEmpresa":data}).then(function(data){
        
        console.log(data.data);
        return data.data
    }).catch(function(error){
        return error
    })
    return info

    
},
delete_users_by_enterprise:(data)=>{
       
    const info = request.post('delete_users_by_enterprise',{"idUsuario":data.idUsuario, "idEmpresa":data.idEmpresa}).then(function(data){
        
        return data.data
    }).catch(function(error){
        return error
    })
    return info

    
}
,

add_user:(data)=>{
       
    const info = request.post('add_user',{data}).then(function(data){
        
        return data.data
    }).catch(function(error){
        return error
    })
    return info

    
},
}

const RecoverApi={
    recover_password:(data)=>{
       console.log(data);
    const info = request.post('recover_password',{"email":data.email, "password":data.password}).then(function(data){
        
        return data.data
    }).catch(function(error){
        return error
    })
    return info

    
   console.log(data);
}
}


export {
    TemperatureApi,
    LoginApi,
    ProfileApi,
    AdminApi,
    RecoverApi
    
}