import React, { Component } from 'react';
import './Components.css';

class ComponentTwo extends Component {
  render() {
    console.log("Component Two");
    console.log(this.props);
    return (
      <div className="box">
        <div>C2</div>
        <div>Username: {this.props.user.name}</div>
      </div>
    );
  }
}

export default ComponentTwo;
