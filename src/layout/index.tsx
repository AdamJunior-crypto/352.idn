import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0B1730] transition-colors duration-200">
      <Header />
      
      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
