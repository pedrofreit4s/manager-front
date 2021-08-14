import styles from './styles.module.scss'

export default function Header() {
  return (
    <div className={styles.Header}>
      <div className={styles.Right}>
        <div className={styles.Profile}></div>
        <i className="bx bx-log-out" />
      </div>
    </div>
  )
}
