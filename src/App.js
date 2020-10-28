import React from "react";
import './styles/App.scss';
import {BrowserRouter as Router} from 'react-router-dom';//BrowserRouter jako Router
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
//import img from './img/img.jpg';

function App() {
  return (
    <Router>
      <div className="global">
        <Header/>
        <Content/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
