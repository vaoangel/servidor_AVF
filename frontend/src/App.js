import logo from './logo.svg';
import './App.css';

import { HashRouter as Router } from 'react-router-dom';
import { Header } from './components';
import BaseRouter from './router/router';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <BaseRouter>
        </BaseRouter>

        
      </Router>
     
    
    </div>
  );
}

export default App;
