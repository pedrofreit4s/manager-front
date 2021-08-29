import DashboardLayout from 'layouts/Dashboard'
import Title from 'components/Title'
import CardOptions from 'components/CardOptions'
import UserIcon from 'assets/userCreate.svg'
import DbCreate from 'assets/dbCreate.svg'
import CardPlan from 'components/CardPlan'
import DbCard from 'components/DbCard'
import CardNew from 'components/CardNew'
import { Container } from 'components/Layout/container'
import { useRouter } from 'next/router'
import { versionPageRoutes } from 'utils/route'
import ModalCreateUser from 'components/modals/CreateUser'
import { useState } from 'react'

export default function Dashboard() {
  const [createUser, setCreateUser] = useState<boolean>(false)
  const router = useRouter()
  return (
    <DashboardLayout title={'Meus bancos de dados'}>
      <ModalCreateUser show={createUser} setShow={setCreateUser} />
      <Container>
        <Title title="Meus bancos de dados" subtitle="Seus bancos de dados são monitorados aqui!" />
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-6 mb-2">
            <CardOptions
              onClick={() => setCreateUser(true)}
              title="Criar usuário"
              subtitle="Cire um usuário pro seu db"
              image={UserIcon}
              active={true}
            />
            <CardOptions
              onClick={() => router.push(versionPageRoutes('/databases/create'))}
              title="Criar um banco de dados"
              subtitle="Crie já o seu banco de dados"
              image={DbCreate}
            />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-5 col-xl-6 d-none d-md-block">
            <div className="row h-100">
              <div className="col-6">
                <CardPlan />
              </div>
              <div className="col-6">
                <CardNew />
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-2">
            <DbCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-2">
            <DbCard />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4 mb-2">
            <DbCard />
          </div>
        </div>
      </Container>
    </DashboardLayout>
  )
}
