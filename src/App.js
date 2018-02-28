import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/default/Demo';
import UnstatedDemo from './components/unstated/Demo';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trying Unstated library for state management</h1>
        </header>
        <Demo/>
        <UnstatedDemo/>
      </div>
    );
  }
}

export default App;
