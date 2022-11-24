import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { Nav, Navbar, NavLink, Form, FormControl, Button } from 'react-bootstrap';
import UselocalStorage from "../hooks/localStorage.hook"
import '../style.css';
import logo2 from '../assets/img/user.png'

import logo from '../../src/icono1.png'; // Tell webpack this JS file uses this image
import imagenlogin from '../../src/loginicon.png';


const mapStateToProps = state => ({
    currentUser: state.LoginReducer.currentUser,
});
const mapDispatchToProps = dispatch => ({
    logout: () => dispatch({ type: "LOGOUT" }),
});
class MainHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            redirect: false
        }



    }





    render() {


        //MENU USUARIO ADMINISTRADOR MASTER
        if (this.props.currentUser) {

            console.log(this.props.currentUser[0].Tipo);

        //MENU USUARIO ADMINISTRADOR
         if (this.props.currentUser[0].Tipo === "admin") {
            return (

                <div class="Header">
                    <Navbar className="color-nav">
                        <Nav className="container-fluid" >
                            <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>

                            <Nav className="ml-auto menu">
                                <Button class="btn btn-outline" id="botoncontactanos" size="md" variant="info" as={Link} to="/contactanos"><h5 className="linkText">Contáctanos</h5></Button>
                                <Button class="btn btn-outline" id="botonprofile" size="md" variant="info" as={Link} to="/profile"><h5 className="linkText">Editar perfil</h5></Button>
                                <Button class="btn btn-outline" id="botonuserlist" size="md" variant="info" as={Link}to={`${"admin_page2"}${this.props.currentUser[0].idEmpresa}`}><h5 className="linkText">Lista de usuarios</h5></Button>
                                <Button class="btn btn-outline" size="md" id="botonlogin" onClick={this.props.logout} variant="info" as={Link} to="/">
                                    <img src={imagenlogin} alt="imagen login" width="30" />
                                </Button>
                            </Nav>
                        </Nav>
                    </Navbar>
                </div>



            )
        }
        if (this.props.currentUser[0].Tipo=== "admin_c") {
            return (

                <div class="Header">
                    <Navbar className="color-nav">
                        <Nav className="container-fluid" >
                            <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>

                            <Nav className="ml-auto menu">
                                <Button class="btn btn-outline" id="botonprofile" size="md" variant="info" as={Link} to="/profile"><h5 className="linkText">Editar perfil</h5></Button>
                                <Button class="btn btn-outline" id="botonuserlist" size="md" variant="info" as={Link} to="/admin_page"><h5 className="linkText">Lista de administradores</h5></Button>
                                <Button class="btn btn-outline" size="md" id="botonlogin" onClick={this.props.logout} variant="info" as={Link} to="/">
                                    <img src={imagenlogin} alt="imagen login" width="30" />
                                </Button>
                            </Nav>
                        </Nav>
                    </Navbar>
                </div>



            )
        }

        //MENU USUARIO USER
       if (this.props.currentUser[0].Tipo === "user") {
        console.log("entra");
            return (

                <div class="Header">
                    <Navbar className="color-nav">
                        <Nav className="container-fluid" >
                            <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>

                            <Nav className="ml-auto menu">
{/*                                 <Button class="btn btn-outline" id="botoninicio" size="md" variant="info" as={Link} to="/"><h5 className="linkText">Inicio</h5></Button>
 */}                                <Button class="btn btn-outline" id="botonacercade" size="md" variant="info" as={Link} to="/acercadenosotros"><h5 className="linkText">Acerca de nosotros</h5></Button>

                                <Button class="btn btn-outline" id="botoncontactanos" size="md" variant="info" as={Link} to="/contactanos"><h5 className="linkText">Contáctanos</h5></Button>

                                <Button class="btn btn-outline" id="botonprofile" size="md" variant="info" as={Link} to="/profile"><h5 className="linkText">Editar perfil</h5></Button>
                                <Button class="btn btn-outline" size="md" id="botonlogin" onClick={this.props.logout} variant="info" as={Link} to="/">
                                    <img src={imagenlogin} alt="imagen login" width="30" />
                                </Button>
                            </Nav>
                        </Nav>
                    </Navbar>
                </div>



            )
        }






    }else{
                //MENU USUARIO SIN LOGUEAR

        return (
            <div class="Header">
                <Navbar className="color-nav">
                    <Nav className="container-fluid" >
                        <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>

                        <Nav className="ml-auto menu">
                            <Button class="btn btn-outline" id="botoninicio" size="md" variant="info" as={Link} to="/"><h5 className="linkText">Inicio</h5></Button>
                            <Button class="btn btn-outline" id="botonmapa" size="md" variant="info" as={Link} to="/mapa"><h5 className="linkText">Ver mapa</h5></Button>
                            <Button class="btn btn-outline" id="botonacercade" size="md" variant="info" as={Link} to="/acercadenosotros"><h5 className="linkText">Acerca de nosotros</h5></Button>
                            <Button class="btn btn-outline" id="botoncontactanos" size="md" variant="info" as={Link} to="/contactanos"><h5 className="linkText">Contáctanos</h5></Button>
                        

                            <Button class="btn btn-outline" size="md" id="botonlogin" variant="info" as={Link} to="/login">
                                <img src={imagenlogin} alt="imagen login" width="30" />
                            </Button>
                        </Nav>
                    </Nav>
                </Navbar>
            </div>

        )

    }



    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)