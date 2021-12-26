import Link from 'next/link'
import React from 'react'
import { FC } from 'react'
import { classNames } from '@/data/components'

interface TopLevelLinksProps {
  className?: string
  onClick?: () => void
}

function orDoNothing(f?: () => void): () => void {
  return f !== undefined ? f : () => {}
}

/**
 * For Navbar, or else.
 */
const TopLevelLinks: Array<FC<TopLevelLinksProps>> = [
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

export default TopLevelLinks
