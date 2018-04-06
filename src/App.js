import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {TabNavigator, Tab, Theme} from 'ringa-fw-react';

import Introduction from './Introduction';

import NativeDemo from './examples/native/Demo';
import UnstatedDemo from './examples/unstated/Demo';
import ReduxDemo from './examples/redux/Demo';
import RingaDemo from './examples/ringa/Demo';
import MobXDemo from './examples/mobx/Demo';

class App extends Component {

  render() {
    return (
      <Theme>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React State Management Comparison</h1>
          </header>
          <TabNavigator>
            <Tab label="Introduction">
              <Introduction/>
            </Tab>
            <Tab label="Native">
              <NativeDemo/>
            </Tab>
            <Tab label="Unstated">
              <UnstatedDemo/>
            </Tab>
            <Tab label="Redux">
              <ReduxDemo/>
            </Tab>
            <Tab label="Ringa">
              <RingaDemo/>
            </Tab>
            <Tab label="MobX">
              <MobXDemo/>
            </Tab>
          </TabNavigator>
        </div>
      </Theme>
    );
  }
}

export default App;
