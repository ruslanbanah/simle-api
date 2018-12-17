const {database} = require('./src/config')

module.exports = {
  client: 'pg',
  connection: database,
}