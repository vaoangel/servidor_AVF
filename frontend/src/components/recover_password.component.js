
import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import Apis from '../router/index'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const mapDispatchToProps = dispatch => ({
    recover_password: (email, password) =>
        dispatch({ type: "RECOVER", method: "recover_password", api: "RecoverApi", payload: { email, password }, })
    //success: (data) => dispatch({type:"UPDATE_PROFILE_SUCCESS",payload:data}) 
});

const mapStateToProps = state => ({
    currentUser: state.RecoverReducer.currentUser,
});
class RecoverPassC extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recover_passwordData: { email: "", password: "pepe2" }
        }
        this.handleChanges = this.handleChanges.bind(this);
        this.validateData = this.validateData.bind(this);
        this.enviarEmail = this.enviarEmail.bind(this);
    }

    /*generatePasswordRand(length,type) {
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
    }*/

    validateData(e) {
        const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var json = {
            email: this.state.recover_passwordData.email,
            password: this.state.recover_passwordData.password
        }
        //var username_val = regexp.test(this.state.loginData.username)
        //console.log(this.state.recover_passwordData);
        console.log("Probando");
        Apis.RecoverApi.recover_password(json)

    }
    handleChanges(data) {
        this.setState({ recover_passwordData: { ...this.state.recover_passwordData, [data.target.name]: data.target.value } })
    }

    enviarEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_ba16zgs', 'template_pmcu1rn', e.target, "RaNn5pwPTicq8RbnW").then(res => {
            alert("se ha enviado correctamente");
            console.log(res);
        })

    }

    render() {
        console.log(this.state.recover_passwordData);
        return (
            /*
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

                                        
           </div>*/

            <div id="screen-3" className="screen-profile">
                <h4 className="h4">Recuperar contraseña</h4>

                <div className='form-profile'>
                    <form className="form" onSubmit={this.enviarEmail}>
                        <div className="label">
                            <label className="label-text">Correo electrónico</label>
                        </div>

                        <div className="form-input">
                            <input type="text" id="mail" name="email" onChange={this.handleChanges}></input>
                        </div>

                        <div className='button-div'>
                            <button type="submit" className='button' id='botonrecover' onClick={this.validateData}>Enviar</button>
                        </div>

                    </form>
                </div>

            </div>



        )



    }
}


export default RecoverPassC