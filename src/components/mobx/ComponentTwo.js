import React, { Component } from 'react';
import './Components.css';
import { observer } from 'mobx-react';

const ComponentTwo = observer(['user'], class ComponentTwo extends Component {
  render() {
    return (
      <div className="box">
        <div>C2</div>
        <div>Username: {this.props.user.name}</div>
      </div>
    );
  }
});

export default ComponentTwo;
