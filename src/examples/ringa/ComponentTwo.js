import React, { Component } from 'react';
import './Components.css';

import {depend, dependency} from 'react-ringa/dist/react-ringa';
import {UserModel} from "./Demo";

class ComponentTwo extends Component {
  constructor() {
    super();

    this.state = {
      userModel: {}
    };

    depend(this, [dependency(UserModel, 'userName')]);
  }

  render() {
    return (
      <div className="box">
        <div>C2</div>
        <div>Username: {this.state.userModel.userName}</div>
      </div>
    );
  }
}

export default ComponentTwo;
