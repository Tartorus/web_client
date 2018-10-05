import { userConstants } from './_constants'

export const userActions = {
  login,
}

function login() {
  return {type: userConstants.LOGIN, user: {name: 'USER'}}
}
