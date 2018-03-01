import React, { Component } from 'react';
import './Components.css';

import { connect } from 'react-redux';

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

export default connect((state) => ({
  user: state.user
}))(ComponentThree);
