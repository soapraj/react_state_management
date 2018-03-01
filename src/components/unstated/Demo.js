import React, { Component } from 'react';
import UComponentOne from './UComponentOne';
import UComponentTwo from './UComponentTwo';
import UComponentThree from './UComponentThree';
import UComponentFour from './UComponentFour';

class Demo extends Component {
  render() {
      return (
        <div className="container left">
          <div>{ 'Native React' }</div>
          <div className="outerbox left">
            <UComponentOne />
            <UComponentTwo />
          </div>
          <div className="outerbox left">
            <UComponentThree />
            <UComponentFour />
          </div>
        </div>
      );
  }
}

export default Demo;
