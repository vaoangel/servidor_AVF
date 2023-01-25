import React from 'react';
import {  Link } from 'react-router-dom';
import {connect} from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
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
            check: false,
            selectValue: ""

        }

        this.sensors_list = this.sensors_list.bind(this)
        this.handleChanges = this.handleChanges.bind(this)
    }

    handleChanges(e){
        this.setState({selectValue:e.target.value});

        /*console.log("Me meto en filter_table");
        var input, filter, table, tr, td, i, j, visible;
        input = this.state.selectValue;
        filter = input;
        console.log("filter: " + filter);
        table = document.getElementById("table-body")
        tr = table.getElementsByTagName("tr");
      

        for (i = 0; i < tr.length; i++) {
          visible = false;
      
          td = tr[i].getElementsByTagName("td");
          for (j = 0; j < td.length; j++) {
            if (td[j] && td[j].innerHTML.indexOf(filter) > -1) {
              visible = true;
            }
          }
          if (visible === true) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }*/
 
        /*var input, filter, table, tr, td, i, j, visible;
        input = this.state.selectValue;
        filter = input;
        console.log("filter: " + filter);
        table = document.getElementById("tabla");
        tr = table.getElementsByTagName("tr");
      

        for (i = 0; i < tr.length; i++) {
          visible = false;
      
          td = tr[i].getElementsByTagName("td");
          for (j = 0; j < td.length; j++) {
            if (td[j] && td[j].innerHTML.indexOf(filter) > -1) {
              visible = true;
            }
          }
          if (visible === true) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }*/
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
                        //if(horas_desde_ultima_medida > 5/60) var estado = "Inactivo"
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

    filter_table() {
        if(this.state.check == true){
        console.log("Me meto en filter_table");
        var input, filter, table, tr, td, i, j, visible;
        input = this.state.selectValue;
        filter = input;
        console.log("filter: " + filter);
        table = document.getElementById("table-body")
        tr = table.getElementsByTagName("tr");
      

        for (i = 0; i < tr.length; i++) {
          visible = false;
      
          td = tr[i].getElementsByTagName("td");
          for (j = 0; j < td.length; j++) {
            if (td[j] && td[j].innerHTML.indexOf(filter) > -1) {
              visible = true;
            }
          }
          if (visible === true) {
            tr[i].style.display = "";
          } else {
            tr[i].style.display = "none";
          }
        }
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
            var message='You selected '+this.state.selectValue;
            return(
                <div class="container admin_page">
                    <div className='row'>
                        <h2 className=' col-11 text-center my-auto'>Lista de nodos</h2>
                    </div>
                    
    
                    <table class="table table-bordered">
                        <thead className='text-center'>
                        <tr id='tabla'>
                            <th class="col-2">Nodo</th>
                            <th class="col-4 bg-success">Usuario</th>
                            <th class="col-4 bg-success">Última medicion</th>
                            <th class="col-2 bg-success">Estado
                            <div>
                                <select 
                                    onChange={this.handleChanges}
                                    value={this.state.selectValue} 
                                >
                                <option value="Activo">Activo</option>
                                <option value="Inactivo">Inactivo</option>
                                </select>
                                
                                </div>
                               
                            </th>
                        </tr>
                        </thead>
                        <tbody id="table-body">
                                {this.sensors_list()}
                                {this.filter_table()}
    
                        </tbody>
                    </table>
                    
                </div>
                
            )
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminNodesPage)