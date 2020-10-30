import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'

interface AuthHeader {
  Authorization?: string
}

const authHeader = (): AuthHeader =>
  pipe(
    localStorage.getItem('user'),
    O.fromNullable,
    O.map((user) => JSON.parse(user).accessToken),
    O.fold(
      () => ({}),
      (accessToken) => ({ Authorization: 'Bearer ' + accessToken })
    )
  )

export default authHeader
