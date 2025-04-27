import { createServer } from 'node:http'

const host = 'localhost'
const port = 3000
const server = createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello HTTP world!')
})

server.listen(port, host, () => {
  console.log(`服务器运行在http://${host}:${port}`)
})
