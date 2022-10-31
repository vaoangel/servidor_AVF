import React from "react";



class Test extends React.Component{





    render(){
        return(

              
             <div className="screen-1">
                <div className="screen-2">
                 <h3> Iniciar Sesión </h3>
               
          <><div className="email">
                    <label htmlFor="email">Email</label>
                    <div className="sec-2">
                        <ion-icon name="mail-outline" />
                        <input type="email" name="email" placeholder="usuario@example.com" />
                    </div>
                </div><div className="password">
                    <label htmlFor="password">Contraseña</label>
                    <div className="sec-2">
                        <ion-icon name="lock-closed-outline" />
                        <input className="pas" type="password" name="password" placeholder="············" />
                        <ion-icon className="show-hide" name="eye-outline" />
                    </div>
                </div><button className="login">Entrar </button><div className="footer"><span>                   </span><span>   </span></div></>
        </div>
       
         </div>

             
        )
    }
}




export default Test