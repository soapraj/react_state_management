import * as CONSTANTS from './constants';

const apiReducer = (state = 0, action) => {
  console.log(action.type, action, state);
  switch (action.type) {
    case CONSTANTS.CLEAR_USER_NAME:
      state.user = {name: ''};
      break;
    case CONSTANTS.UPDATE_USER_NAME:
      state.user = {...state.user, name: action.name};
      break;
    case CONSTANTS.FETCH_USER_START:
      state.user.loading = true;
      break;
    case CONSTANTS.FETCH_USER_SUCCESS:
      state.user = action.user;
      state.user.loading = false;
  }

  return {...state};
};

export default apiReducer;