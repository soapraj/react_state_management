import React, { Component } from 'react';
import './Components.css';

import {depend, dependency} from 'react-ringa/dist/react-ringa';
import {UserModel} from "./Demo";

class ComponentThree extends Component {
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
        <div>C3</div>
        <div>{"Username: "}{this.state.userModel.userName}</div>
      </div>
    );
  }
}

export default ComponentThree;
