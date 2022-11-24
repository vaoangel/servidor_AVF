
import React from 'react';
import {connect} from 'react-redux'
import {Link, Redirect } from "react-router-dom";
import Apis from '../router/index'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const mapDispatchToProps = dispatch => ({
    recover_password: (mail,password) =>
    dispatch({ type: "RECOVER",method:"recover_password",api:"RecoverApi", payload:{mail, password},})
    //success: (data) => dispatch({type:"UPDATE_PROFILE_SUCCESS",payload:data}) 
});

const mapStateToProps = state => ({
    currentUser: state.RecoverReducer.currentUser,
});
class RecoverPassC extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            recover_passwordData:{mail: "update@gmail.com", password:"pinocho2"}
        }
        this.handleChanges = this.handleChanges.bind(this);
        this.validateData = this.validateData.bind(this);
    }
   
    generatePasswordRand(length,type) {
        var characters;
        switch(type){
            case 'num':
                characters = "0123456789";
                break;
            case 'alf':
                characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
                break;
            case 'rand':
                //FOR ↓
                break;
            default:
                characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
                break;
        }
        var pass = "";
        for (let i=0; i < length; i++){
            if(type == 'rand'){
                pass += String.fromCharCode((Math.floor((Math.random() * 100)) % 94) + 33);
            }else{
                pass += characters.charAt(Math.floor(Math.random()*characters.length));   
            }
        }
        window.addEventListener('load', function(){
            var popup = document.getElementById("contrasena");
            popup.textContent = pass;
        
        console.log(pass);
        //console.log(this.state.recover_passwordData);
        });
    }

    validateData(){
        const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var json = {
            mail: this.state.recover_passwordData.mail,
            password: this.state.recover_passwordData.password
        }
        //var username_val = regexp.test(this.state.loginData.username)
        //console.log(this.state.recover_passwordData);
        console.log("Probando"); 
        Apis.RecoverApi.recover_password(json)
    }
    handleChanges(data){
        this.setState({recover_passwordData:{...this.state.recover_passwordData, [data.target.name]: data.target.value}})
    }

    
   
    render(){
        console.log(this.state.recover_passwordData);
        return(
            <div>
                <h1>HOLA</h1>
                <h1>HOLA</h1>
                <h1>HOLA</h1>
                <h1>HOLA</h1>
                <span id="contrasena">HOLA</span>
            
                <button onClick={this.generatePasswordRand(6, 'rand')}>Clickéame</button>

                <div className="email">
             <h3>Iniciar sesión</h3>
                       
                       <div className="sec-2">
                           <ion-icon name="mail-outline" />
                           <input  name="mail" onChange={this.handleChanges} type="text" placeholder="Mail"/>
                       </div>
                   </div><div className="password">
                   
                     
                       <div className="sec-2">
                           <ion-icon name="lock-closed-outline" />
                           <input  name="password" className='pas' onChange={this.handleChanges} type="password" placeholder="Password"/>
                           <ion-icon className="show-hide" name="eye-outline" />
                       </div>
                       
                   </div>
                   
                   
                   <button onClick={this.validateData} className="login"> </button>

                                        
           </div>

            
                
        )


       
    }
}


export default RecoverPassC