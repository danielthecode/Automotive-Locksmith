import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer';

ReactDOM.render(
  <Router>
    <Header/>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/home" element={<App/>}/>
    </Routes>
    <Footer/>
  </Router>,
  document.getElementById('root')
);
