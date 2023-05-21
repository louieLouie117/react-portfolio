import './App.css';
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import Documentation from './views/Documentation';
// import {Router, Route } from "preact-router";


import React from "react"
import { Router } from "@reach/router"
import EasyAlgos from './components/Algorithms/EasyAlgos';
import AfterPayment from './components/LandingPage/AfterPayment';



function App() {
  
 

  return (
    <div className="App">
      <Router>
        <LandingPage path="/"/>
        <Dashboard path="Dashboard"/>
        <Documentation path="doc"/>
        <EasyAlgos path='easy-algorithms'/>
        <AfterPayment path="Payment"/>
      </Router>

     
    </div>
  );
}

export default App;
