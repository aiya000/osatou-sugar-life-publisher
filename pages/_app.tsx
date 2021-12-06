// eslint-disable-next-line import/no-unassigned-import
import '../styles/globals.css'

import { AppProps } from 'next/app'
import Layout from '@/components/layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />

      <div className="flex flex-col items-center">
        <div className="border-t-2 border-dotted border-pink-400 w-1/2 h-2 mt-8">　</div>

        <footer className="my-4">
          Created by sisters <a href="https://twitter.com/senka_ai_vrchat">千夏あい</a> and{' '}
          <a href="https://twitter.com/public_ai000ya">あいや</a>
        </footer>
      </div>
    </Layout>
  )
}
