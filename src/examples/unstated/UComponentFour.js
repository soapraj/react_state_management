import React, { Component } from 'react';
import './Components.css';
import Button from 'material-ui/Button';
import UserStore from './stores/UserStore';
import { Subscribe } from 'unstated';

class UComponentFour extends Component {

  render() {
    return (
      <Subscribe to={[UserStore]}>
        {user => (
          <div className="box">
            <div>C4</div>
            <Button variant="raised" color="primary" id="btn" onClick={user.clearStore}>
              Clear
            </Button>
            <br/>
            <Button variant="raised" color="primary" id="btn" onClick={user.fetchStore}>
              Fetch
            </Button>
          </div>
        )}
      </Subscribe>
    );
  }
}

export default UComponentFour;
