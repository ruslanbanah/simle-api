const config = require('./config')
const app = require('./app')
const server = require('http').createServer(app)

server.listen(config.port, () => {
  console.log(`Server listening on ${config.port} port`)
})