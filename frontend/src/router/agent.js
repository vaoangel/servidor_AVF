import axios from 'axios'

let token = null
let API = axios.create({
    baseURL: 'http://localhost:3000/',
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
                alert("Operación realizada correctamente")
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


export {
    TemperatureApi,
    LoginApi
}