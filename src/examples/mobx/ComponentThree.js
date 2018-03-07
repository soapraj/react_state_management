import React, { Component } from 'react';
import './Components.css';
import { observer } from 'mobx-react';

const ComponentThree = observer(['user'], class ComponentThree extends Component {
  render() {
    return (
      <div className="box">
        <div>C3</div>
        <div>{"Username: "}{this.props.user.name}</div>
      </div>
    );
  }
});

export default ComponentThree;
