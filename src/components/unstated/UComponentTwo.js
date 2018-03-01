import React, { Component } from 'react';
import './Components.css';
import UserStore from './stores/UserStore';
import { Subscribe } from 'unstated';

class UComponentTwo extends Component {
  render() {
    return (
      <Subscribe to={[UserStore]}>
        {user => (
          <div className="box">
            <div>C2</div>
            <div>Username: {user.state.name}</div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default UComponentTwo;
