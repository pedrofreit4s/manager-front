import DashboardLayout from 'layouts/Dashboard'
import Title from 'components/Title'
import CardOptions from 'components/CardOptions'
import UserIcon from 'assets/userCreate.svg'
import DbCreate from 'assets/dbCreate.svg'
import CardPlan from 'components/CardPlan'
import DbCard from 'components/DbCard'
import { Container } from 'components/Layout/container'
import CardNew from 'components/CardNew'

export default function Dashboard() {
  return (
    <DashboardLayout title={'Meus bancos de dados'}>
      <Container>
        <Title title="Meus bancos de dados" subtitle="Seus bancos de dados são monitorados aqui!" />
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-7 col-xl-6 mb-2">
            <CardOptions title="Criar usuário" subtitle="Cire um usuário pro seu db" image={UserIcon} active={true} />
            <CardOptions title="Criar um banco de dados" subtitle="Crie já o seu banco de dados" image={DbCreate} />
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
