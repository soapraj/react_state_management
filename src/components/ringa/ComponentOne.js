import React, { Component } from 'react';
import './Components.css';

import {depend, dependency} from 'react-ringa/dist/react-ringa';
import {UserModel} from "./Demo";

class ComponentOne extends Component {

  constructor() {
    super();

    this.state = {
      userModel: {}
    };

    depend(this, [dependency(UserModel, 'userName')]);

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.state.userModel.userName = e.target.value;
  }

  render() {
    return (
      <div className="box">
        <div>C1</div>
        <br/>
        <div>
          <label>Username: </label>
          <input type="text" onChange={this.handleInput} value={this.state.userModel.userName || ''}/>
        </div>
      </div>
    );
  }
}

export default ComponentOne;
