import axios from 'axios'
import { parseCookies } from 'nookies'

export function getApiClient(ctx?: any) {
  const { 'sirus.session': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'https://f00fb52f6503.ngrok.io/v1',
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}
