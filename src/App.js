import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (

        <div>
          <Header />
          <Navbar />
          <Routes>
            <Route 
              path='/'
              element= {<Home />}
            />
            <Route
              path='Team'
              element= {<Team />}
            />
            <Route
              path='Contact'
              element= {<Contact />}
            />
          </Routes>
          <Footer />
        </div>  
   );
}

export default App;
