import React, { Component } from 'react';
import UComponentOne from './UComponentOne';
import UComponentTwo from './UComponentTwo';
import UComponentThree from './UComponentThree';
import UComponentFour from './UComponentFour';
import { Provider } from 'unstated';

class Demo extends Component {
  render() {
      return (
        <Provider>
          <div className="container left">
            <div>{ 'Unstated' }</div>
            <div className="outerbox left">
              <UComponentOne />
              <UComponentTwo />
            </div>
            <div className="outerbox left">
              <UComponentThree />
              <UComponentFour />
            </div>
          </div>
        </Provider>
      );
  }
}

export default Demo;
