import React from 'react'
import { Route } from 'react-router-dom'
import {Home,Header,TestC, Login, Profile} from '../components/index'


const BaseRouter = () => {

    //Contiene todas las rutas possibles de la app
    return( 
        <div>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/profile" component={Profile}/>

            

        </div>
    )
}
 
export default BaseRouter