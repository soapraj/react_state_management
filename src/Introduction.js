import React, { Component } from 'react';

import {Markdown} from 'ringa-fw-react';

import introduction from './introduction.md';

class Introduction extends Component {

  render() {
    return <Markdown markdown={introduction} />;
  }
}

export default Introduction;
