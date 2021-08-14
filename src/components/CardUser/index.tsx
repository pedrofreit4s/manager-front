import styles from './styles.module.scss'

type User = {
  id: number
  username: string
  password: number
  createdAt: Date
  updatedAt: Date
}
type Props = {
  user: User
  buttonText: string
  onButtonClick: (db: any) => any
}

export default function CardUser({ user, buttonText, onButtonClick }: Props) {
  return (
    <div className={styles.Card}>
      <div className={styles.CardHeader}>
        <h4>{user.username}</h4>
      </div>
      <div className={styles.CardBody}>
        <button onClick={() => onButtonClick(user)}>{buttonText}</button>
      </div>
    </div>
  )
}
