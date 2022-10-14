import React from "react";
//import AllTemperatures from "../hooks/getAllTemperatures";
import Mostrar_mediciones from '../hooks/informacion_adruino.hook'
//import Upload from "../hooks/images.hook.js"
class MainHome extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            test: ""
            };
            
    }
 

    render(){
        return(
            <div>
                {this.state.test}
                <Mostrar_mediciones></Mostrar_mediciones>
               {/*  <Upload></Upload> */}
                </div>
        )
    }
}


export default MainHome