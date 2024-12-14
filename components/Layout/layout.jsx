import React from 'react'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    {/* Main content will stretch to fill available space */}
    <Menu/>
    <main className="flex-grow">{children}</main>
    {/* Footer stays at the bottom */}
    <Footer />
  </div>
    </>
  )
}

export default Layout