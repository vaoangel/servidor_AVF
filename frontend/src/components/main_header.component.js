import React from 'react';
import {  Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import UselocalStorage from "../hooks/localStorage.hook"

class MainHeader extends React.Component{

    constructor(props){
        super(props);
     
    }

     

    render(){

        
        return(
            <div>
            <Navbar bg="dark">
                <Nav className="mr-auto">
                    <Nav.Link>
                        <Link to={`/`}>Home</Link>
                        <hr></hr>
                        <Link to={`/login`}>Componente pruebas de maquetacion</Link>
                        <Link to={`/profile`}>Profile</Link>

                    </Nav.Link>
        
                </Nav>
            </Navbar>
        </div>
        )
    }
}


export default MainHeader