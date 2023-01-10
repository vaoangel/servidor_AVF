import React from 'react';
import {  Link } from 'react-router-dom';
import {connect} from 'react-redux'


import ojo from '../assets/img/ojo.png'
import x from '../assets/img/x_roja.png'
import boton_verde from '../assets/img/boton_cruz_verde.png'
import Apis from '../router/index';

const mapDispatchToProps = dispatch => ({
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

        this.sensors_list = this.sensors_list.bind(this)
    }

    /*
    Función que renderiza la lista de nodos de la empresa
    */
    sensors_list(){
        if(this.state.check == false){
            var json = {
                enterprise: this.state.enterprises
            }

            var nodes = Apis.AdminApi.get_sensors_by_inactivity(json)
            nodes.then(value4 => {
                if(this.state.check == false){
                    for(let i = 0; i < value4.length; i++){
                        //Se eliminan las letras que se crean por defecto en la fecha
                        let fecha = value4[i].Fecha.replace(/T/g, ' ').replace(/Z/g, ' ')

                        //Se genera una variable de tipo Date a partir de la fecha en la base de datos
                        var fecha_bbdd = new Date(fecha)
                        
                        //Se obtiene la fecha actual para compararla con la de la bbdd
                        let fecha_actual = new Date()

                        //Se calcula cuantas horas han pasado desde que se tomó la última medida
                        var horas_desde_ultima_medida =(fecha_actual - fecha_bbdd)/(1000*60*60)

                        //Si han pasado más de 24 horas, se considera inactivo
                        if(horas_desde_ultima_medida > 24) var estado = "Inactivo"
                        else var estado = "Activo"

                        //Se añade la información 
                        document.getElementById("table-body").innerHTML += `
                        <tr>
                            <td>` + value4[i].Sensor + `</td>
                            <td>` + value4[i].Usuario + `</td>
                            <td>` + fecha + `</td>
                            <td>` + estado + `</td>
                        </tr>
                        `;
                    }
                }
                
                this.setState({check:true})
            })
            
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
                <div class="container admin_page">
                    <div className='row'>
                        <h2 className=' col-11 text-center my-auto'>Lista de nodos</h2>
                    </div>
                    
    
                    <table class="table table-bordered">
                        <thead className='text-center'>
                        <tr>
                            <th class="col-2">Nodo</th>
                            <th class="col-4 bg-success">Usuario</th>
                            <th class="col-4 bg-success">Última medicion</th>
                            <th class="col-2 bg-success">Estado</th>
                        </tr>
                        </thead>
                        <tbody id="table-body">
                        
                                {this.sensors_list()}
    
                        </tbody>
                    </table>
    
                </div>
                
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminNodesPage)