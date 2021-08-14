import axios from 'axios'
import { parseCookies } from 'nookies'

export function getApiClient(ctx?: any) {
  const { 'sirus.session': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:3333/v1',
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}
