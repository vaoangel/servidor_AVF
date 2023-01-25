import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import { Nav, Navbar, NavLink, Form, FormControl, Button } from 'react-bootstrap';
import UselocalStorage from "../hooks/localStorage.hook"
import '../style.css';
import logo2 from '../assets/img/user.png'

import logo from '../../src/icono1.png'; // Tell webpack this JS file uses this image
import imagenlogin from '../../src/loginicon.png';
import menu from '../assets/img/menu.png';


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
    /*
    * Ajusta el css de la página para ocultar y mostrar el menú cuando la página web se encuentra en la vista de móvil
    *
    * hide_menu()
    */ 
    hide_menu(){
        var nav = document.getElementById("nav");
        var header = document.getElementById("Header");

        //Configuración al pulsar el boton cuando el menú esta oculto
        if(nav.style.display != "flex"){
            header.style.display = "flex"
            header.style.justifyContent = "baseline"
            header.style.flexDirection = "column"
            header.style.height = "100vh"
            header.style.alignItems = "center"
            header.style.paddingTop = "50px"
            header.style.transition = "0.5s"
            setTimeout(function(){
                nav.style.display = "flex"
            nav.style.justifyContent = "baseline"
            nav.style.flexDirection = "column"
            nav.style.height = "100vh"
            nav.style.alignItems = "center"
            nav.style.paddingTop = "100px"
            nav.style.paddingBottom = "100px"
            }, 200);
            
           
        } 
        //Configuración al pulsar el boton cuando el menú está a la vista
        else{
            header.style.flexDirection = "row"
            header.style.height = "7.5vh"
            header.style.paddingBottom = "0px"
            header.style.paddingTop = "0px"
            nav.style.display = "none"
        }
        
        

    }

    /*
    * Ajusta el css de la página para ocultar el menú en la vista de móvil al cambiar de página
    *
    * change_page()
    */ 
    change_page(){
        var nav = document.getElementById("nav");
        var header = document.getElementById("Header");
        if(document.documentElement.clientWidth < 850 && header.style.flexDirection == "column"){
            header.style.flexDirection = "row"
            header.style.height = "7.5vh"
            header.style.paddingBottom = "0px"
            header.style.paddingTop = "0px"
            header.style.transition = "none"
            nav.style.display = "none"
        }
    }
    
    render() {
        console.log(this.props.currentUser);
        var device = "PC";
        if (this.props.currentUser == null) var max_width = 670;
        //else if(this.props.currentUser[0].Tipo == "admin") var max_width = 810;
        //else if(this.props.currentUser[0].Tipo == "admin_c") var max_width = 525;
        else var max_width = 1231;
        console.log("Anchura maxima actual" + max_width);
   
       //Ajustes al header cuando cambia de anchura
        window.onresize = function() {
            var nav = document.getElementById("nav");
            var header = document.getElementById("Header");
            var menu = document.getElementById("toggle-menu");
            
            //Cuando nos encontramos en la resolución de PC, configuramos la cabecera y el menú para que se vea para PC 
            if(document.documentElement.clientWidth > max_width){
            device = "PC";
            console.log(device);
            nav.style.display = "flex";
            nav.style.flexDirection = "row";
            header.style.flexDirection = "row";
            header.style.height = "7.5vh"
            header.style.paddingBottom = "0px"
            header.style.paddingTop = "0px"
            header.style.transition = "none"
            menu.style.display = "none";
            
        } 
        //Cuando nos encontramos en la resolución de movil y acabamos de cambiar desde la de PC, configuramos la cabecera y el menú para que se vea para movil
        else if(document.documentElement.clientWidth < max_width && device == "PC"){
            device = "Mobile";
            console.log(device);
            nav.style.display = "none";
            menu.style.display = "block";
            menu.style.position = "absolute";
            menu.style.right = "0.5rem";
            menu.style.top = "0.6rem";
        }
        };


        //MENU USUARIO ADMINISTRADOR MASTER
        console.log(this.props.currentUser);

        if (this.props.currentUser!=null) {


        //MENU USUARIO ADMINISTRADOR
         if (this.props.currentUser[0].Tipo === "admin") {
            return (
                <div className="Header container-fluid color-nav flex" id="Header">
                    <div className='logo'>
                        <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>
                    </div>
                    <Nav className="flex main-menu" id="nav">
                        <Button id="botonmapa" onClick={this.change_page} size="md" variant="info" as={Link} to="/area_usuario"><h5 className="linkText">Histórico de mapas</h5></Button>
                        <Button id="botoncontactanos" onClick={this.change_page} size="md" variant="info" as={Link} to="/contactanos"><h5 className="linkText">Contáctanos</h5></Button>
                        <Button id="botonprofile" onClick={this.change_page} size="md" variant="info" as={Link} to="/profile"><h5 className="linkText">Editar perfil</h5></Button>
                        <Button id="botoncontactanos" onClick={this.change_page} size="md" variant="info" as={Link} to="/change_pass"><h5 className="linkText">Cambiar Contraseña</h5></Button>
                        <Button id="botonuserlist" onClick={this.change_page} size="md" variant="info" as={Link}to={`${"admin_page2"}${this.props.currentUser[0].idEmpresa}`}><h5 className="linkText">Lista de usuarios</h5></Button>
                        <Button id="botonnodos" onClick={this.change_page} size="md" variant="info" as={Link}to="/admin_nodes_page"><h5 className="linkText">Informe de nodos</h5></Button>
                        <Button size="md" id="botonlogin" onClick={this.props.logout} variant="info" as={Link} to="/">
                            <img src={imagenlogin} onClick={this.change_page} alt="imagen login" width="30" />
                        </Button>    
                    </Nav>
                    
                    <img className='toggle_menu' id="toggle-menu" src={menu} height="30px" onClick={this.hide_menu}></img>
                </div>

            )
        }
        if (this.props.currentUser[0].Tipo=== "admin_c") {
            return (
                <div className="Header container-fluid color-nav flex" id="Header">
                    <div className='logo'>
                        <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>
                    </div>
                    <Nav className="flex main-menu" id="nav">
                        <Button id="botonprofile" onClick={this.change_page} size="md" variant="info" as={Link} to="/profile"><h5 className="linkText">Editar perfil</h5></Button>
                        <Button id="botoncontactanos" onClick={this.change_page} size="md" variant="info" as={Link} to="/admin_page"><h5 className="linkText">Lista de administradores</h5></Button>
                        <Button size="md" id="botonlogin" onClick={this.props.logout} variant="info" as={Link} to="/">
                            <img src={imagenlogin} onClick={this.change_page} alt="imagen login" width="30" />
                        </Button>  
                    </Nav>

                    <img className='toggle_menu' id="toggle-menu" src={menu} height="30px" onClick={this.hide_menu}></img>
                </div>



            )
        }

        //MENU USUARIO USER
       if (this.props.currentUser[0].Tipo === "user") {
        console.log("entra");
            return (
                <div className="Header container-fluid color-nav flex" id="Header">
                <div className='logo'>
                    <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>
                </div>
                <Nav className="flex main-menu" id="nav">
                <Button id="botonmapa" onClick={this.change_page} size="md" variant="info" as={Link} to="/area_usuario"><h5 className="linkText">Ver mapa</h5></Button>
                <Button id="botonacercade" onClick={this.change_page} size="md" variant="info" as={Link} to="/acercadenosotros"><h5 className="linkText">Acerca de nosotros</h5></Button>
                <Button id="botoncontactanos" onClick={this.change_page} size="md" variant="info" as={Link} to="/contactanos"><h5 className="linkText">Contáctanos</h5></Button>
                <Button id="botonprofile" onClick={this.change_page} size="md" variant="info" as={Link} to="/profile"><h5 className="linkText">Editar perfil</h5></Button>
                <Button id="botoninicio" onClick={this.change_page} size="md" variant="info" as={Link} to="/change_pass"><h5 className="linkText">Cambiar Contraseña</h5></Button>
                <Button size="md" id="botonlogin" onClick={this.props.logout} variant="info" as={Link} to="/">
                    <img src={imagenlogin} onClick={this.change_page} alt="imagen login" width="30" />
                </Button>    
                </Nav>    
                <img className='toggle_menu' id="toggle-menu" src={menu} height="30px" onClick={this.hide_menu}></img>
            </div>

            )
        }






    }else{
                //MENU USUARIO SIN LOGUEAR

        return (
            <div className="Header container-fluid color-nav flex" id="Header">
                <div className='logo'>
                    <img id="imglogo" src={logo} alt='imagenicono' width={"50"}></img>
                </div>
                <Nav className="flex main-menu" id="nav">
                    <Button id="botoninicio" onClick={this.change_page} size="md" variant="info" as={Link} to="/"><h5 className="linkText">Inicio</h5></Button>
                    <Button id="botonmapa" onClick={this.change_page} size="md" variant="info" as={Link} to="/mapa"><h5 className="linkText">Ver mapa</h5></Button>
                    <Button id="botonacercade" onClick={this.change_page} size="md" variant="info" as={Link} to="/acercadenosotros"><h5 className="linkText">Acerca de nosotros</h5></Button>
                    <Button id="botoncontactanos" onClick={this.change_page} size="md" variant="info" as={Link} to="/contactanos"><h5 className="linkText">Contáctanos</h5></Button>
                    <Button size="md" onClick={this.change_page} id="botonlogin" variant="info" as={Link} to="/login">
                        <img src={imagenlogin} alt="imagen login" width="30" />
                    </Button>
                    
                </Nav>
                
               
                <img className='toggle_menu' id="toggle-menu" src={menu} height="30px" onClick={this.hide_menu}></img>
            </div>

        )

    }



    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MainHeader)