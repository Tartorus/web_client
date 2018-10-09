import { userConstants } from '../_constants'

export function authentication(state = {loginFail: false}, action) {
  switch (action.type) {
    case userConstants.LOGIN:
      return {
        user: action.user,
        loginFail: false
      };
    case userConstants.LOGIN_FAIL:
      return {loginFail: true};
    default:
      return state
  }
}
