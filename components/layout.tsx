import Navbar from '@/components/Navbar'
import React, { FC, useEffect } from 'react'

/**
 * NOTE: This contains setting of body class names.
 */
const Layout: FC = ({ children }) => {
  useEffect(() => {
    document.querySelector('body')?.classList.add('overflow-x-hidden')
  }, [])

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  )
}

export default Layout
