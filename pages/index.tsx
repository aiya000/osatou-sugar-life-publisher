import Card from '@/components/Card'
import Head from 'next/head'
import { NextPage } from 'next'
import exampleSugar from '~/images/example-sugar.png'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>お砂糖届け出市役所</title>
      <meta name="description" content="お砂糖届け出市役所" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center">
      <p className="decoration-clone text-lg my-4 md:text-2xl">お砂糖届け出市役所</p>

      <Card
        image={exampleSugar}
        title="あなたのお砂糖婚姻届け画像を生成します♡"
        text={[
          'お砂糖届け出市役所へようこそ！',
          'お砂糖届け出市役所はおふたりのお砂糖届け画像を生成するサイトです🎉',
          '　',
          'おふたりには必要事項をそれぞれ記入していただき、それを送りあうことで、お砂糖届けを自動でお作りいたします✨',
          '　',
          'それでは、すてきなお砂糖ライフを💗',
        ]}
        hashTags={['#ご報告', '#お砂糖しました', '#だいすき', '#ずっと一緒']}
        className="p-4 md:w-1/2"
      />

      <div className="border-t-2 border-dotted border-pink-400 w-1/2 h-2 mt-8">　</div>

      <p className="my-4">
        Created by sisters <a href="https://twitter.com/senka_ai_vrchat">千夏あい</a> and{' '}
        <a href="https://twitter.com/public_ai000ya">あいや</a>
      </p>
    </main>
  </div>
)

export default Home
