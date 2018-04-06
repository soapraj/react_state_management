import React, { Component } from 'react';
import './Components.css';

import Grid from './performance/Grid';

import {Model, Controller} from 'ringa';
import {attach} from 'react-ringa';

import {runPerformanceTestOnModel, stopPerformanceTest} from '../../shared/performanceRunner';

export class GridModel extends Model {
  constructor() {
    super();

    this.addProperty('resolution', 50);

    this.addProperty('intervalKey', undefined);
    this.addProperty('frame', 0);

    for (let x = 0; x < this.resolution; x++) {
      for (let y = 0; y < this.resolution; y++) {
        this.addProperty(`${x}_${y}`, true);
      }
    }
  }
}

class GridController extends Controller {
  constructor() {
    super();

    this.addModel(new GridModel());
  }
}

class ComponentThree extends Component {
  constructor() {
    super();

    attach(this, this.controller = new GridController());

    this.model = this.controller.injections.gridModel;
  }

  render() {
    let model = this.controller.injections.gridModel;

    return (
      <div className="box">
        <div>C3</div>
        <button onClick={() => {this.startStop_onClickHandler()}}>{model.intervalKey ? "Stop" : "Start"}</button>
        <Grid />
      </div>
    );
  }

  startStop_onClickHandler() {
    if (this.model.intervalKey) {
      stopPerformanceTest(this.model);
    } else {
      runPerformanceTestOnModel(this.model);
    }

    this.forceUpdate();
  }
}

export default ComponentThree;
