import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  onChange: any
}
export default function Input({ name, label, onChange, ...rest }: Props) {
  return (
    <div className={styles.FormGroup}>
      <label htmlFor={name}>{label}</label>
      <input id={name} onChange={onChange} {...rest} />
    </div>
  )
}
