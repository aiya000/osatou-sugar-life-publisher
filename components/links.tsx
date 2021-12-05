import Link from 'next/link'
import { FunctionComponent } from 'react'
import { classNames } from '@/data/components'

interface Props {
  className?: string
}

/**
 * For Navbar, or else.
 */
const links: Array<FunctionComponent<Props>> = [
  ({ className }) => (
    <Link href="/about" key="about">
      <a className={classNames('btn', className)}>これなに？</a>
    </Link>
  ),

  ({ className }) => (
    <Link href="/input" key="input">
      <a className={classNames('btn', className)}>発行する</a>
    </Link>
  ),
]

export default links
