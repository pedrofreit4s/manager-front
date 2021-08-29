import { InputHTMLAttributes } from 'react'
import styles from './styles.module.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  onChange: any
  labelBg?: string
}
export default function Input({ name, label, labelBg, onChange, ...rest }: Props) {
  return (
    <div className={styles.FormGroup}>
      <label style={{ background: labelBg }} htmlFor={name}>
        {label}
      </label>
      <input id={name} onChange={onChange} {...rest} />
    </div>
  )
}
