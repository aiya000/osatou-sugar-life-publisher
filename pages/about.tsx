import Head from 'next/head'
import React from 'react'
import { NextPage } from 'next'
import { title } from '@/data/title'

const About: NextPage = () => (
  <div>
    <Head>
      <title>{title} - これなに？</title>
      <meta name="description" content={title} />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex flex-col items-center m-4">
      <p className="font-extrabold text-pink-400 text-lg my-4 md:text-2xl">
        このサイトの目的っぽいもの
      </p>

      <div className="rounded-box">
        {/* NOTE: FontAwesome使いたくなったら使う */}

        <p>お砂糖と言っても多種多様な種類があります✨</p>
        <p>
          そこでお互いが<span className="font-bold">すれ違ってしまう</span>こともあります
        </p>

        <p className="mt-4">
          そこで本サイトはお砂糖文化を盛り上げ、 壮大にいちゃいちゃしていただくこと、
        </p>
        <p>
          そしてそれと同時に前述の<span className="font-bold">すれ違いをできるかぎり事前回避</span>
          してもらえることを目的にしています💕
        </p>

        <p className="mt-4">
          どうか青くかがやくく春のような、お砂糖シュガーライフを満喫してください♡
        </p>
      </div>
    </main>
  </div>
)

export default About
