import type { NextPage } from 'next'
import { PostCard, Categories, PostWidget } from '../components'
import Head from 'next/head'

const post = [
  {
    title: 'React Testing',
    excerpt: 'Learn React Testing',
  },
  {
    title: 'React with tailwind',
    excerpt: 'Learn React with tailwind',
  },
]

const Home: NextPage = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CMS Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
        <div className="col-span-1 lg:col-span-8">
          {post.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="relatve top-8 lg:sticky">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
