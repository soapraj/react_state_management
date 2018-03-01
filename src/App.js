import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './components/native/Demo';
import UnstatedDemo from './components/unstated/Demo';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trying different libraries for state management</h1>
        </header>
        <Demo/>
        <UnstatedDemo/>
      </div>
    );
  }
}

export default App;
