import { app } from './app.js'
import dotenv from 'dotenv'
import { initDatabase } from './src/db/init.js'

dotenv.config()

try {
  await initDatabase()
  const PORT = process.env.PORT
  app.listen(PORT)
  console.log(`express服务器运行在:http://locaohost:${PORT}`)
} catch (err) {
  console.error(`数据库连接错误：${err}`)
}
