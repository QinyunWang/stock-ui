import { Action, LOGIN_SUCCESS, LOGOUT } from './types'

const loginSuccessAction = (): Action<undefined> => ({
  type: LOGIN_SUCCESS,
})

const logoutAction = (): Action<undefined> => ({
  type: LOGOUT,
})

export { loginSuccessAction, logoutAction }
