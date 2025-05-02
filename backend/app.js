import express from 'express'
import cors from 'cors'
import { postsRoutes } from './src/routes/posts.js'
import { userRoutes } from './src/routes/users.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

postsRoutes(app)
userRoutes(app)

app.get('/', (req, res) => {
  res.send('Hello Express')
})

export { app }
