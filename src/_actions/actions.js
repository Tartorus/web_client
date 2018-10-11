import { userConstants } from '../_constants'
import { request, history } from '../_helpers'


export const userActions = {
  login,
  loadAccounts
}

function login(username, password) {
  return dispatch => {
      request.post('/c_api/v2/4/login/', {username, password})
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

function loadAccounts() {
    return dispatch => {
        request.get('/c_api/v2/4/get_accounts')
            .then(response => {
                if (response.status === 200){
                    response.json()
                        .then(data => { dispatch(success(data.accounts)) })
                }
            });
    }
    function success(accounts) { return {type: userConstants.ACCOUNTS_LOADED, accounts} }
}
