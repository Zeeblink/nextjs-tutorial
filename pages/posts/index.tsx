import Layout from '@/components/Layout'
import Link from 'next/link'
import { GetStaticProps } from 'next'

type Post = {
  id: number
  title: string
}

type PostsProps = {
  posts: Post[]
}

const Posts = ({ posts }: PostsProps) => {
  return (
    <Layout title="Blog Posts - My Blog">
      <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
        <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`} className="text-blue-500 hover:text-blue-700">
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: Post[] = await res.json()
  return {
    props: {
      posts,
    },
  }
}

export default Posts
