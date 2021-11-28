import { FunctionComponent } from 'react'
import Navbar from '@/components/Navbar'

const Layout: FunctionComponent = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
  </>
)

export default Layout
