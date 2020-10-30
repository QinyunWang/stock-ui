interface AuthHeader {
  Authorization?: string
}

const authHeader = (): AuthHeader => {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user?.accessToken) {
    return { Authorization: 'Bearer ' + user.accessToken }
  } else {
    return {}
  }
}

export default authHeader
