import { ReactNode } from 'react'
import Head from 'next/head'
import Link from 'next/link'

type LayoutProps = {
  children: ReactNode
  title?: string
}

const Layout = ({ children, title = "My Blog" }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 sm:mb-0">My Blog</h1>
          <nav>
            <Link href="/" className="text-blue-500 hover:text-blue-700 mr-4">Home</Link>
            <Link href="/about" className="text-blue-500 hover:text-blue-700 mr-4">About</Link>
            <Link href="/posts" className="text-blue-500 hover:text-blue-700">Blog Posts</Link>
          </nav>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Layout
