import React from "react";
//import AllTemperatures from "../hooks/getAllTemperatures";
import Mostrar_mediciones from '../hooks/informacion_adruino.hook'
//import Upload from "../hooks/images.hook.js"
import UselocalStorage from "../hooks/localStorage.hook"

class MainHome extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            test: false
            };
           
            
    }
 
    checkLogin() {
    

    }



    render(){
        
    




        //html
        return(
            <div>
               
               
                <Mostrar_mediciones></Mostrar_mediciones>
               {/*  <Upload></Upload> */}
            </div>
        )
    }
}


export default MainHome