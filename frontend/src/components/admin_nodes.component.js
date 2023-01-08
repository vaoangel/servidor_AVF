import React from 'react';
import {  Link } from 'react-router-dom';
import {connect} from 'react-redux'


import ojo from '../assets/img/ojo.png'
import x from '../assets/img/x_roja.png'
import boton_verde from '../assets/img/boton_cruz_verde.png'
import Apis from '../router/index';

const mapDispatchToProps = dispatch => ({

    //onload:(data)=>dispatch({type: "CHANGE ", method:"get_sensors_by_inactivity",api: "AdminApi", payload:(data)}),
});

const mapStateToProps = state => ({

    currentUser: state.LoginReducer.currentUser
});


class AdminNodesPage extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            enterprises: this.props.currentUser[0].idEmpresa,
            check: false

        }

        this.enterprise_list = this.enterprise_list.bind(this)
    }

    //Función que  renderiza las empresas
    enterprise_list(){
        console.log("ENTRO");
        if(this.state.check == false){
            console.log("Primero iteracion");
            console.log("ME METO EN LA FUNCION");

            var json = {
                enterprise: this.state.enterprises
            }

            var nodes = Apis.AdminApi.get_sensors_by_inactivity(json)
            nodes.then(value4 => {
                if(this.state.check == false){
                console.log(value4);
                console.log(value4[0].Fecha);
                console.log("ME METO EN EL LOOP");
                for(let i = 0; i < value4.length; i++){
                    console.log(i);
                    document.getElementById("table-body").innerHTML += `
                    <tr>
                        <td>` + value4[i].idSensor + `</td>
                        <td>` + value4[i].Fecha + `</td>
                    </tr>
                    `;
                }
            }
                
                this.setState({check:true})
            })
            
            console.log(this.state.check);
        } else{
            console.log("Segunda iteracion");
        }
        
        
    }

    render(){
        
//si el state está vacio devuelve un Cargando 
        if (this.state.enterprises === undefined) {
            
            return(
                <h1>
                    Cargando
                </h1>
            )
        }else{
            return(
                <div class="container-fluid admin_page">
                    <div className='row'>
                        <h2 className=' col-11 text-center my-auto'>Lista de nodos</h2>
                    </div>
                    
    
                    <table class="table table-bordered">
                        <thead className='text-center'>
                        <tr>
                            <th class="col-2">Nodo</th>
                            <th class="col-6 bg-success">Última medicion</th>
                        </tr>
                        </thead>
                        <tbody id="table-body">
                        
                                {this.enterprise_list()}
    
                        </tbody>
                    </table>
    
                </div>
                
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminNodesPage)