
import React from 'react';
import {  Link } from 'react-router-dom';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import UselocalStorage from "../hooks/localStorage.hook"
import contra  from '../assets/img/contra.png'
import '../assets/files/css/bootstrap-flex.css'
import '../assets/files/css/style.css'


/*
import '../assets/files/js/bootstrap.min.js'
import '../assets/files/js/smooth-scroll.min.js'
*/



class LandingC extends React.Component{

    constructor(props){
        super(props);
     
    }

     

    render(){

        
        return(
            <div>


<div>
        {/* Required meta tags always come first */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>SmoothScroll</title>
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="css/bootstrap-flex.css" />
        <link rel="stylesheet" href="css/style.css" />
        {/* Scroll */}
        {/* MENÚ */}
    
        {/* FIN MENU */}
        {/* SECCIÓN 1 */}
        <div className="container-fluid" data-testid="img-landing">
          <div className="row flex-items-xs-center slider-1 flex-items-xs-middle" id="sec-1">
            <div className="row">
              <div className="col-xs-12"><h1></h1></div>
              
            </div>
          </div>
        </div>
        {/* FIN SECCIÓN */}
        {/* SECCIÓN 2 */}
        <div className="container-fluid">
          <div className="row flex-items-xs-center slider-2 flex-items-xs-middle" id="sec-2">
            <div className="row">
              
            </div>
          </div>
        </div>
        {/* FIN SECCIÓN */}
        {/* SECCIÓN 3 */}
        <div className="container-fluid">
          <div className="row flex-items-xs-center slider-3 flex-items-xs-middle" id="sec-3">
            <div className="row">
   
            </div>
          </div>
        </div>
        {/* FIN SECCIÓN */}
        {/* SECCIÓN 4 */}
        <div className="container-fluid">
          <div className="row flex-items-xs-center slider-4 flex-items-xs-middle" id="sec-4">
            <div className="row">
          
            </div>
          </div>
        </div>
        {/* FIN SECCIÓN */}


         {/* SECCIÓN 5 */}
         <div className="container-fluid">
          <div className="row flex-items-xs-center slider-5 flex-items-xs-middle" id="sec-5">
            <div className="row">
          
            </div>
          </div>
        </div>
        {/* FIN SECCIÓN */}

   {/* SECCIÓN 6 */}
   <div className="container-fluid">
          <div className="row flex-items-xs-center slider-6 flex-items-xs-middle" id="sec-6">
            <div className="row">
          
            </div>
          </div>
        </div>

        {/* FOOTER */}
     
        {/* FIN FOOTER */}
        {/* jQuery first, then Tether, then Bootstrap JS. */}
      </div>
            </div>
        )
    }
}


export default LandingC