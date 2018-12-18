const {parse} = require('pg-connection-string')

module.exports = {
  port: 8081,
  database: {
    host : '127.0.0.1',
    user : 'your_database_user',
    password : 'your_database_password',
    database : 'mylib'
  }
}