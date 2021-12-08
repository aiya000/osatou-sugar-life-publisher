import Navbar from '@/components/Navbar'
import React from 'react'
import { FunctionComponent } from 'react'

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
)

export default Layout
