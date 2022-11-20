import React from 'react';
import {  Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import UselocalStorage from "../hooks/localStorage.hook"
import ojo from '../assets/img/ojo.png'
import x from '../assets/img/x_roja.png'
import boton_verde from '../assets/img/boton_cruz_verde.png'





class AdminPage extends React.Component{

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
                    <h2 className=' col-11 text-center my-auto'>Lista de empresas</h2>
                    <img class="col-1" src={boton_verde} onClick={this.showPopup} alt="anyadir empresas"></img>
                </div>
                

                <table class="table table-bordered admin_page">
                    <thead className='text-center'>
                    <tr>
                        <th class="col-2"></th>
                        <th class="col-6 bg-success">Nombre de la empresa</th>
                        <th class="col-2">Ver usuarios</th>
                        <th class="col-2">Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ayuntamiento X</td>
                        <td className='text-center'>
                            <Link to='/admin_page2'>
                                <img src={ojo} alt="ojo verde" height="20" width="20"></img>
                            </Link>
                        </td>
                        <td className='text-center'>
                            <img src={x} alt="x roja" height="20" width="20"></img>
                        </td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ayuntamiento Y</td>
                        <td className='text-center'>
                            <Link to='/admin_page2'>
                                <img src={ojo} alt="ojo verde" height="20" width="20"></img>
                            </Link>
                        </td>
                        <td className='text-center'>
                            <img src={x} alt="x roja" height="20" width="20"></img>
                        </td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td class="text-left"></td>
                        <td></td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>

                <div class="popup">
                    <span class="popuptext" id="myPopup">
                        <h5>Nombre nueva empresa</h5>
                        <input type="text" placeholder="Escribir nuevo nombre" className='input'/>
                        <div>
                            <button class="button" onClick={this.hidePopup}>Guardar</button>
                        </div>
                        
                    </span>
                </div>

            </div>
            
        )
    }
}


export default AdminPage