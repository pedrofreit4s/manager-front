import styles from './styles.module.scss'

type Props = {
  name: string
  type: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

export default function Button({ name, type, disabled }: Props) {
  return (
    <div className={styles.Button}>
      <button type={type} disabled={disabled}>
        {name}
      </button>
    </div>
  )
}
