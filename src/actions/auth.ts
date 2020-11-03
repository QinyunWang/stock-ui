import { CustomizedAction, LOGIN_SUCCESS, LOGOUT } from './types'

const loginSuccessAction = (username: string): CustomizedAction<string> => ({
  type: LOGIN_SUCCESS,
  payload: username,
})

const logoutAction = (): CustomizedAction<undefined> => ({
  type: LOGOUT,
})

export { loginSuccessAction, logoutAction }
