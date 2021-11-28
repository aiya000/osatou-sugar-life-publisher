import { FunctionComponent } from 'react'
import Link from 'next/link'

const Navbar: FunctionComponent = () => (
  <ul className="flex bg-pink-300 p-4">
    <li className="mr-6">
      <Link href="/">
        <a className="text-white hover:text-black fond-extrabold">Home</a>
      </Link>
    </li>
  </ul>
)

export default Navbar
