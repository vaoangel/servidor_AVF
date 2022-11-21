import React from 'react';
import {  Link } from 'react-router-dom';
import {connect} from 'react-redux'


import ojo from '../assets/img/ojo.png'
import x from '../assets/img/x_roja.png'
import boton_verde from '../assets/img/boton_cruz_verde.png'


const mapDispatchToProps = dispatch => ({


    onload:()=>dispatch({type: "GET_ENTERPRISE", method:"get_enterprise",api: "AdminApi"}),


});

const mapStateToProps = state => ({

    enterprise_list: state.AdminReducer.allEnterprises
});


class AdminPage extends React.Component{

    constructor(props){
        super(props);
        this.props.onload();

        this.state = {
            enterprises:this.props.enterprise_list,

            new_enterprise_name: ""
        }

        this.enterprise_list = this.enterprise_list.bind(this)
        this.getSnapshotBeforeUpdate = this.getSnapshotBeforeUpdate.bind(this)

        this.componentDidUpdate = this.componentDidUpdate.bind(this)

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
 

        if (prevProps.enterprise_list !== this.props.enterprise_list) {
        console.log(this.props.enterprise_list);


          const snapshot = this.props.enterprise_list;
          return snapshot
        }    
        return null;
    } 
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot != null){

            //console.log(snapshot);

            this.setState({
                enterprises: snapshot
            })

           // this.props.success()

         /*    this.setState({enterprises:{...this.props.enterprise_list,
          
            // modificar todo el state cuando llegue el raw exacto del backend
            }}) */

            
        }
        
    }

    //Función que  renderiza las empresas
    enterprise_list(){
        // console.log(this.state.animals);

        let html =[]
               


        this.state.enterprises.map((elements) =>{
            return html = [
                ...html,
                <tr key={elements.idEmpresa}>
                <td>{elements.idEmpresa}</td>
                <td>{elements.Nombre}</td>
                <td className='text-center'>
                    <Link to='/admin_page2'>
                        <img src={ojo} alt="ojo verde" height="20" width="20"></img>
                    </Link>
                </td>
                <td className='text-center'>
                    <img src={x} alt="x roja" height="20" width="20"></img>
                </td>
            </tr>

            ]
        })
     
        return html
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
                        
                                {this.enterprise_list()}
    
                        
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
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminPage)