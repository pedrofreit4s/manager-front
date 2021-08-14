import styles from './styles.module.scss'

type Props = {
  title: string
  subtitle: string
}

export default function Title({ title, subtitle }: Props) {
  return (
    <div className={styles.Titlebar}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}
