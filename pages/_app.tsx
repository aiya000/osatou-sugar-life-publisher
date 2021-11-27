// eslint-disable-next-line import/no-unassigned-import
import '../styles/globals.css'

import { AppProps } from 'next/app'
import Layout from '@/components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
