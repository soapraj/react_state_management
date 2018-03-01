import React, { Component } from 'react';
import './Components.css';
import UserStore from './stores/UserStore';
import { Subscribe, Provider } from 'unstated';

class UComponentThree extends Component {
  render() {
    return (
      <Provider>
        <Subscribe to={[UserStore]}>
          {user => (
            <div className="box">
              <div>C3</div>
              <div>{"Username: "}{user.state.name}</div>
            </div>
          )}
        </Subscribe>
      </Provider>
    );
  }
}

export default UComponentThree;
