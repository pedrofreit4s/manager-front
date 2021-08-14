import '../sass/globals.scss'
import 'bootstrap/dist/css/bootstrap-grid.css'

import Router from 'next/router'
import NProgress from 'nprogress'
import Head from 'next/head'
import { AuthProvider } from 'contexts/AuthContext'

Router.events.on('routeChangeStart', (url) => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})

Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Head>
        <link
          href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp
