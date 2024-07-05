import Head from 'next/head'
import Layout from '@/components/Layout'

const Home = () => {
  return (
      <div className="min-h-screen bg-gray-100">
      <Head>
        <title>My Blog</title>
      </Head>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <p className="text-center text-gray-500">Welcome to my blog!</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
