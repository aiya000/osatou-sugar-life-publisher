import Head from 'next/head'
import { NextPage } from 'next'
import { title } from '@/data/title'

const Sheet: NextPage = () => (
  <div>
    <Head>
      <title>{title} - 発行</title>
      <meta name="description" content={title} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center"></main>
  </div>
)

export default Sheet
