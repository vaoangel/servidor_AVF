import React from 'react';
import {connect} from 'react-redux'
import {LoginApi} from '../router/agent'
import {Link, Redirect } from "react-router-dom";
const mapDispatchToProps = dispatch => ({
    login: (username, password) =>
    dispatch({ type: "LOGIN",method:"login",api:"LoginApi", payload:{username,password},


}),/* agent.Auth.login(email, password)   new Promise((resolve,reject)=>{
        let res = {user:{username:"test",token:"guau un token"}}
        resolve(res);
    }) */
});

const mapStateToProps = state => ({
    currentUser: state.LoginReducer.currentUser,
});

class LoginC extends React.Component {
    constructor(props){

        super(props);
        this.state = {
            loginData:{username: "", password:""}
        }
        this.handleChanges = this.handleChanges.bind(this);
        this.validateData = this.validateData.bind(this);



    }
    validateData(){
        const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        var username_val = regexp.test(this.state.loginData.username)
        
     /*    if((this.state.loginData.username === "")||(username_val === false)){
            alert("El email introducido no es válido");
        }else if(this.state.loginData.password === ""){
            alert("El campo de password es requerido");

        }else{
             
        } */
       
       var result =  this.props.login(this.state.loginData.username, this.state.loginData.password);

       console.log(result);

    }
    handleChanges(data){
        this.setState({loginData:{...this.state.loginData, [data.target.name]: data.target.value}})
    }
   
    render(){


    /*     if (this.props.currentUser) {
            console.log("entra");
            return(
                <div>
                <Redirect to="/profile" />
                </div>
            )
        } */

        return(
            <div >
                <div >
                    <div >
                        <h2 >Welcome!</h2>
                        
                        <div>
                            <span  > Username</span>
                            <input  name="username" onChange={this.handleChanges} type="text" placeholder="Username"/>
                            <span  > Password</span>
                            <input  name="password" onChange={this.handleChanges} type="password" placeholder="Password"/>
                            <div onClick={this.validateData}>
                                <button component_type="auth_form" component_sub_type="formButton" text="Login" >Login</button>
                            </div>
                         

                        </div>
                        {/* 
                        <a className="form-link" >I lost my password</a> */}
                    </div>
                </div>
            </div>
        )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginC)