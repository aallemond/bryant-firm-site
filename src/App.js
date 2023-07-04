import React from 'react';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Team from './components/Team';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer';


// const client = new ApolloClient({
//   uri: '/graphql',
//   cache: new InMemoryCache(),
// });

function App() {
  return (
    <div>
   < Header />   
   < Navbar />   
   < Home />
   </div>
     
   );
}

export default App;
