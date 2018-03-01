import * as CONSTANTS from './constants';

export function fetchUser() {
  return dispatch => {
    dispatch({
      type: CONSTANTS.FETCH_USER_START
    });

    fetch("https://randomuser.me/api/").then(response => response.json()).then(function(result){

      const name = result.results[0].name.title + result.results[0].name.first + result.results[0].name.last

      dispatch({
        type: CONSTANTS.FETCH_USER_SUCCESS,
        user: {
          name
        }
      });
    });
  };
}