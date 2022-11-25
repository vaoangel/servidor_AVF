import React from 'react';
import {connect} from 'react-redux'
import {Link, Redirect } from "react-router-dom";
import Apis from '../router/index'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const mapDispatchToProps = dispatch => ({
    change_password: (username,oldpass, newpass) =>
    dispatch({ type: "CHANGE",method:"change_password",api:"ProfileApi", payload:{username, oldpass, newpass},})
    //success: (data) => dispatch({type:"UPDATE_PROFILE_SUCCESS",payload:data}) 
});

const mapStateToProps = state => ({
    currentUser: state.LoginReducer.currentUser,
});
class ChangePassC extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            change_passwordData:{username: this.props.currentUser[0].Usuario, oldpass:"", newpass:""}
        }
        this.handleChanges = this.handleChanges.bind(this);
        this.validateData = this.validateData.bind(this);
    }
   
   
    validateData(e){
        const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var json = {
            username: this.state.change_passwordData.username,
            oldpass: this.state.change_passwordData.oldpass,
            newpass: this.state.change_passwordData.newpass
        }
        //var username_val = regexp.test(this.state.loginData.username)
        //console.log(this.state.recover_passwordData);
        console.log("Probando"); 
        Apis.ProfileApi.change_password(json)

    }
    handleChanges(data){
        this.setState({change_passwordData:{...this.state.change_passwordData, [data.target.name]: data.target.value}})
    }
   
    render(){
       
        return(

           <div className="screen-3">
            <h4 className="h4">Cambiar contraseña</h4>  

            <form className="form">
                <div className="label">
                    <label className="label-text">Antigua contraseña</label>
                </div>
                <div className="form-input">
                    <input type="password" id="mail"></input>
                </div>
                <div className="label">
                    <label className="label-text">Antigua contraseña</label>
                </div>
                <div className="form-input">
                    <input type="password" name="oldpass" onChange={this.handleChanges}></input>
                </div>
                <div className="label">
                    <label className="label-text">Nueva contraseña</label>
                </div>
                <div className="form-input">
                <input type="password" name="newpass" onChange={this.handleChanges}></input>
                </div>
                
                <div>
                <button type="submit" className='button' onClick={this.validateData}>Actualizar</button>
                </div>
                
            </form>

        </div>

            
                
        )


       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChangePassC)