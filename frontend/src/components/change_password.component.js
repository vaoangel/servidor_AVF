import React from 'react';
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import Apis from '../router/index'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const mapDispatchToProps = dispatch => ({
    change_password: (username, oldpass, newpass) =>
        dispatch({ type: "CHANGE", method: "change_password", api: "ProfileApi", payload: { username, oldpass, newpass }, })
    //success: (data) => dispatch({type:"UPDATE_PROFILE_SUCCESS",payload:data}) 
});

const mapStateToProps = state => ({
    currentUser: state.LoginReducer.currentUser,
});
class ChangePassC extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            change_passwordData: { username: /*"asereje2"*/this.props.currentUser[0].Usuario, oldpass: "", newpass: "" }
        }
        this.handleChanges = this.handleChanges.bind(this);
        this.validateData = this.validateData.bind(this);
    }


    validateData(e) {
        const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        var json = {
            username: this.state.change_passwordData.username,
            oldpass: this.state.change_passwordData.oldpass,
            newpass: this.state.change_passwordData.newpass
        }

        if (document.getElementById("oldpass").value == "" || document.getElementById("newpass1").value == "" || document.getElementById("newpass2").value == "") {
            alert("Hay campos vacíos")
        } else if (document.getElementById("newpass1").value != document.getElementById("newpass2").value) {
            alert("Los campos de la nueva contraseña no coinciden")
        } else {
            var result = Apis.ProfileApi.change_password(json)
            result.then(value => {
                if (value.code == 666) {
                    alert("La contraseña introducida es incorrecta")
                } else if (value.code == 504) {
                    alert("La nueva contraseña es igual a la antigua")
                } else {
                    alert("La contraseña se ha actualizado correctamente")
                }
            })
        }


    }
    handleChanges(data) {
        this.setState({ change_passwordData: { ...this.state.change_passwordData, [data.target.name]: data.target.value } })
    }

    render() {
        console.log(this.state.change_passwordData);
        return (

            <div className="screen-profile">
                <h4 className="h4">Cambiar contraseña</h4>

                <div className='form-profile'>
                    <Form className="form">
                        <div className="label">
                            <label className="label-text">Antigua contraseña</label>
                        </div>
                        <div className="form-input">
                            <input type="password" name="oldpass" onChange={this.handleChanges} id="oldpass"></input>
                        </div>
                        <div className="label">
                            <label className="label-text">Nueva contraseña</label>
                        </div>
                        <div className="form-input">
                            <input type="password" name="newpass" onChange={this.handleChanges} id="newpass1"></input>
                        </div>
                        <div className="label">
                            <label className="label-text">Confirmar nueva contraseña</label>
                        </div>
                        <div className="form-input">
                            <input type="password" name="newpass" onChange={this.handleChanges} id="newpass2"></input>
                        </div>

                        <div className='button-div'>
                            <button type="button" className='button' onClick={this.validateData}>Actualizar</button>
                        </div>

                    </Form>

                </div>

            </div>


        )

    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ChangePassC)