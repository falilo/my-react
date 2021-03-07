import React from 'react';
import logo from './logo.svg';
import './App.css';
import img from './images/falilou-pic.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>My React App</h1>
      <img src={img} alt="profile" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save reload. */}
          My name is FALILOU OURO DJOBO and im going to be matser React!
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
  );

}

export default App;
