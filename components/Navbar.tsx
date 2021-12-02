import Link from 'next/link'
import { FunctionComponent } from 'react'
import { title } from '@/data/title'

const Navbar: FunctionComponent = () => (
  <div className="flex justify-between items-center bg-pink-300 p-4">
    <Link href="/">
      <a className="btn">{title}</a>
    </Link>
    </Link>
  </div>
)

export default Navbar
