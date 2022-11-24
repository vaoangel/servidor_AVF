import React from 'react';
import {connect} from 'react-redux'
import {LoginApi} from '../router/agent'
import {Link, Redirect } from "react-router-dom";
import logo from '../assets/img/logo.png'
import fotouser  from '../assets/img/usuario.png'
import contra  from '../assets/img/contra.png'
const mapDispatchToProps = dispatch => ({
    login: (username, password) =>
    dispatch({ type: "LOGIN",method:"login",api:"LoginApi", payload:{username,password},


}),/* agent.Auth.login(email, password)   new Promise((resolve,reject)=>{
        let res = {user:{username:"test",token:"guau un token"}}
        resolve(res);
    }) */
});

const mapStateToProps = state => ({
    currentUser: state.LoginReducer.currentUser,
});

class LoginC extends React.Component {
    constructor(props){

        super(props);
        this.state = {
            loginData:{username: "", password:""}
        }
        this.handleChanges = this.handleChanges.bind(this);
        this.validateData = this.validateData.bind(this);



    }
    validateData(){
        const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        var username_val = regexp.test(this.state.loginData.username)
        
     /*    if((this.state.loginData.username === "")||(username_val === false)){
            alert("El email introducido no es válido");
        }else if(this.state.loginData.password === ""){
            alert("El campo de password es requerido");

        }else{
             
        } */
       
        console.log(this.state.loginData);
        console.log("Probando");
       this.props.login(this.state.loginData.username, this.state.loginData.password);

      

    }
    handleChanges(data){
        this.setState({loginData:{...this.state.loginData, [data.target.name]: data.target.value}})
    }
   
    render(){
        console.log(this.state.loginData);


        if (this.props.currentUser) {
            console.log("entra");
            return(
                <div>
                <Redirect to="/profile" />
                </div>
            )
        }


            return(

               
                <div className="screen-1"> 
                <img src={logo} alt="image not found"className="logoFoto" />
                   <div className="screen-2">
                    
                   
    
      
                  
             <><div className="email">
             <h3>Iniciar sesión</h3>
                       <img src={fotouser} alt="image not found"className="userFoto" />
                       <div className="sec-2">
                           <ion-icon name="mail-outline" />
                           <input  name="username" onChange={this.handleChanges} type="text" placeholder="Username"/>
                       </div>
                   </div><div className="password">
                   <img src={contra} alt="image not found"className="contraFoto" />
                     
                       <div className="sec-2">
                           <ion-icon name="lock-closed-outline" />
                           <input  name="password" className='pas' onChange={this.handleChanges} type="password" placeholder="Password"/>
                           <ion-icon className="show-hide" name="eye-outline" />
                       </div>
                       
                   </div>
                   
                   
                   <button onClick={this.validateData} className="login">Entrar</button>

                                         </>
                                        
           </div>
           <Link to="/recover_pass" className='text-center link_recuperar'>He olvidado mi contraseña</Link>
            </div>
    
                
           )
        



        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginC)