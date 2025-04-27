import { readFileSync } from 'node:fs'
import { createServer } from 'node:http'

const port = 3000
const host = 'localhost'
const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(readFileSync('./users.json'))
})

server.listen(port, host, () => {
  console.log(`服务器运行在：http://${host}:${port}`)
})
