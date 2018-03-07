import React, { Component } from 'react';
import './Components.css';
import Button from 'material-ui/Button';
import { observer } from 'mobx-react';

const ComponentFour = observer(['user'], class ComponentFour extends Component {

  render() {
    return (
      <div className="box">
        <div>C4</div>
        <Button variant="raised" color="primary" id="btn" onClick={this.props.user.clearStore}>
          Clear
        </Button>
        <br/>
        <Button variant="raised" color="primary" id="btn" onClick={this.props.user.fetchStore}>
          Fetch
        </Button>
      </div>
    );
  }
});

export default ComponentFour;
