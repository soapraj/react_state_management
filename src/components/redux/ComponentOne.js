import React, { Component } from 'react';
import './Components.css';

import { UPDATE_USER_NAME } from '../redux/modules/api/constants';

import { connect } from 'react-redux';

class ComponentOne extends Component {

  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.props.dispatch({
      type: UPDATE_USER_NAME,
      name: this.refs.inputEl.value
    });
  }

  render() {
    return (
      <div className="box">
        <div>C1</div>
        <br/>
        <div>
          <label>Username: </label>
          <input ref="inputEl"
                 type="text"
                 onChange={this.handleInput}
                 value={this.props.user.name}/>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  console.log('GETTING CALLED', state);
  return {user: state.user};
})(ComponentOne);
