import DashboardLayout from 'layouts/Dashboard'
import Title from 'components/Title'
import Input from 'components/Input'
import DbCard from 'components/DbCard'
import CardPlan from 'components/CardPlan'
import CardNew from 'components/CardNew'
import UserCard from 'components/User'
import { Container } from 'components/Layout/container'
import { useRouter } from 'next/router'
import Button from 'components/Button'

export default function CreateDatabases() {
  const router = useRouter()
  return (
    <DashboardLayout title={'Criar um novo bancos de dados'}>
      <Container>
        <Title title="Criar novo banco de dados" subtitle="Seus bancos de dados são monitorados aqui!" />
        <div className="row mt-5">
          <div className="col-sm-12 col-md-12 col-lg-6">
            <Input label="Database" defaultValue={'sirus_database'} name="Database" onChange={() => {}} />
            <h3 className="title-medium mt-4">Adicione usuário ao seu banco de dados.</h3>
            <div className="row mt-3 mb-4">
              <div className="col-sm-12 col-md-4">
                <UserCard />
              </div>
              <div className="col-sm-12 col-md-4">
                <UserCard />
              </div>
              <div className="col-sm-12 col-md-4">
                <UserCard />
              </div>
            </div>
            <Button disabled={false} type="button" name="Criar meu banco de dados" />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-6">
            <DbCard hiddenLogs={true} />
            <div className="row mt-3">
              <div className="col-6">
                <CardPlan />
              </div>
              <div className="col-6">
                <CardNew />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </DashboardLayout>
  )
}
