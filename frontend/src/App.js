import logo from './logo.svg';
import './App.css';

import { HashRouter as Router } from 'react-router-dom';
import { Footer, Header } from './components';
import BaseRouter from './router/router';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
        <BaseRouter>
        </BaseRouter>

        <Footer></Footer>
      </Router>
     
      
    </div>
  );
}

export default App;
