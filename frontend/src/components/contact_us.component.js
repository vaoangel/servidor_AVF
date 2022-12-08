
import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import Apis from '../router/index'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

//import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from 'emailjs-com';



class ContactanosC extends React.Component {

    constructor(props) {
        super(props);



    }





    render() {

        function enviarEmail(e) {
            e.preventDefault();

            emailjs.sendForm('service_ba16zgs', 'template_w2ga9hk', e.target, "RaNn5pwPTicq8RbnW").then(res => {
                alert("se ha enviado correctamente");
                console.log(res);
            })
        }


        return (

            <div className="screen-profile">
                <h4 className="h4">Contactanos</h4>

                <div className='form-profile'>
                    <form className="form" onSubmit={enviarEmail}>
                        <div className="label">
                            <label className="label-text" id="nombre" name="nombre">Nombre</label>
                        </div>
                        <div className="form-input">
                            <input type="text" id="nombre" name="nombre"></input>
                        </div>
                        <div className="label">
                            <label className="label-text" name="email">Correo</label>
                        </div>
                        <div className="form-input">
                            <input type="text" id="email" name="email" />
                        </div>
                        <div className="label">

                        </div>
                        <div className="form-input">
                            <textarea type="text" className="" id="mensaje" name="mensaje">Mensaje</textarea>
                        </div>
                        <div className='button-div'>
                            <button type="submit" className='button' >Enviar Correo</button>
                        </div>

                    </form>

                </div>
            </div>

        )



    }
}


export default ContactanosC