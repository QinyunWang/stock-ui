import { Action } from 'redux'

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'

export interface CustomizedAction<T> extends Action<string> {
  payload?: T
}
