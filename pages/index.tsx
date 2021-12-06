import Card from '@/components/Card'
import Head from 'next/head'
import Link from 'next/link'
import brandIcon from '~/images/brand-icon.png'
import exampleSugar from '~/images/example-sugar.png'
import { NextPage } from 'next'
import { title } from '@/data/title'

const Home: NextPage = () => (
  <div>
    <Head>
      <title>{title}</title>
      <meta name="description" content={title} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center">
      <div className="mt-4 px-2 py-1">
        <div className="py-2 border-t-2 border-b-2 border-pink-400">
          <div className="mx-8 flex flex-row justify-center items-center">
            <img src={brandIcon.src} alt="brand-icon" className="w-16 h-18" />
            <p className="ml-2 font-extrabold text-pink-400 text-lg md:text-2xl">{title}</p>
          </div>
        </div>
      </div>

      <Card
        image={exampleSugar}
        title="あなたのお砂糖婚姻届け画像を生成します♡"
        text={[
          `${title}へようこそ！`,
          `${title}はおふたりのお砂糖届け画像を生成するサイトです🎉`,
          '　',
          'おふたりには必要事項をそれぞれ記入していただき、それを送りあうことで、お砂糖届けを自動でお作りいたします✨',
          '　',
          'それでは、すてきなお砂糖ライフを💗',
        ]}
        hashTags={[
          '#ご報告',
          '#お砂糖しました',
          '#だいすき',
          '#ずっと一緒',
          '#お砂糖シュガーライフ',
        ]}
        className="m-4 p-4 md:w-1/2"
      />

      <div className="mt-6">
        <Link href="/input">
          <a className="btn text-pink-500">発行する</a>
        </Link>
      </div>

      <div className="border-t-2 border-dotted border-pink-400 w-1/2 h-2 mt-8">　</div>

      <footer className="my-4">
        Created by sisters <a href="https://twitter.com/senka_ai_vrchat">千夏あい</a> and{' '}
        <a href="https://twitter.com/public_ai000ya">あいや</a>
      </footer>
    </main>
  </div>
)

export default Home
