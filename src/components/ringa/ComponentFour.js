import React, { Component } from 'react';
import './Components.css';
import Button from 'material-ui/Button';

import {dispatch} from 'ringa';
import {depend, dependency} from 'react-ringa/dist/react-ringa';
import {UserModel} from "./Demo";

class ComponentFour extends Component {
  constructor() {
    super();

    this.state = {
      userModel: {}
    };

    depend(this, [dependency(UserModel, 'userName')]);
  }

  render() {
    return (
      <div className="box" ref="root">
        <div>C4</div>
        <Button variant="raised" color="primary" id="btn" onClick={this.clearHandler.bind(this)}>
          Clear
        </Button>
        <br/>
        <Button variant="raised" color="primary" id="btn" onClick={this.fetchHandler.bind(this)}>
          Fetch
        </Button>
      </div>
    );
  }

  clearHandler() {
    this.state.userModel.userName = '';
  }

  fetchHandler() {
    dispatch('fetchUser', {}, this.refs.root);
  }
}

export default ComponentFour;
