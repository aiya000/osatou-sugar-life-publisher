import Link from 'next/link'
import React from 'react'
import { FunctionComponent } from 'react'
import { classNames } from '@/data/components'

interface Props {
  className?: string
  onClick?: () => void
}

function orDoNothing(f?: () => void): () => void {
  return f !== undefined ? f : () => {}
}

/**
 * For Navbar, or else.
 */
const links: Array<FunctionComponent<Props>> = [
  ({ className, onClick }) => (
    <Link href="/about" key="about">
      <a className={classNames('btn', className)} onClick={orDoNothing(onClick)}>
        これなに？
      </a>
    </Link>
  ),

  ({ className, onClick }) => (
    <Link href="/loveletter" key="loveletter">
      <a className={classNames('btn', className)} onClick={orDoNothing(onClick)}>
        発行する
      </a>
    </Link>
  ),
]

export default links
