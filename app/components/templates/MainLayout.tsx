import React from 'react'
import { Header } from '../organisms/Header'
import { Footer } from '../organisms/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="px-5 py-4 bg-primary-dark text-white">{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
