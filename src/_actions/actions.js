import { userConstants } from '../_constants'
import { request, history } from '../_helpers'


export const userActions = {
  login,
}

function login(username, password) {
  return dispatch => {
      request.post('/c_api/v2/4/login/', {username, password})
          .then(
            response => {
              if (response.status === 200){
                response.json().then(data => {
                      let {key} = data;
                      dispatch(success({username, key}))
                      history.push('/');
                    });
              }
              else {
                response.json().then(data => {
                  dispatch(failure());
                })
              };
            });
  };

  function success(user) {return {type: userConstants.LOGIN, user} }
  function failure() {return {type: userConstants.LOGIN_FAIL} }
}
