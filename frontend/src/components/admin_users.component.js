import React from 'react';
import {  Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import UselocalStorage from "../hooks/localStorage.hook"
import ojo from '../assets/img/ojo.png'
import x from '../assets/img/x_roja.png'
import boton_verde from '../assets/img/boton_cruz_verde.png'
import lapiz from '../assets/img/lapiz.png'
import {connect} from 'react-redux'
import {
    useParams
  } from "react-router-dom";

  const mapDispatchToProps = dispatch => ({


    onload:(data)=>dispatch({type: "GET_USERS_BY_ENTERPRISE", method:"get_all_users_by_enterprise",api: "AdminApi", payload:data}),

    delete:(data)=>dispatch({type: "DELETE_USERS_BY_ENTERPRISE", method:"delete_users_by_enterprise",api: "AdminApi", payload:(data)}),
    add:(data)=>dispatch({type: "ADD_ENTERPRISE", method:"add_enterprise",api: "AdminApi", payload:(data.data)}),



});

const mapStateToProps = state => ({
    users_by_enterprise: state.AdminReducer.users_by_enterprise

});

class AdminPage2 extends React.Component{

    constructor(props){
        
        super(props);
        this.props.onload(this.props.match.params.param)
        this.state = {
            users_by_enterprise:this.props.users_by_enterprise,

           
            current:"",

            add_data:{
                input: "",
            }


        }
        this.users_list = this.users_list.bind(this)

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

    getSnapshotBeforeUpdate(prevProps, prevState) {


        if (prevProps.users_by_enterprise !== this.props.users_by_enterprise) {


          const snapshot = this.props.users_by_enterprise;
          return snapshot
        }    
        return null;
    } 
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot != null){

            //console.log(snapshot);

            this.setState({
                users_by_enterprise: snapshot
            })

           // this.props.success()

            this.setState({enterprises:{...this.props.enterprise_list,
          
            // modificar todo el state cuando llegue el raw exacto del backend
            }})

            
        }
        
    }


    users_list(){
        // console.log(this.state.animals);

        let html =[]
               

       
        this.state.users_by_enterprise.map((elements) =>{
            return html = [
                ...html,
                <tr key={elements.idUsuario}>
                    <td>{elements.Nombre}</td>
                        <td>{elements.mail}</td>
                        <td>{elements.Telefono}</td>
                        <td>{elements.Usuario}</td>
                        <td>{elements.Tipo}</td>
                        <td>{elements.idEmpresa}</td>
                        <td className='text-center'>
                    <img id={elements.idUsuario} src={x} alt="x roja" name={elements.idEmpresa}height="20" width="20"  onClick={this.user_delete}></img>
                        </td>
                    </tr>

            ]
        })
     
        return html
    }

   user_delete = event =>{

  
        var data = {
            idUsuario:event.currentTarget.id,
            idEmpresa:event.currentTarget.name
        }
        console.log(data);

        this.props.delete(data)
      }
  
  
  
      enterprise_add(){
  
  
          var popup = document.getElementById("myPopup");
          /*if(popup.style.visibility == "hidden")*/
         console.log("hide" + popup.classList.contains("show"));
          popup.classList.remove("show");
          console.log("hide" + popup.classList.contains("show"));
  
  
  
          if (this.state.add_data.input=== '') {
              alert("El campo de nombre no puede estar vacio")
          }else{
              this.props.add(this.state.add_data.input);
  
          }
  
      }











    render(){


        if (this.state.users_by_enterprise===undefined) {
            return (
                <h1>
                    Cargando
                </h1>
            )
        }else{

      

        
        return(
            <div class="container admin_page">
                <div className='row'>
                    <h2 className='col-11 text-center my-auto'>Lista de perfiles de usuarios</h2>
                    <Link class="col-1" to={`${"user_register"}${this.props.match.params.param}`}><img src={boton_verde} alt="anyadir empresas" height={86} width={86}></img></Link>
                  
                    
                    
                    
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
                        <th class="col">Eliminar</th>
                    </tr>
                    </thead>
                    <tbody>

                        {this.users_list()}
    
                    </tbody>
                </table>

            </div>
            
        )
    }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPage2)