import React, {Component} from 'react';

import GridNode from './GridNode';
import {GridModel} from '../ComponentThree';

import {depend, dependency} from 'react-ringa';

export default class Grid extends Component {
  constructor() {
    super();
  }

  render() {
    let a = [];

    for (let i = 0; i < 50; i++)
      a[i] = true;

    return <div className="grid">
      {a.map((_, x) => <div className="grid row" key={x}>
        {a.map((_, y) => {
          let name = `${x}_${y}`;
          return <GridNode key={name} name={name} />;
        })}
      </div>)}
    </div>;
  }
}