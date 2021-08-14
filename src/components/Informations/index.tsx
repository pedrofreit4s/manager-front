import styles from './styles.module.scss'

type Props = {
  username: string
  password: string
  name: string
  setActiveDb: any
}

export default function Informations({
  username,
  password,
  name,
  setActiveDb,
}: Props) {
  return (
    <div className={styles.Container}>
      <div className="animate__animated animate__fadeInRight">
        <div className={styles.InformationsCard}>
          <div className={styles.CardHeader}>
            <h3>Informations</h3>
            <i onClick={() => setActiveDb(null)} className="bx bx-x"></i>
          </div>
          <div className={styles.CardBody}>
            <div className={styles.Cover}>01-db.sirus.net.br</div>
            <ul>
              <li>
                <i className="bx bx-user"></i> {username}
              </li>
              <li>
                <i className="bx bx-key"></i> {password}
              </li>
              <li>
                <i className="bx bx-data"></i> {name}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
