import { api } from './api'

type SignInRequestData = {
  email: string
  password: string
}
type RecoverRequestData = {
  token: string
}

export async function signInRequest({ email, password }: SignInRequestData) {
  try {
    const { data } = await api.post('/auth', {
      email,
      password,
    })
    return data
  } catch (error) {
    return error.response.data
    alert(error.response.data)
  }
}

export async function recoverRequest<T>({
  token,
}: RecoverRequestData): Promise<T> {
  try {
    const { data } = await api.get('/account/recover', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (error) {
    alert(error.response.data)
    return error.response.data
  }
}
