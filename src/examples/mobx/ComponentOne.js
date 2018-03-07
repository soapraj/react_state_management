import React, { Component } from 'react';
import './Components.css';
import { observer } from 'mobx-react';

const ComponentOne = observer(['user'], class ComponentOne extends Component {

  constructor() {
    super();
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput(e) {
    this.props.user.updateStore(this.inputEl.value);
  }

  render() {
    return (
      <div className="box">
        <div>C1</div>
        <br/>
        <div>
          <label>Username: </label>
          <input ref={el => this.inputEl = el} type="text" onChange={this.handleInput} value={this.props.user.name}/>
        </div>
      </div>
    );
  }
});

export default ComponentOne;
