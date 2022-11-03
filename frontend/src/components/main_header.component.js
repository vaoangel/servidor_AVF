import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavLink, Form, FormControl, Button } from 'react-bootstrap';
import UselocalStorage from "../hooks/localStorage.hook"
import '../style.css';
import logo from '../../src/icono1.png'; // Tell webpack this JS file uses this image
import imagenlogin from '../../src/loginicon.png';



class MainHeader extends React.Component {

    constructor(props) {
        super(props);

    }



    render() {


        /*return(
            <div>
            <Navbar bg="dark">
                <Nav className="ml-auto">
                    <Nav.Link>
                        <Link to={`/`}>Inicio</Link>
                        <Link to={`/acercadenosotros`}>Acerca de nosotros</Link>
                        <Link to={`/contactanos`}>Contáctanos</Link>
                        <Link to={`/login`}>Login</Link>
                    </Nav.Link>
        
                </Nav>
            </Navbar>
        </div>
        )*/


        /*return(
            <Navbar className="container-fluid" collapseOnSelect expand="sm" bg="dark" variant="green">
            
                <Navbar.Toggle aria-controls="navbarScroll" data-bs-target="#navbarScroll" />
                <img src={logo} alt='imagenicono' width={"50"}></img>
                <Navbar.Collapse id="navbarScroll">
                <Nav className="container-fluid">
                    <Nav.Item className='ml-auto'>
                        <Nav.Link eventKey="1" as={Link} to ="/">Inicio</Nav.Link>
                        <Nav.Link eventKey="2" as={Link} to ="/acercadenosotros">acercadenosotros</Nav.Link>
                        <Nav.Link eventKey="3" as={Link} to ="/contactanos">Contáctanos</Nav.Link>
                        <Nav.Link eventKey="4" as={Link} to ="/login">Login</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar.Collapse>


            </Navbar>
        )*/


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


export default MainHeader