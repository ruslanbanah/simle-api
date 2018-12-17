const {connection} = require('../knexfile')
const exec = require('child_process').exec

let cmd = `dropdb --if-exists ${connection.database}`
try {
  exec(cmd)
} catch (e) {
  throw new Error(e)
}
