import React, { Component } from 'react';
import './Components.css';

import Grid from './performance/Grid';

import {runPerformanceTestOnModel, stopPerformanceTest} from '../../shared/performanceRunner';

class ComponentThree extends Component {
  constructor() {
    super();

    this.state = {
      model: {}
    };
  }

  render() {
    let {model} = this.state;

    return (
      <div className="box">
        <div>C3</div>
        <button onClick={() => {this.startStop_onClickHandler()}}>{model.intervalKey ? "Stop" : "Start"}</button>
        <Grid model={model} frame={model.frame} />
      </div>
    );
  }

  startStop_onClickHandler() {
    if (this.state.model.intervalKey) {
      stopPerformanceTest(this.state.model);
    } else {
      runPerformanceTestOnModel(this.state.model, undefined, undefined, elapsed => {
        this.forceUpdate();
      });
    }

    this.forceUpdate();
  }
}

export default ComponentThree;
