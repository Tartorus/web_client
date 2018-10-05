import { userConstants } from '../_constants'

export function authentication(state = {}, action) {
  switch (action.type) {
    case userConstants.LOGIN:
      return {
        user: action.user
      };
    default:
      return state
  }
}
