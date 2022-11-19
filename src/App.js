import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/assets/styles/baselayout.css';

import Home from './components/Home';
import Nav from './components/sub-components/Nav';
import About from './components/About';
import Favorites from './components/Favorites';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';


function App() {
  return <>
    <Router>
      <Nav />
      <br/>
      <Routes>
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} /> 
        <Route path='favorite' element={<Favorites />} /> 
      </Routes>
    </Router>
    
  </>;
}

export default App;
