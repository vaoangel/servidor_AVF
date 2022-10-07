import React from "react";
import AllTemperatures from "../hooks/getAllTemperatures";
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
                <AllTemperatures></AllTemperatures>
               {/*  <Upload></Upload> */}
                </div>
        )
    }
}


export default MainHome