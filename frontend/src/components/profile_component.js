
import React from 'react';
import {connect} from 'react-redux'
import {Link, Redirect } from "react-router-dom";
import Apis from '../router/index'

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
            phone: this.props.currentUser[0].telefono, 
            username: this.props.currentUser[0].usuario,
            name:this.props.currentUser[0].nombre,
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

        var username_val = regexp.test(this.state.profileData.username)
        
     /*    if((this.state.loginData.username === "")||(username_val === false)){
            alert("El email introducido no es válido");
        }else if(this.state.loginData.password === ""){
            alert("El campo de password es requerido");

        }else{
             
        } */
       
       var result =  this.props.update(this.state.profileData);

       

    }
    handleChanges(data){
        this.setState({profileData:{...this.state.profileData, [data.target.name]: data.target.value}})
    }
   
    render(){
/*     if (!this.props.currentUser) {
            console.log("entra");
            return(
                <div>
                <Redirect to="/login" />
                </div>
            )
        } */
        
        return(
            <div >
                <div >
                    <div >
                        <h2 >Welcome!</h2>
                        
                        <div>
                            <span  > Usuario</span>
                            <input  name="username" onChange={this.handleChanges} type="text" placeholder={this.state.profileData.username} disabled/>

                            <span  > Nombre</span>
                            <input  name="name" onChange={this.handleChanges} type="text" placeholder={this.state.profileData.name}/>
                            <span  > Email</span>
                            <input  name="mail" onChange={this.handleChanges} type="text" placeholder={this.state.profileData.mail}/>
                            <span  > Teléfono</span>
                            <input  name="phone" type="text"onChange={this.handleChanges} placeholder={this.state.profileData.phone}/>
                            <button type="button" value="enviar" onClick={this.validateData}>Enviar</button>

                         

                        </div>
                        {/* 
                        <a className="form-link" >I lost my password</a> */}
                    </div>
                </div>
            </div>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileC)