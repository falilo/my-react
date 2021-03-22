import React, {Component} from 'react';
import logo from './images/falilou-pic.jpg';
import './App.css';
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
        {<img src={logo} className="App-logo" alt="logo" /> }
        <p>
           Edit <code>src/App.js</code> and save reload. 
        </p>
        <herf> https://github.com/falilo;
        className="App-link"
        herf="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        "Check Me Out!"
        </herf>
      </header> 
      <Welcome /> 
    </div>
  )

}

export default App;
