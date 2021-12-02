import Link from 'next/link'
import { FunctionComponent } from 'react'

/**
 * For Navbar, or else.
 */
const Links: FunctionComponent = () => (
  <>
    <Link href="/about">
      <a className="btn">これなに？</a>
    </Link>

    <Link href="/sheet">
      <a className="btn ml-1">発行する</a>
    </Link>
  </>
)

export default Links
