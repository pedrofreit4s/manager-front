import { useState } from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { getApiClient } from 'services/axios'
import { api } from 'services/api'
import Router from 'next/router'
import Layout from 'layouts/Auth'
import Sidebar from 'components/Sidebar'
import Header from 'components/Header'
import Title from 'components/Title'
import Card from 'components/Card'
import CardOptions from 'components/CardOptions'
import UserIcon from 'assets/userCreate.svg'
import DbCreate from 'assets/dbCreate.svg'
import CardPlan from 'components/CardPlan'
import Informations from 'components/Informations'
import Swal from 'sweetalert2'

type Database = {
  id: number
  name: string
  user_db_id: number
  user_id: number
  username: string
  password: string
  createdAt: Date
  updatedAt: Date
}

export default function DashboardPage({
  databases,
}: {
  databases: Database[]
}) {
  const [activeDb, setActiveDb] = useState<Database | null>(null)

  async function handleCreateUser() {
    try {
      await api.post('/database/users')

      Swal.fire({
        icon: 'success',
        title: 'Usuário criado!',
        text: 'Criamos o seu usuário, agora você pode utiliza-lo para criar o seu banco de dados',
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Ops..',
        text: error.response.data.message,
      })
    }
  }

  return (
    <Layout title="Meus bancos de dados">
      <Sidebar />

      <div style={{ position: 'relative' }} className="container-pp2">
        <Header />
        <Title
          title="Meus bancos de dados"
          subtitle="Seus bancos de dados são monitorados aqui"
        />
        <div className="row mt-4">
          {databases.map((db) => (
            <div key={db.id} className="col-sm-12 col-md-6 col-lg-4">
              <Card database={db} onButtonClick={(db) => setActiveDb(db)} />
            </div>
          ))}
        </div>
        <div className="row mt-5">
          <div className="col-sm col-sm-12 col-md-12 col-lg-8">
            <CardOptions
              title="Criar usuário"
              subtitle="Cire um usuário pro seu db"
              image={UserIcon}
              active={true}
              onClick={() => handleCreateUser()}
            />
            <CardOptions
              title="Criar um banco de dados"
              subtitle="Crie já o seu banco de dados"
              image={DbCreate}
              onClick={() => Router.push('/databases/create')}
            />
          </div>
          <div className="col-sm col-sm-12 col-md-12 col-lg-4">
            <CardPlan />
          </div>
        </div>
        {activeDb ? (
          <Informations
            name={activeDb.name}
            username={activeDb.username}
            password={activeDb.password}
            setActiveDb={setActiveDb}
          />
        ) : (
          ''
        )}
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

  const { data } = await apiClient.get('/database')
  return {
    props: {
      databases: data,
    },
  }
}
