import React, { Component } from 'react';
import './Components.css';
import Button from 'material-ui/Button';

import {FETCH_USER_START, CLEAR_USER_NAME} from '../redux/modules/api/constants';
import {fetchUser} from '../redux/modules/api/actions';

import { connect } from 'react-redux';

class ComponentFour extends Component {

  render() {
    return (
      <div className="box">
        <div>C4</div>
        <Button variant="raised" color="primary" id="btn" onClick={this.clearHandler.bind(this)}>
          Clear
        </Button>
        <br/>
        <Button variant="raised" color="primary" id="btn" onClick={this.fetchHandler.bind(this)}>
          Fetch
        </Button>
      </div>
    );
  }

  clearHandler() {
    this.props.dispatch({
      type: CLEAR_USER_NAME
    });
  }

  fetchHandler() {
    this.props.dispatch(fetchUser());
  }
}

export default connect((state) => ({
  user: state.user
}))(ComponentFour);
