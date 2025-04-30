import express from 'express'
import { postsRoutes } from './src/routes/posts.js'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

postsRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello Express')
})

export { app }
