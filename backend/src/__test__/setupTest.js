import { MongoMemoryServer } from 'mongodb-memory-server'
import mongoose from 'mongoose'
import { afterAll, beforeAll } from 'vitest'

let mongoServer

// 在所有测试开始之前，启动内存mongodb服务器，并使用mongoose连接数据库
beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  const uri = mongoServer.getUri()
  await mongoose.connect(uri)
})

// afterEach(async () => {
//   const collections = mongoose.connection.collections
//   for (const key in collections) {
//     await collections[key].deleteMany({})
//   }
// })

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})
