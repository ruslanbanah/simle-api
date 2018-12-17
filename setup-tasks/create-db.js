const {connection} = require('../knexfile')
const exec = require('child_process').exec

let cmd = `createdb ${connection.database}`
try {
  exec(cmd)
} catch (e) {
  throw new Error(e)
}
