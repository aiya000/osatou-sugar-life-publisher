import { FunctionComponent } from 'react'
import Link from 'next/link'

const Navbar: FunctionComponent = () => (
  <div className="flex justify-between items-center bg-pink-300 p-4">
    <Link href="/">
      <a className="btn">お砂糖届け出市役所</a>
    </Link>

    {/*
      NOTE:
      「タイトルをクリックするとHomeに戻る」
      っていうのは案外、知らない人はいるらしいので、
      明示的なナビゲーションも用意しておく
    */}
    <Link href="/">
      <a className="btn">Home</a>
    </Link>
  </div>
)

export default Navbar
