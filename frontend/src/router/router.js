import React from 'react'
import { Route } from 'react-router-dom'
import AreaUSuario from '../components/area_usuario.component'
import datosOficiales from '../components/datos_oficiales_component'

import Contactanos from '../components/contact_us.component'
import {Home,Header,TestC, Login, Profile, AdminPageC, AdminPage2C, UserRegisterC, UserEditC,LandingC,ContactanosC, RecoverPassC, ChangePassC, MapaC, AdminNodesPageC} from '../components/index'



const BaseRouter = () => {

    //Contiene todas las rutas possibles de la app
    return( 
        <div>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={LandingC}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/area_usuario" component={AreaUSuario}/>
            <Route exact path="/admin_page" component={AdminPageC}/>
            <Route exact path="/admin_page2:param" component={AdminPage2C}/>
            <Route exact path="/user_register:param" component={UserRegisterC}/>
            <Route exact path="/user_edit" component={UserEditC}/>
            <Route exact path="/landing" component={LandingC}/>
            <Route exact path="/contactanos" component={ContactanosC}/>
            <Route exact path="/recover_pass" component={RecoverPassC}/>
            <Route exact path="/change_pass" component={ChangePassC}/>
            <Route exact path="/mapa" component={MapaC}/>
            <Route exact path="/medidas_oficiales" component={datosOficiales}/>
            <Route exact path="/admin_nodes_page" component={AdminNodesPageC}/>
        </div>
    )
}
 
export default BaseRouter