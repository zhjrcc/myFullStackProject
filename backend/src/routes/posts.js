import {
  listAllPosts,
  listPostsByAuthor,
  listPostsByTag,
  getPostsById,
  createPost,
  updatePost,
  deletePost,
} from '../services/posts.js'

export function postsRoutes(app) {
  app.get('/api/v1/posts', async (req, res) => {
    const { sortBy, sortOrder, author, tag } = req.query
    const options = { sortBy, sortOrder }

    try {
      if (author && tag) {
        return res.status(400).json({ error: '查询作者或者标签，不能同时查询' })
      } else if (author) {
        return res.json(await listPostsByAuthor(author, options))
      } else if (tag) {
        return res.json(await listPostsByTag(tag, options))
      } else {
        return res.json(await listAllPosts(options))
      }
    } catch (err) {
      console.error(`获取文章列表失败：${err}`)
      return res.status(500).end()
    }
  })
  app.get('/api/v1/posts/:id', async (req, res) => {
    const { id } = req.params
    try {
      const post = await getPostsById(id)
      if (post === null) return res.status(404).end(' 404 not found')
      return res.json(post)
    } catch (err) {
      console.log(`获取文章失败:${err}`)
      return res.status(500).end()
    }
  })
  app.post('/api/v1/posts', async (req, res) => {
    try {
      const post = await createPost(req.body)
      return res.json(post)
    } catch (err) {
      console.error(`'创建文章失败：${err}`)
      return res.status(500).end()
    }
  })
  app.patch('/api/v1/posts/:id', async (req, res) => {
    try {
      const post = await updatePost(req.params.id, req.body)
      return res.json(post)
    } catch (err) {
      console.error(`更新文章失败`, err)
      return res.status(500).end()
    }
  })
  app.delete('/api/v1/posts/:id', async (req, res) => {
    try {
      const { deletedCount } = await deletePost(req.params.id)
      if (deletedCount === 0) return res.sendStatus(404)
      return res.status(204).end()
    } catch (err) {
      console.log('删除文章失败', err)
      return res.status(500).end()
    }
  })
}
