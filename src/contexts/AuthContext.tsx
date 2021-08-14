import { createContext, useEffect, useState } from 'react'
import { recoverRequest, signInRequest } from 'services/auth'
import { setCookie, parseCookies } from 'nookies'
import Router from 'next/router'
import { api } from 'services/api'

type User = {
  id: number
  name: string
  email: string
  active: boolean
  createdAt: Date
  updatedAt: Date
}
type SignInRequestData = {
  email: string
  password: string
}
type AuthContextType = {
  isAuthenticated: boolean
  user: User
  signIn: (data: SignInRequestData) => Promise<{ error: string }>
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)
  const isAuthenticated = !!user

  useEffect(() => {
    const { 'sirus.session': token } = parseCookies()
    if (token) {
      recoverRequest<User>({ token }).then((user) => {
        if (!user.id) {
          Router.push('/auth')
          return
        }
        api.defaults.headers['Authorization'] = `Bearer ${token}`
        setUser(user)
      })
    }
  }, [])

  async function signIn({ email, password }: SignInRequestData) {
    const response = await signInRequest({
      email,
      password,
    })

    if (response.token) {
      setCookie(undefined, 'sirus.session', response.token, {
        maxAge: 60 * 60 * 1, // 1 hour
      })
    } else {
      return { error: response.message }
    }
    const user = await recoverRequest<User>({ token: response.token })
    if (!user.id) return { error: 'Problema ao trazer os dados do usuário.' }

    setUser(user)

    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
