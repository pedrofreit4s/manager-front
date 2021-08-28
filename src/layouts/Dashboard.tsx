import Head from 'next/head'
import Image from 'next/image'
import Brand from 'assets/brand.svg'
import styles from 'sass/dashboard.module.scss'

type Props = {
  title: string
  children: any
}

export default function DashboardLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.DashboardWrapper}>
        <div className={styles.Side}>
          <div className={styles.Sidebar}>
            <div className={styles.Brand}>
              <Image src={Brand} alt="Brand" />
            </div>
            <h3>Ainda estamos em BETA.</h3>
            <p>
              Estamos melhorando nossos sistemas a cada dia, mas ele já está
              pronto pra uso e já temos uma equipe de segurança e proteção.
            </p>
          </div>
        </div>
        <div className={styles.Content}>{children}</div>
      </div>
    </>
  )
}
