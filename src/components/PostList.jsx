import { Fragment } from 'react'
import { Post } from './Post'

export function PostList({ posts = [] }) {
  return (
    <div>
      {posts.map((post) => {
        return (
          <Fragment key={post._id}>
            <Post {...post} />
            <hr />
          </Fragment>
        )
      })}
    </div>
  )
}
