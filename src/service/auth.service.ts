import axios from 'axios'

const API_URL = 'http://localhost:8080/api/auth/'

interface JwtResponse {
  id: number
  token: string
  username: string
  email: string
  roles: string[]
}

interface MessageResponse {
  message: string
}

const register = (username: string, email: string, password: string): Promise<MessageResponse> => {
  return axios.post(API_URL + 'signup', {
    username,
    email,
    password,
  })
}

const login = async (username: string, password: string): Promise<JwtResponse> => {
  return axios
    .post(
      API_URL + 'signin',
      {
        username,
        password,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    )
    .then((response) => {
      response.data.accessToken && localStorage.setItem('user', JSON.stringify(response.data))
      return response.data
    })
}

const logout = (): void => {
  localStorage.removeItem('user')
}

export { register, login, logout }
