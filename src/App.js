import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import img from './images/falilou-pic.jpg'
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <img src={img} className="photo" alt="profile" />
      <Welcome />
      <header className="App-header"> 
        {<img src={logo} className="App-logo" alt="logo" /> }
        <p>
           Edit <code>src/App.js</code> and save reload. 
         {/* My name is FALILOU OURO DJOBO and im going to be matser React! */}
        </p>
        <a
        className="App-link"
        herf="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>  
    </div>
  )

}

export default App;
