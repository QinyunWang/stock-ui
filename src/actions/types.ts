export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export interface Action<T> {
  type: string
  payload?: T
}
