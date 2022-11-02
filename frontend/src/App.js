import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import { HashRouter as Router } from 'react-router-dom';
import store from './store/store'
import Header from './components/main_header.component'
import BaseRouter from './router/router';

function App() {
  return (
    // El provider se encarga de cargar el store para toda la app
       <Provider store = {store}> 
       {/*Base router contiene todas las rutas de la app */}
        <Router>
        <Header/>
        <BaseRouter/>
        </Router>
      </Provider>
  );
}

export default App;