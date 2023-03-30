import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/layout/Layout'
import Footer from '@/components/footer'

export default function App({ Component, pageProps }: AppProps) {
  
  return(
    <>
    <Layout>
      <Component {...pageProps} />
      <Footer/>
    </Layout>
    </>
  )
}
