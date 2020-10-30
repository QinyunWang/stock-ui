import { CustomizedAction, LOGIN_SUCCESS, LOGOUT } from './types'

const loginSuccessAction = (): CustomizedAction<undefined> => ({
  type: LOGIN_SUCCESS,
})

const logoutAction = (): CustomizedAction<undefined> => ({
  type: LOGOUT,
})

export { loginSuccessAction, logoutAction }
