import Image from 'next/image'
import styles from './styles.module.scss'
import Brand from 'assets/brand.svg'

export default function Sidebar() {
  return (
    <div className={styles.SidebarContainer}>
      <div className={styles.Sidebar}>
        <div className={styles.Brand}>
          <Image src={Brand} alt="Brand" />
        </div>
        <div className={styles.Texts}>
          <h3>Ainda estamos em BETA.</h3>
          <p>
            Estamos melhorando nossos sistemas a cada dia, mas ele já está
            pronto pra uso e já temos uma equipe de segurança e proteção.
          </p>
        </div>
      </div>
    </div>
  )
}
