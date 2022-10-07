import axios from 'axios'

let token = null
let API = axios.create({
    baseURL: 'http://localhost:8000/',
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
    GetAll:()=>{
        const info = request.get('temperatura/temperatura/').then(function(data){
            console.log(data);

            return data
        }).catch(function(error){
            return error
        })
/*      console.log(info);
 */        return info
    },
}


export {
    TemperatureApi
}