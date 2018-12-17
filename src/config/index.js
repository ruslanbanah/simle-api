const {parse} = require('pg-connection-string')
const DATABASE_URL = process.env.DATABASE_URL || `postgresql://localhost/my-lib`

module.exports = {
  port: 8080,
  database: parse(DATABASE_URL)
}