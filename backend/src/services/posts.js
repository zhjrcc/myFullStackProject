import { Post } from '../db/models/post.js'
import { User } from '../db/models/user.js'

// Create
export async function createPost(userId, { title, contents, tags }) {
  const post = new Post({ title, author: userId, contents, tags })
  return await post.save()
}

// Update
export async function updatePost(userId, postId, { title, contents, tags }) {
  return await Post.findOneAndUpdate(
    { _id: postId, author: userId },
    { $set: { title, author: userId, contents, tags } },
    { new: true },
  )
}

// Read
async function listPosts(
  query = {},
  { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {
  return await Post.find(query).sort({ [sortBy]: sortOrder })
}

export async function listAllPosts(options) {
  return await listPosts({}, options)
}

export async function listPostsByAuthor(authorUsername, options) {
  const user = await User.findOne({ username: authorUsername })
  if (!user) return []
  return await listPosts({ author: user._id }, options)
}

export async function listPostsByTag(tags, options) {
  return await listPosts({ tags }, options)
}

export async function getPostsById(postId) {
  return await Post.findById(postId)
}

// Delete
export async function deletePost(userId, postId) {
  return await Post.deleteOne({ _id: postId, author: userId })
}
