import Head from 'next/head'
import { NextPage } from 'next'
import { title } from '@/data/title'

const Sheet: NextPage = () => (
  <div>
    <Head>
      <title>{title} - これなに？</title>
      <meta name="description" content={title} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center">
      {/* NOTE: FontAwesome使いたくなったら使う */}
      <p>お砂糖と言っても多種多様な種類があります✨</p>
      <p>
        そこでお互いがすれ違ってしまうことも、多くあると聞きます😥
        <span className="text-xs">作者のかたわらもそのひとりです</span>
      </p>

      <p>
        そこで本サイトはお砂糖文化を盛り上げ、 壮大にいちゃいちゃしていただくこと、
        そしてそれと同時に前述のすれ違いをできるかぎり事前回避してもらえることを目的にしています💕
      </p>
    </main>
  </div>
)

export default Sheet
