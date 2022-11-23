import React from 'react'
import { Route } from 'react-router-dom'
import AreaUSuario from '../components/area_usuario.component'
import {Home,Header,TestC, Login, Profile, AdminPageC, AdminPage2C, UserRegisterC, UserEditC,LandingC} from '../components/index'


const BaseRouter = () => {

    //Contiene todas las rutas possibles de la app
    return( 
        <div>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/area_usuario" component={AreaUSuario}/>
            <Route exact path="/admin_page" component={AdminPageC}/>
            <Route exact path="/admin_page2" component={AdminPage2C}/>
            <Route exact path="/user_register" component={UserRegisterC}/>
            <Route exact path="/user_edit" component={UserEditC}/>
            <Route exact path="/landing" component={LandingC}/>

            

        </div>
    )
}
 
export default BaseRouter