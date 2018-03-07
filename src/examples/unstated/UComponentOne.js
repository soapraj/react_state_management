import React, { Component } from 'react';
import './Components.css';
import UserStore from './stores/UserStore';
import { Subscribe } from 'unstated';

class UComponentOne extends Component {
  render() {
    return (
      <Subscribe to={[UserStore]}>
        {user => (
          <div className="box">
            <div>C1</div>
            <br/>
            <div>
              <label>Username: </label>
              <input type="text" onChange={event => {user.setName(event.currentTarget.value);}} value={user.state.name}/>
            </div>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default UComponentOne;
