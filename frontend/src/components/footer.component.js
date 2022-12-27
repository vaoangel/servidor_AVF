import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import UselocalStorage from "../hooks/localStorage.hook"
import contra  from '../assets/img/contra.png'




class MainFooter extends React.Component{

    constructor(props){
        super(props);
     
    }

     

    render(){

        
        return(
            <div>


            {/* Site footer */}
            <footer className="site-footer">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12 col-md-6">
                   <u>
                   <h6>OFFICE</h6>
                    </u> 
                    <p className="text-justify"><i>EPSG GANDIA, 46730 </i>Gandia,Valencia,España</p>
                  </div>
                  <div className="col-xs-6 col-md-3">
                  <u>
                   <h6>LINKS</h6>
                    </u> 
                    <ul className="footer-links">
                      <li><a href="">Acerca de nosotros</a></li>
                      
                      <li>
                        <Link to="/medidas_oficiales">MEDIDAS OFICIALES</Link>
                        
                        <a href="/medidas_oficiales">Estacion de medidas</a></li>
                    </ul>
                  </div>
                  <div className="col-xs-6 col-md-3">
                  <u>
                   <h6>CONTÁCTANOS</h6>
                    </u> 
                    <ul className="footer-links">
                      <li><a href="">trackpollution@gmail.com</a></li>
                      <li><a href="">+34 601748596</a></li>
                   
                    </ul>
                  </div>
                </div>
                <hr />
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-sm-6 col-xs-12">
                    <p className="copyright-text">Copyright © 2022 All Rights Reserved by  
                      <a href="#"> trackpollution</a>.
                    </p>
                  </div>
                  <div className="col-md-4 col-sm-6 col-xs-12">
                    <ul className="social-icons">
                      <a className="facebook" href="#"><i className="fa fa-facebook" /></a>
                      <a className="twitter" href="#"><i className="fa fa-facebook" /></a>
                      <a className="linkedin" href="#"><i className="fa fa-facebook" /></a>
  
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
            </div>
        )
    }
}


export default MainFooter