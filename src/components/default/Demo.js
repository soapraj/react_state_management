import React, { Component } from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';
import ComponentFour from './ComponentFour';

class Demo extends Component {
  state = {
    name: '',
    error: null,
    loading: false
  }

  updateStore = name => {
    this.setState({
      name: name
    });
  }

  clearStore = () => {
    this.setState({
      name: ''
    })
  }

  fetchStore = () => {
    this.setState({
      loading: true
    })

    let self = this;
    fetch("https://randomuser.me/api/") .then(response => response.json()).then(function(result){

      const name = result.results[0].name.title + result.results[0].name.first + result.results[0].name.last
      self.setState({
        name: name,
        loading: false
      });
    });
  }

  render() {
      return (
        <div className="container left">
          <div className="outerbox left">
            <ComponentOne updateStore={this.updateStore} user={this.state}/>
            <ComponentTwo user={this.state}/>
          </div>
          <div className="outerbox left">
            <ComponentThree user={this.state}/>
            <ComponentFour clearStore={this.clearStore} fetchStore={this.fetchStore}/>
          </div>
        </div>
      );
  }
}

export default Demo;
