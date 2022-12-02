
import React from 'react';
import {connect} from 'react-redux'
import {Link, Redirect } from "react-router-dom";
import Apis from '../router/index'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const mapDispatchToProps = dispatch => ({
     update: (data) =>
    dispatch({ type: "UPDATE_PROFILE",method:"update_profile",api:"ProfileApi", payload:data,}),
    success: (data) => dispatch({type:"UPDATE_PROFILE_SUCCESS",payload:data}) 
});



const mapStateToProps = state => ({
    currentUser: state.LoginReducer.currentUser,
});
class ProfileC extends React.Component{


    
    constructor(props){
        super(props);

        this.state = {
            profileData:{
            phone: this.props.currentUser[0].Telefono, 
            username: this.props.currentUser[0].Usuario,
            name:this.props.currentUser[0].Nombre,
            mail:this.props.currentUser[0].mail
            
                    
            }
        }
        this.handleChanges = this.handleChanges.bind(this);
        this.validateData = this.validateData.bind(this);
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevProps.currentUser !== this.props.currentUser) {
            // console.log(this.props.current);
            
          const snapshot = this.props.currentUser;
          return snapshot
        }    
        return null;
    } 
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(snapshot != null){
            this.setState({
                profileData: snapshot
            })
            this.props.success(this.props.currentUser)

            this.setState({profileData:{...this.state.profileData,
          
            // modificar todo el state cuando llegue el raw exacto del backend
            }})
            
        }
        
    }
     
    validateData(){
        const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var json = {
            username: this.state.profileData.username,
            name: this.state.profileData.name,
            phone: this.state.profileData.phone,
            mail: this.state.profileData.mail

        }
      
        if(document.getElementById("name").value == "" || document.getElementById("phone").value == "" || document.getElementById("mail").value == ""){
            alert("Hay campos vacíos")
        }else{
            var result = Apis.ProfileApi.update_profile(json)
        result.then(value => {
            alert("Perfil editado correctamente")
        })
        }


       
        
        


    

    }
    handleChanges(data){
        this.setState({profileData:{...this.state.profileData, [data.target.name]: data.target.value}})
    }
   
    render(){

        console.log(this.state.redirect);
        console.log("Telefono: " +  this.props.currentUser[0].Telefono);
        console.log("Nombre: " +  this.props.currentUser[0].Nombre);
        console.log("Username: " +  this.props.currentUser[0].Usuario);
        console.log("mail: " +  this.props.currentUser[0].mail);

       
    if (!this.props.currentUser) {
            console.log("entra");
            return(
                <div>
                <Redirect to="/login" />
                </div>
            )
        }


        
        return(
            <div className="screen-3">
                <h4 className="h4">Datos del perfil</h4>  

                <Form className="form">
                    <div className="label">
                        <label className="label-text">Nombre</label>
                    </div>
                    <div className="form-input">
                        <input onChange={this.handleChanges} type="text" value={this.state.profileData.name} name="name" id="name"/>
                    </div>
                    <div className="label">
                        <label className="label-text">Correo</label>
                    </div>
                    <div className="form-input">
                        <input name="mail" onChange={this.handleChanges} type="text" value={this.state.profileData.mail} id="mail" />
                    </div>
                    <div className="label">
                        <label className="label-text">Número de teléfono</label>
                    </div>
                    <div className="form-input">
                        <input name="phone" type="text"onChange={this.handleChanges} value={this.state.profileData.phone} id="phone" />
                    </div>
                    <div>
                        <button type="button" value="enviar" className='button' onClick={this.validateData}>Guardar</button>
                    </div>
                    
                </Form>

            </div>
                
        )


       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileC)