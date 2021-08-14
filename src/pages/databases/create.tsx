import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { getApiClient } from 'services/axios'
import { api } from 'services/api'
import Layout from 'layouts/Auth'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Title from 'components/Title'
import CardUser from 'components/CardUser'
import Router from 'next/router'
import Swal from 'sweetalert2'
import Input from 'components/Input'

type User = {
  id: number
  username: string
  password: number
  createdAt: Date
  updatedAt: Date
}

export default function CreateDatabasePage({ users }: { users: User[] }) {
  const [name, setName] = useState<string>('')
  const [userSelected, setUserSelected] = useState<User | null>(null)

  async function handleCreateDatabase(e) {
    e.preventDefault()
    if (!userSelected?.id) {
      Swal.fire({
        icon: 'error',
        title: 'Ops..',
        text: 'Selecione um usuário.',
      })
      return
    }
    try {
      await api.post('/database', {
        name,
        userId: userSelected.id,
      })

      Swal.fire({
        icon: 'success',
        title: 'Database criado!',
        text: 'Criamos o seu banco de dados, e já está pronto para ser acessado.',
      })

      Router.back()
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ops..',
        text: error.response.data.message,
      })
    }
  }

  return (
    <Layout title="Criar novo banco de dados">
      <Sidebar />

      <div style={{ position: 'relative' }} className="container-pp2">
        <Header />
        <Title
          title="Criar um bancos de dados"
          subtitle="Seus bancos de dados são monitorados aqui"
        />
        <div className="row mt-5">
          <label style={{ color: '#646874', fontWeight: 600 }} className="mb-3">
            Selecione o usuário
          </label>
          {users.map((user) => (
            <div key={user.id} className="col-sm-12 col-md-6 col-lg-4">
              <CardUser
                user={user}
                buttonText={
                  userSelected?.id === user.id ? 'selecionado' : 'selecione'
                }
                onButtonClick={(user) => setUserSelected(user)}
              />
            </div>
          ))}
        </div>
        <form className="row mt-4" onSubmit={handleCreateDatabase}>
          <div className="col-sm-12 col-md-12 col-lg-12">
            <Input
              onChange={(e: any) => setName(e.target.value)}
              type="text"
              name="name"
              label="Database name"
              maxLength={12}
            />
          </div>

          <div className="col-12">
            <button
              style={{ width: '100%', margin: 0, marginBottom: 15 }}
              className="button-default mt-4"
            >
              Criar banco de dados
            </button>
            <a
              style={{ cursor: 'pointer' }}
              className="mt-3"
              onClick={() => Router.back()}
            >
              Voltar
            </a>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const apiClient = getApiClient(ctx)
  const { ['sirus.session']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    }
  }

  const { data } = await apiClient.get('/database/users')
  return {
    props: {
      users: data,
    },
  }
}
