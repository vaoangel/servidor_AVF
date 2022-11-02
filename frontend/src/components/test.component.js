import React from "react";
import logo from '../assets/img/logo.png'
import fotouser  from '../assets/img/usuario.png'
import contra  from '../assets/img/contra.png'


class Test extends React.Component{

   



    render(){
        return(

               
             <div className="screen-1"> 
             <img src={logo} alt="image not found"className="logoFoto" />
                <div className="screen-2">
                 <h3>Entrar</h3>
                

   
               
          <><div className="email">
                    
                    <img src={fotouser} alt="image not found"className="userFoto" />
                    <div className="sec-2">
                        <ion-icon name="mail-outline" />
                        <input type="email" name="email" placeholder="Usuario" />
                    </div>
                </div><div className="password">
                <img src={contra} alt="image not found"className="contraFoto" />
                  
                    <div className="sec-2">
                        <ion-icon name="lock-closed-outline" />
                        <input className="pas" type="password" name="password" placeholder="Contraseña" />
                        <ion-icon className="show-hide" name="eye-outline" />
                    </div>
                </div><button className="login">Entrar </button><div className="footer"><span>                   </span><span>   </span></div></>
        </div>
                
         </div>

             
        )
    }
}




export default Test