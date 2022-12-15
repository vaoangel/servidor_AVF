
import React from 'react';
import {connect} from 'react-redux'
import {Link, Redirect } from "react-router-dom";
import Apis from '../router/index'
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

const mapDispatchToProps = dispatch => ({



    //add:(data)=>dispatch({type: "ADD_USER", method:"add_user",api: "AdminApi", payload: Apis.AdminApi.add_user(data)}),



});

const mapStateToProps = state => ({
    currentUser: state.LoginReducer.currentUser,

    enterprise_list: state.AdminReducer.allEnterprises
});
class UserRegister extends React.Component{

    constructor(props){
        super(props);
        this.state = {

           

            add_data:{
                name:"",
                mail:"",
                phone:"",
                username:"",
                password:"",
                type:"",
                enterprise:this.props.match.params.param
            }


        }
        this.handleChanges = this.handleChanges.bind(this);
        this.user_add = this.user_add.bind(this);

    }
    handleChanges(data){
        this.setState({add_data:{...this.state.add_data, [data.target.name]: data.target.value}})
    }
  user_add(){



        if (this.state.add_data.name=== '') {
            alert("El campo de nombre no puede estar vacio")
        }else if(this.state.add_data.mail=== ''){
            alert("El campo de correo no puede estar vacio")




        }else if(this.state.add_data.phone=== ''){
            alert("El campo de telefono no puede estar vacio")




        }
        else if(this.state.add_data.username=== ''){
            alert("El campo de usuario no puede estar vacio")




        }else if(this.state.add_data.password=== ''){
            alert("El campo de contraseña no puede estar vacio")




        }else if(this.state.add_data.type=== ''){
            alert("El campo de tipo usuario no puede estar vacio")
        }
        else{

           
            console.log(this.state.add_data);

            var result = Apis.AdminApi.add_user(this.state.add_data);
            //<Redirect to={`${"admin_page2"}${this.props.match.params.param}`} />
            result.then(value => {
                alert("Usuario añadido correctamente")
            })

        }

    }
   
    render(){
    
        if (this.props.currentUser== null) {
            console.log("entra");
            return(
                <div>
                <Redirect to="/login" />
                </div>
            )
        }
        if (this.props.currentUser[0].Tipo=== "admin") {
            return(
                <div className="screen-profile page_body">
                    <h4 className="h4">Registrar nuevos perfiles</h4>  
    
                    <Form className="form">
                        <div className="label">
                            <label className="label-text">Nombre</label>
                        </div>
                        <div className="form-input">
                            <input onChange={this.handleChanges} type="text" placeholder="Nombre" name="name" />
                        </div>
    
                        <div className="label">
                            <label className="label-text">Correo</label>
                        </div>
                        <div className="form-input">
                            <input onChange={this.handleChanges} type="text" placeholder="mail" name="mail" />
                        </div>
    
                        <div className="label">
                            <label className="label-text">Número telefónico</label>
                        </div>
                        <div className="form-input">
                            <input onChange={this.handleChanges} type="text" placeholder="Telefono" name="phone" />
                        </div>
    
                        <div className="label">
                            <label className="label-text">Usuario</label>
                        </div>
                        <div className="form-input">
                            <input onChange={this.handleChanges} type="text" placeholder="Usuario" name="username" />
                        </div>
    
                        <div className="label">
                            <label className="label-text">Contraseña</label>
                        </div>
                        <div className="form-input">
                            <input onChange={this.handleChanges} type="text" placeholder="Contraseña" name="password" />
                        </div>
    
                        <div className="label">
                            <label className="label-text">Empresa</label>
                        </div>
                        <div className="form-input">
                            <input onChange={this.handleChanges} value={ this.props.match.params.param }type="text" placeholder="Empresa" name="enterprise" disabled />
                        </div>
    
                        <div className="label">
                            <label className="label-text">Tipo de usuario</label>
                        </div>
    
                        <div>

    
                        <input onChange={this.handleChanges} type="radio" value="user" name="type" className='radio_button'/>
                        <label className='radio_button_text'>usuario</label>
                        <br/>
    
                        <div className="form-input">
                            <input onChange={this.handleChanges} type="text" placeholder="" disabled="disabled"/>
                        </div>
                        </div>
                        
                        <div className='button-div'>
                            <button type="button" value="enviar" className='button' onClick={this.user_add}>Guardar</button>
                        </div>
                        
                    </Form>
    
                </div>
                    
            )
        }else if(this.props.currentUser[0].Tipo=== "admin_c")
        {
        return(
            <div className="screen-3 page_body">
                <h4 className="h4">Registrar nuevos perfiles</h4>  

                <Form className="form">
                    <div className="label">
                        <label className="label-text">Nombre</label>
                    </div>
                    <div className="form-input">
                        <input onChange={this.handleChanges} type="text" placeholder="Nombre" name="name" />
                    </div>

                    <div className="label">
                        <label className="label-text">Correo</label>
                    </div>
                    <div className="form-input">
                        <input onChange={this.handleChanges} type="text" placeholder="mail" name="mail" />
                    </div>

                    <div className="label">
                        <label className="label-text">Número telefónico</label>
                    </div>
                    <div className="form-input">
                        <input onChange={this.handleChanges} type="text" placeholder="Telefono" name="phone" />
                    </div>

                    <div className="label">
                        <label className="label-text">Usuario</label>
                    </div>
                    <div className="form-input">
                        <input onChange={this.handleChanges} type="text" placeholder="Usuario" name="username" />
                    </div>

                    <div className="label">
                        <label className="label-text">Contraseña</label>
                    </div>
                    <div className="form-input">
                        <input onChange={this.handleChanges} type="text" placeholder="Contraseña" name="password" />
                    </div>

                    <div className="label">
                        <label className="label-text">Empresa</label>
                    </div>
                    <div className="form-input">
                        <input onChange={this.handleChanges} value={ this.props.match.params.param }type="text" placeholder="Empresa" name="enterprise" disabled />
                    </div>

                    <div className="label">
                        <label className="label-text">Tipo de usuario</label>
                    </div>

                    <div>
                    <input onChange={this.handleChanges} type="radio" value="admin_c" name="type" className='radio_button'/>
                    <label className='radio_button_text'>admin_c</label>
                    <br/>

                    <input onChange={this.handleChanges} type="radio" value="admin" name="type" className='radio_button'/>
                    <label className='radio_button_text'>admin</label>
                    <br/>

                    <input onChange={this.handleChanges} type="radio" value="user" name="type" className='radio_button'/>
                    <label className='radio_button_text'>usuario</label>
                    <br/>

                    <div className="form-input">
                        <input onChange={this.handleChanges} type="text" placeholder="" disabled="disabled"/>
                    </div>
                    </div>
                    
                    <div>
                        <button type="button" value="enviar" className='button' onClick={this.user_add}>Guardar</button>
                    </div>
                    
                </Form>

            </div>
                
        )
        }


       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserRegister)