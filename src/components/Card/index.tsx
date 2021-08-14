import Image from 'next/image'
import styles from './styles.module.scss'
import IconActive from 'assets/icon_online.svg'

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
type Props = {
  database: Database
  onButtonClick: (db: any) => any
}

export default function Card({ database, onButtonClick }: Props) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardHeader}>
        <h4>{database.name}</h4>
        <Image src={IconActive} alt="Online" title="Funcionando" />
      </div>
      <div className={styles.CardBody}>
        <p>0% used</p>
        <button onClick={() => onButtonClick(database)}>informations</button>
      </div>
    </div>
  )
}
