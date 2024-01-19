import React from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Home from './components/Home';
// import Navbar from './components/Navbar';
// import Team from './components/Team';
// import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {
  return (

        <div>
          <Header />
          <Home />
          <Footer />
        </div>  
   );
}

export default App;
