import axios from 'axios'
import authHeader from './auth-header'

const API_URL = 'http://localhost:8080/api/test/'

const getPublicContent = (): Promise<string> => {
  return axios.get(API_URL + 'all')
}

const getUserBoard = (): Promise<string> => {
  return axios.get(API_URL + 'user', { headers: authHeader() })
}

const getModeratorBoard = (): Promise<string> => {
  return axios.get(API_URL + 'mod', { headers: authHeader() })
}

const getAdminBoard = (): Promise<string> => {
  return axios.get(API_URL + 'admin', { headers: authHeader() })
}

export { getPublicContent, getUserBoard, getModeratorBoard, getAdminBoard }
