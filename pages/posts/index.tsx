import Layout from '@/components/Layout'
// import { posts } from '@/data/post'
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
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Blog Posts</h2>
        <ul className="space-y-4">
          {posts.map(post => (
            <li key={post.id} className="border-b pb-4">
              <Link href={`/posts/${post.id}`}>
                <a className="text-lg text-blue-500 hover:text-blue-700">
                  {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
