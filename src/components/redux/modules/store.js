import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import apiReducer from './api/reducer';

export default createStore(
  apiReducer,
  {
    user: {
      name: ''
    }
  },
  applyMiddleware(thunk)
);
