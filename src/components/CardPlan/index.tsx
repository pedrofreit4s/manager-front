import styles from './styles.module.scss'

export default function CardPlan() {
  return (
    <div className={styles.Card}>
      <div className={styles.CardContent}>
        <h3>plano premium</h3>
        <h4>1/3 DBs</h4>
        <h4>1/3 Usrs</h4>
        <h4>0/300 GBs</h4>
      </div>
      <div className={styles.Waves}></div>
    </div>
  )
}
