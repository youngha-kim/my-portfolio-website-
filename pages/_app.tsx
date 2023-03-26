import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/layout'
// import MainNavigation from '@/components/navBar/MainNavigation'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
    <Layout>
      <Component {...pageProps} />
      <div>footer</div>
    </Layout>
    </>
  )
}
