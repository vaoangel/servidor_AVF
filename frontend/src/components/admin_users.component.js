import React from 'react';
import {  Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import UselocalStorage from "../hooks/localStorage.hook"
import ojo from '../assets/img/ojo.png'
import x from '../assets/img/x_roja.png'
import boton_verde from '../assets/img/boton_cruz_verde.png'
import lapiz from '../assets/img/lapiz.png'





class AdminPage2 extends React.Component{

    constructor(props){
        super(props);
     
    }

    showPopup() {
        var popup = document.getElementById("myPopup");
        /*if(popup.style.visibility == "hidden")*/
        console.log("show" + popup.classList.contains("show"));
        popup.classList.add("show");
        console.log("show" + popup.classList.contains("show"));
      }

    hidePopup() {
    var popup = document.getElementById("myPopup");
    /*if(popup.style.visibility == "hidden")*/
   console.log("hide" + popup.classList.contains("show"));
    popup.classList.remove("show");
    console.log("hide" + popup.classList.contains("show"));
    }

     

    render(){
        

        
        return(
            <div class="container admin_page">
                <div className='row'>
                    <h2 className='col-11 text-center my-auto'>Lista de perfiles de usuarios</h2>
                    <Link class="col-1" to='/user_register'><img src={boton_verde} alt="anyadir empresas" height={86} width={86}></img></Link>
                  
                    
                    
                    
                </div>
                

                <table class="table table-bordered admin_page text-center">
                    <thead>
                    <tr>
                        <th class="col bg-success">Nombre</th>
                        <th class="col bg-success">Correo</th>
                        <th class="col bg-success">Numero</th>
                        <th class="col bg-success">Usuario</th>
                        <th class="col bg-success">Tipo de usuario</th>
                        <th class="col bg-success">Empresa</th>
                        <th class="col">Editar</th>
                        <th class="col">Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Alvaro Escribano</td>
                        <td>alvaro@gmail.com</td>
                        <td>656565655</td>
                        <td>alvaroes</td>
                        <td>administrador</td>
                        <td>Ayuntamiento de Chester</td>
                        <td><Link to='/user_edit'><img src={lapiz} alt="editar usuarios" height="20" width="20"></img></Link></td>
                        <td><img src={x} alt="x roja" height="20" width="20"></img></td>
                    </tr>
                    <tr>
                    <td>Alvaro Escribano</td>
                        <td>alvaro@gmail.com</td>
                        <td>656565655</td>
                        <td>alvaroes</td>
                        <td>administrador</td>
                        <td>Ayuntamiento de Chester</td>
                        <td><Link to='/user_edit'><img src={lapiz} alt="editar usuarios" height="20" width="20"></img></Link></td>
                        <td><img src={x} alt="x roja" height="20" width="20"></img></td>
                    </tr>
                    <tr>
                    <td>Alvaro Escribano</td>
                        <td>alvaro@gmail.com</td>
                        <td>656565655</td>
                        <td>alvaroes</td>
                        <td>administrador</td>
                        <td>Ayuntamiento de Chester</td>
                        <td><Link to='/user_edit'><img src={lapiz} alt="editar usuarios" height="20" width="20"></img></Link></td>
                        <td><img src={x} alt="x roja" height="20" width="20"></img></td>
                    </tr>
                    </tbody>
                </table>

            </div>
            
        )
    }
}


export default AdminPage2