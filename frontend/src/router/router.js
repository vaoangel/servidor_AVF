import React from 'react'
import { Route } from 'react-router-dom'
import AreaUSuario from '../components/area_usuario.component'
import {Home,Header,TestC, Login, Profile} from '../components/index'


const BaseRouter = () => {

    //Contiene todas las rutas possibles de la app
    return( 
        <div>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Login}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/area_usuario" component={AreaUSuario}/>


            

        </div>
    )
}
 
export default BaseRouter