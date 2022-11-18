
import React from 'react';
import {connect} from 'react-redux'
import {Link, Redirect } from "react-router-dom";
import Apis from '../router/index'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

class UserEdit extends React.Component{

    constructor(props){
        super(props);

    }

   
    render(){
    
        return(
            <div className="screen-3 page_body">
                <h4 className="h4">Editar información del usuario</h4>  

                <Form className="form">
                    <div className="label">
                        <label className="label-text">Nombre</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Nombre" name="name" />
                    </div>

                    <div className="label">
                        <label className="label-text">Correo</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Nombre" name="name" />
                    </div>

                    <div className="label">
                        <label className="label-text">Número telefónico</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Nombre" name="name" />
                    </div>

                    <div className="label">
                        <label className="label-text">Usuario</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Nombre" name="name" />
                    </div>

                    <div className="label">
                        <label className="label-text">Contraseña</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Nombre" name="name" />
                    </div>

                    <div className="label">
                        <label className="label-text">Empresa</label>
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder="Nombre" name="name" />
                    </div>

                    <div className="label">
                        <label className="label-text">Tipo de usuario</label>
                    </div>

                    <div>
                    <input type="radio" value="admin-central" name="user_type" className='radio_button'/>
                    <label className='radio_button_text'>Administrador Central</label>
                    <br/>

                    <input type="radio" value="admin" name="user_type" className='radio_button'/>
                    <label className='radio_button_text'>Administrador</label>
                    <br/>

                    <input type="radio" value="user" name="user_type" className='radio_button'/>
                    <label className='radio_button_text'>Usuario</label>
                    <br/>

                    <div className="form-input">
                        <input type="text" placeholder="" disabled="disabled"/>
                    </div>
                    </div>
                    
                    <div>
                        <button type="button" value="enviar" className='button'>Guardar</button>
                    </div>
                    
                </Form>

            </div>
                
        )


       
    }
}


export default UserEdit