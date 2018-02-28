import React, { Component } from 'react';
import './Components.css';

class ComponentThree extends Component {
  render() {
    return (
      <div className="box">
        <div>C3</div>
        <div>{"Username: "}{this.props.user.name}</div>
      </div>
    );
  }
}

export default ComponentThree;
