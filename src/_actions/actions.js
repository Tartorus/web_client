import { userConstants } from '../_constants'
import { request, history } from '../_helpers'


export const userActions = {
  login,
}

function login(username, password) {
  return dispatch => {
      request.post('/c_api/v2/4/login/', {username, password})
          .then(
            user => {
              dispatch(success(user));
              history.push('/');
            },
            error => {console.log(error)}
        );
  };

  function success(user) {return {type: userConstants.LOGIN, user} }
}
