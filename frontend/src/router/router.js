import React from 'react'
import { Route } from 'react-router-dom'
import {Home,Header,TestC, Perfil} from '../components/index'


const BaseRouter = () => {

    //Contiene todas las rutas possibles de la app
    return( 
        <div>
            <Route exact path="/login" component={TestC}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/maquetar_perfil" component={Perfil}/>


        </div>
    )
}
 
export default BaseRouter