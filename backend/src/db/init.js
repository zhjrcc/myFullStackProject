import mongoose from 'mongoose'

export function initDatabase() {
  const DATABASE_URL = 'mongodb://localhost:27018/blog'
  mongoose.connection.on('open', () => {
    console.info(`数据库连接成功：${DATABASE_URL}`)
  })
  const connection = mongoose.connect(DATABASE_URL)
  return connection
}
