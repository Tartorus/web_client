import { userConstants, urlsConstants} from '../../_constants'
import { request, history } from '../../_helpers'


export function login(username, password) {
  return dispatch => {
      request.post(urlsConstants.login, {username, password})
          .then(
            response => {
              if (response.status === 200){
                response.json().then(data => {
                      let key = data.key;
                      dispatch(success(key))
                      history.push('/');
                    });
              }

              else if (response.status === 400){
                response.json().then(data => {
                  dispatch(failure());
                })
              };
            });
  };

  function success(key) {return {type: userConstants.LOGIN, userkey: key} }
  function failure() {return {type: userConstants.LOGIN_FAIL} }
}
