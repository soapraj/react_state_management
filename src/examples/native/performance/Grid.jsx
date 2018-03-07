import React, {Component} from 'react';

import './Grid.css';

import GridNode from './GridNode';

export default class Grid extends Component {
  constructor() {
    super();
  }

  render() {
    let {model, frame} = this.props;

    let a = [];

    for (let i = 0; i < model.resolution; i++)
      a[i] = true;

    return <div className="grid">
      <div>{frame}</div>
      {a.map((_, x) => <div className="grid row" key={x}>
        {a.map((_, y) => {
          let name = `${x}_${y}`;
          return <GridNode value={model[name]} key={name} />;
        })}
      </div>)}
    </div>;
  }
}