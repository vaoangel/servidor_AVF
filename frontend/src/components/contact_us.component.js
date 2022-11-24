
import React from 'react';
import {connect} from 'react-redux'
import {Link, Redirect } from "react-router-dom";
import Apis from '../router/index'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from 'emailjs-com';



class ContactanosC extends React.Component{

    constructor(props){
        super(props);

   
      
    }



   
   
    render(){

        function enviarEmail(e){
            e.preventDefault();

            emailjs.sendForm('service_ba16zgs','template_w2ga9hk',e.target,"RaNn5pwPTicq8RbnW").then(res=>{
                alert("se ha enviado correctamente");
                console.log(res);
            })
        }

        
        return(
            
            <div style={{width:"80%",margin:"0 auto", marginTop:"15px",}}>
                <div style={{width:"50%",backgroundColor:"#00f83a",margin:"0 auto", padding:"10px"}}>
                   
                    <hr/>
                    <form onSubmit={enviarEmail}>
                        <div className="form-row" >
                            <div className="form-group col-md-6">
                           
                                <label><b>Nombre</b></label>
                                <input type="text" className="form-control" id="nombre" name="nombre"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label><b>Email</b></label>
                                <input type="text" className="form-control" id="email" name="email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label><b>Mensaje</b></label>
                            <textarea type="text" className="form-control" id="mensaje" name="mensaje"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{width:"50%", margin:"0 auto",marginTop:"20px",backgroundColor:"#00f83a",border:" 2px solid #FFFF"}}>Enviar Correo</button>
                    </form>
                </div>
            </div>
       
        )


       
    }
}


export default ContactanosC