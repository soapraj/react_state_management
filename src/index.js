import 'core-js/es6/string';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'ringa-fw-react/dist/ringa-theme-classic.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
