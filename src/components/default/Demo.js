import React, { Component } from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';

class Demo extends Component {
  state = {
    name: '',
    error: null
  }

  updateStore = name => {
    this.setState({
      name: name,
      error: null
    });
  }

  render() {
      return (
        <div>
          <div className="outerbox left">
            <ComponentOne updateStore={this.updateStore}/>
            <ComponentTwo user={this.state}/>
          </div>
          <div className="outerbox left">
            <ComponentThree user={this.state}/>
            <ComponentFour />
          </div>
        </div>
      );
  }
}

export default Demo;
