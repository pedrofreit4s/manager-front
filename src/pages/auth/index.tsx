import { useContext, useState } from 'react'
import { AuthContext } from 'contexts/AuthContext'
import Title from 'components/Title'
import AuthLayout from 'layouts/Auth'
import Sidebar from 'components/Sidebar'
import Input from 'components/Input'
import Route from 'next/router'

export default function AuthPage() {
  const { signIn } = useContext(AuthContext)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  async function onSubmit(e: any) {
    e.preventDefault()
    const response = await signIn({
      email,
      password,
    })

    if (response?.error) alert(response.error)
  }

  return (
    <AuthLayout title="Entre em sua conta">
      <Sidebar />

      <div className="container-pp mt-148">
        <Title
          title="Faça o login para acessar a plataforma."
          subtitle="Informe os seus dados de acesso para continuar na plataforma."
        />
        <form className="row mt-4" onSubmit={onSubmit}>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Input
              onChange={(e: any) => setEmail(e.target.value)}
              type="email"
              name="email"
              label="Email"
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Input
              onChange={(e: any) => setPassword(e.target.value)}
              type="password"
              name="password"
              label="Senha"
            />
          </div>

          <button className="button-default mt-4">Acessar plataforma</button>
          <a className="mt-3" onClick={() => Route.push('/auth/register')}>
            Não tem uma conta?
          </a>
        </form>
      </div>
    </AuthLayout>
  )
}
