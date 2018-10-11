import { userConstants } from '../_constants'

export function authentication(state = {loginFail: false}, action) {
  switch (action.type) {
    case userConstants.LOGIN:
      return {
        userkey: action.userkey,
        loginFail: false
      };
    case userConstants.LOGIN_FAIL:
      return {loginFail: true};
    default:
      return state
  }
}

export function accounts(state={loaded: false}, action) {
    switch (action.type) {
        case userConstants.ACCOUNTS_LOADED:
            return { loaded: true, accounts: action.accounts };
        default:
            return state;
    }
}
