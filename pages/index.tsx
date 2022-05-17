import Card from '@/components/Card'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import SectionTitle from '@/components/SectionTitle'
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
      {/* Title */}
      <section className="mt-4 px-2 py-1">
        <div className="py-2 border-t-2 border-b-2 border-pink-400">
          <div className="mx-8 flex flex-row justify-center items-center">
            <img src={brandIcon.src} alt="brand-icon" className="w-16 h-18" />
            <p className="ml-2 font-extrabold text-pink-400 text-lg md:text-2xl">{title}</p>
          </div>
        </div>
      </section>

      <Card
        image={exampleSugar}
        title="あなたのお砂糖婚姻届け画像を生成します♡"
        text={[
          `${title}へようこそ！`,
          `${title}はおふたりのお砂糖届け画像を生成するサイトです🎉`,
          '　',
          'おふたりにはラブレターを記入していただき、それを送りあうことで、お砂糖届けを自動でお作りいたします✨',
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

      <section className="mt-6">
        <Link href="/writing-loveletter">
          <a className="btn text-pink-500">発行する</a>
        </Link>
      </section>

      <p className="mt-6">TODO: ↓ちゃんと書く↓</p>

      {/* Introduction */}
      <section className="rounded-box w-3/4v mt-4 flex flex-col items-center">
        <SectionTitle>1. ラブレターを作る！</SectionTitle>
        <div className="mt-4 w-full">
          <p>
            記入がおわったら<span className="font-bold text-pink-400">ラブレター</span>
            が作成されます💕
          </p>
          <p className="mt-4">
            その際に、ブラウザに発行されたURLが
            <span className="font-bold text-pink-400">ラブレター</span>になります！
          </p>
          <p>保存しておこう💓</p>
        </div>
      </section>
      <section className="rounded-box w-3/4v mt-4 flex flex-col items-center">
        <SectionTitle>2. ラブレターを送信して告白する！</SectionTitle>
        <div className="mt-4 w-full">
          <p>
            <span className="font-bold text-pink-400">
              <span className="font-bold text-pink-400">ラブレター</span>
            </span>
            （↑で保存しておいたURL）を相手に送信して……
          </p>
          <p>告白をしましょう！</p>
          <p>がんばって～！ ドキドキ――</p>

          <p className="mt-4">
            先に告白してもおっけー！ おっけーもらったら、
            <span className="font-bold text-pink-400">
              <span className="font-bold text-pink-400">ラブレター</span>
            </span>
            わたそ{' (,,>᎑<,,)'}
          </p>
        </div>
      </section>
      <section className="rounded-box w-3/4v mt-4 flex flex-col items-center">
        <SectionTitle>3. おっけーもらったらおめでとー！！！！！</SectionTitle>
        <div className="mt-4 w-full">
          <p>
            <span className="font-bold text-pink-400">ラブレター</span>
            の下部に、相手用の記入場所へのリンクがあります✨
          </p>
          <p>
            それを記入してもらったら……とうとう
            <span className="font-bold text-pink-400">お砂糖婚姻届け</span>の完成！
          </p>

          <p className="mt-4">「1.」と同様にリンクが生成されるので、相手からもらってください</p>
          <p>あとは末永くおしあわせに……{' (๑>◡<๑)'}💕</p>
        </div>
      </section>

      <section className="mt-12">
        <Link href="/writing-loveletter">
          <a className="btn text-pink-500">発行する</a>
        </Link>
      </section>
    </main>
  </div>
)

export default Home
