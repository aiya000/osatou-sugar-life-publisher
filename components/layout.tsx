import Navbar from '@/components/Navbar'
import React, { FC, useEffect } from 'react'

/**
 * NOTE: This contains setting of body class names.
 */
const Layout: FC = ({ children }) => {
  useEffect(() => {
    // NOTE: Using #toplevel-container because mobile devices are needing this: https://yuntu-tek.com/overflow-x/
    // Remove unintended overflowing margins.
    document.querySelector('#toplevel-container')?.classList.add('overflow-x-hidden')
    document.querySelector('#toplevel-container')?.classList.add('relative')
  }, [])

  return (
    <div id="toplevel-container">
      <Navbar />
      <div className="mt-4 max-inline-size-max margin-inline-auto text-xl font-bold">
        ♡サイト開発中なう♡
      </div>
      <main>{children}</main>
    </div>
  )
}

export default Layout
