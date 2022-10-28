import React from 'react'
import { Route } from 'react-router-dom'
import {Home,Header} from '../components/index'


const BaseRouter = () => {

    //Contiene todas las rutas possibles de la app
    return( 
        <div>
            <Route exact path="/" component={Home}/>
        </div>
    )
}
 
export default BaseRouter