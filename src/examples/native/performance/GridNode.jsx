import React, {Component} from 'react';

import classnames from 'classnames';

export default class GridNode extends Component {
  render() {
    let cn = classnames('grid', 'cell', {
      highlight: this.props.value
    });

    return <div className={cn} />;
  }
}