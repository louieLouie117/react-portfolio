import './App.css';
import Dashboard from './views/Dashboard';
import LandingPage from './views/LandingPage';
import Documentation from './views/Documentation';


import React from "react"
import { Router } from "@reach/router"



function App() {


  return (
    <div className="App">
      <Router>
        <LandingPage path="/"/>
        <Dashboard path="Dashboard"/>
        <Documentation path="doc"/>
      </Router>

     
    </div>
  );
}

export default App;
