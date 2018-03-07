import React, { Component } from 'react';
import './Components.css';
import Button from 'material-ui/Button';

class ComponentFour extends Component {

  render() {
    return (
      <div className="box">
        <div>C4</div>
        <Button variant="raised" color="primary" id="btn" onClick={this.props.clearStore}>
          Clear
        </Button>
        <br/>
        <Button variant="raised" color="primary" id="btn" onClick={this.props.fetchStore}>
          Fetch
        </Button>
      </div>
    );
  }
}

export default ComponentFour;
