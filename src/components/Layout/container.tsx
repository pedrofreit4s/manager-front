import styles from './styles.module.scss'

export function Container({ children }) {
  return <div className={styles.Container}>{children}</div>
}
