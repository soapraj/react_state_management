import React, { Component } from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';
import { Provider } from 'mobx-react';
import User from './models/User';

let userModel = new User();

class Demo extends Component {
  render() {
      return (
        <Provider user={userModel}>
          <div className="unstated container left">
            <div>{ 'MobX' }</div>
            <div className="outerbox left">
              <ComponentOne />
              <ComponentTwo />
            </div>
            <div className="outerbox left">
            <ComponentThree />
            <ComponentFour />
            </div>
          </div>
        </Provider>
      );
  }
}

export default Demo;
