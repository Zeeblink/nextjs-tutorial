import { GetStaticPaths, GetStaticProps } from 'next'
import { posts } from '@/data/post'
import Layout from '@/components/Layout'

type PostProps = {
  post: {
    id: number
    title: string
    body: string
  }
}

const Post = ({ post }: PostProps) => {
  return (
      <article className="prose lg:prose-xl bg-white shadow rounded-lg p-6">
        <h1 className='text-3xl mb-4'>{post.title}</h1>
        <p>{post.body}</p>
      </article>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts: { id: number }[] = await res.json()
  const paths = posts.map(post => ({
    params: { id: post.id.toString() },
  }))
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`)
  const post = await res.json()
  return { props: { post } }
}

export default Post
