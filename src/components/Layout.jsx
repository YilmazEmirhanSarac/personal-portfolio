import { Outlet, ScrollRestoration } from 'react-router'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-neutral-900 antialiased">
      <Navbar />

      <main id="main" className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <Outlet />
      </main>

      <Footer />

      {/* Starts each new page at the top instead of keeping the old scroll position. */}
      <ScrollRestoration />
    </div>
  )
}
