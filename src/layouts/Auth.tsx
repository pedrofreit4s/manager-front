import Head from 'next/head'
import styles from 'sass/auth.module.scss'

type Props = {
  title: string
  children: any
}

export default function AuthLayout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>Sirus — {title}</title>
      </Head>
      <div className={styles.WrapperContent}>{children}</div>
    </>
  )
}
