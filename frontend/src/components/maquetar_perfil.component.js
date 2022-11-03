import React from "react";
import {  Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
class MaquetarPerfil extends React.Component{


    constructor(props){
        super(props);
   
    }




    render(){
        return(
            <div className="screen-3">
                <h4 className="h4">Datos del perfil</h4>  

                <Form className="form">
                    <div className="label">
                        <label className="label-text">Nombre</label>
                    </div>
                    <div className="form-input">
                        <input type="text" name="name" placeholder="Ivan Villanueva"/>
                    </div>
                    <div className="label">
                        <label className="label-text">Correo</label>
                    </div>
                    <div className="form-input">
                        <input type="text" name="mail" placeholder="fwfwe@gmail.com"/>
                    </div>
                    <div className="label">
                        <label className="label-text">Número telefónico</label>
                    </div>
                    <div className="form-input">
                        <input type="text" name="phone" placeholder="4242432442"/>
                    </div>
                    <div>
                        <button type="button" className="button">Guardar</button>
                    </div>
                    
                </Form>

            </div>
                
        )
    }
}


export default MaquetarPerfil