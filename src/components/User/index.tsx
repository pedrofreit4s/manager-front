import styles from './styles.module.scss'

export default function UserCard() {
  return (
    <div className={styles.Card}>
      <div className={styles.CardProfile}></div>
      <div className={styles.Name}>
        <h2>pedro_freitas</h2>
      </div>
      <div className={styles.CardActions}>
        <i className="bx bxs-trash"></i>
        <i className="bx bx-pencil"></i>
      </div>
    </div>
  )
}
