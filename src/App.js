import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TabNavigator, Tab} from 'ringa-fw-react';

import Demo from './examples/native/Demo';
import UnstatedDemo from './examples/unstated/Demo';
import ReduxDemo from './examples/redux/Demo';
import RingaDemo from './examples/ringa/Demo';
import MobXDemo from './examples/mobx/Demo';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Trying different libraries for state management</h1>
        </header>
        <TabNavigator>
          <Tab>
            <Demo/>
          </Tab>
          <Tab>
            <UnstatedDemo/>
          </Tab>
          <Tab>
            <ReduxDemo/>
          </Tab>
          <Tab>
            <RingaDemo/>
          </Tab>
          <Tab>
            <MobXDemo/>
          </Tab>
        </TabNavigator>
      </div>
    );
  }
}

export default App;
