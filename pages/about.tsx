import Head from 'next/head'
import Layout from '@/components/Layout'

const About = () => {
  return (
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>About - My Blog</title>
        </Head>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                <p className="text-gray-500 text-center">This is the about page.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
  )
}

export default About
