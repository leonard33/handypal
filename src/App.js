import React from 'react';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Home';
import { Routes, Route } from "react-router-dom"
import Searches from './Searches';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
       
         <Route path="/searches" element={ <Searches/> } />
         <Route path="/" element={ <Home/> } />
      
       </Routes>
      <Footer/>
    </div>
  );
}

export default App;
