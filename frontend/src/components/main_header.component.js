import React from 'react';
import { Link,Redirect } from 'react-router-dom';
import {connect} from 'react-redux'

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
    logout:() => dispatch({ type: "LOGOUT" }),
});
class MainHeader extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

            redirect :false
        }



    }




    render() {

     

        if (this.props.currentUser) {
            return (
              
                <Navbar className="color-nav">
                    <Nav className="container-fluid" >
                        <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>
    
                        <Nav className="ml-auto menu">
                            <Nav.Link class="prueba" as={Link} to="/"><h5 className="linkText">Inicio</h5></Nav.Link>
                            <Nav.Link class="prueba" as={Link} to="/acercadenosotros"><h5 className="linkText">Acerca de nosotros</h5></Nav.Link>
                            <Nav.Link class="prueba" as={Link} to="/contactanos"><h5 className="linkText">Contáctanos</h5></Nav.Link>
                            <Button class="btn btn-outline" size="md" id="botonlogin" variant="info" as={Link} to="/profile">
                                <img src={logo2} alt="imagen profile" width="30" />
                            </Button>
                            <Button class="btn btn-outline" size="md" id="botonlogin" onClick={this.props.logout} variant="info" as={Link} to="/">
                                <img src={imagenlogin} alt="imagen login" width="30" />
                            </Button>
                        </Nav>
                    </Nav>
                </Navbar>
               
            )
        }

        return (
            <Navbar className="color-nav">
                <Nav className="container-fluid" >
                    <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>

                    <Nav className="ml-auto menu">
                        <Nav.Link class="prueba" as={Link} to="/"><h5 className="linkText">Inicio</h5></Nav.Link>
                        <Nav.Link class="prueba" as={Link} to="/acercadenosotros"><h5 className="linkText">Acerca de nosotros</h5></Nav.Link>
                        <Nav.Link class="prueba" as={Link} to="/contactanos"><h5 className="linkText">Contáctanos</h5></Nav.Link>
                        <Button class="btn btn-outline" size="md" id="botonlogin" variant="info" as={Link} to="/login">
                            <img src={imagenlogin} alt="imagen login" width="30" />
                        </Button>
                    </Nav>
                </Nav>
            </Navbar>

        )


    }
}


export default connect(mapStateToProps,mapDispatchToProps)(MainHeader)