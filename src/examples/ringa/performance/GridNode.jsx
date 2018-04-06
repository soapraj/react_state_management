import React, {Component} from 'react';

import classnames from 'classnames';

import {GridModel} from "../ComponentThree";

import {depend, dependency} from 'react-ringa';

export default class GridNode extends Component {
  constructor(props) {
    super(props);

    depend(this, dependency(GridModel, props.name))
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState[this.props.name] !== this.state[this.props.name]) {
      return true;
    }

    return false;
  }

  render() {
    let highlight = this.state[this.props.name];

    let cn = classnames('grid cell', {
      highlight
    });

    return <div className={cn} />;
  }
}