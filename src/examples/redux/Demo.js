import React, { Component } from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';

import { Provider } from 'react-redux';

import store from './modules/store';

class Demo extends Component {

  render() {
      return (
        <Provider store={store}>
          <div className="unstated container left">
            <div>{ 'Redux' }</div>
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
