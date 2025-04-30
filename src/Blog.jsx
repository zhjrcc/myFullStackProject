import { useState } from 'react'
import { CreatePost } from './components/CreatePost'
import { PostList } from './components/PostList'
import { PostFilter } from './components/PostFilter'
import { PostSorting } from './components/PostSorting'
import { useQuery } from '@tanstack/react-query'
import { getPosts } from './api/posts'

export function Blog() {
  const [author, setAuthor] = useState('')
  const [sortBy, setSortBy] = useState('createdAt')
  const [sortOrder, setSortOrder] = useState('descending')
  const postsQuery = useQuery({
    queryKey: ['posts', { author, sortBy, sortOrder }],
    queryFn: () => getPosts({ author, sortBy, sortOrder }),
  })
  const posts = postsQuery.data ?? []
  return (
    <>
      <CreatePost />
      <hr />
      <PostFilter
        field='author'
        value={author}
        onChange={(value) => setAuthor(value)}
      />
      <hr />
      <PostSorting
        fields={['createdAt', 'updatedAt']}
        value={sortBy}
        onChange={(value) => setSortBy(value)}
        orderValue={sortOrder}
        onOrderChange={(orderValue) => setSortOrder(orderValue)}
      />
      <hr />
      <PostList posts={posts} />
    </>
  )
}
