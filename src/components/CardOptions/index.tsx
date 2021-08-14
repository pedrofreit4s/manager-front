import styles from './styles.module.scss'

import Image from 'next/image'

type Props = {
  active?: boolean
  image: any
  title: string
  subtitle: string
  onClick?: () => void
}

export default function CardOptions({
  active,
  image,
  title,
  subtitle,
  onClick,
}: Props) {
  return (
    <div onClick={onClick} className={active ? styles.CardActive : styles.Card}>
      <div className={styles.CardContent}>
        <div className={styles.CardIcon}>
          <Image src={image} alt="User icon" />
        </div>
        <div className={styles.Texts}>
          <h2>{title}</h2>
          <p>{subtitle}</p>
        </div>
      </div>
      <div className={styles.CardContentEnd}>
        <i className="bx bxs-right-arrow-alt"></i>
      </div>
    </div>
  )
}
