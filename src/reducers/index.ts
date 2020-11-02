import { AnyAction, Reducer } from 'redux'
import { AppState } from '../types/AppStateContext'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import { LOGIN_SUCCESS, LOGOUT } from '../actions/types'

const initialState: AppState = pipe(
  localStorage.getItem('user'),
  O.fromNullable,
  O.map((user) => JSON.parse(user).username),
  O.fold(
    (): AppState => ({ user: { isLoggedIn: false } }),
    (username): AppState => ({ user: { isLoggedIn: true, username } })
  )
)

const reducer: Reducer<AppState, AnyAction> = (state: AppState | undefined, action: AnyAction): AppState => {
  if (!state) {
    return initialState
  }

  switch (action.type) {
    case LOGIN_SUCCESS:
      return setLoggedIn(state, action.payload as string)
    case LOGOUT:
      return setLoggedOut(state)
    default:
      return state
  }
}

const setLoggedIn = (state: AppState, username: string): AppState => ({
  ...state,
  user: {
    isLoggedIn: true,
    username,
  },
})

const setLoggedOut = (state: AppState): AppState => ({
  ...state,
  user: {
    isLoggedIn: false,
    username: undefined,
  },
})

export default reducer
