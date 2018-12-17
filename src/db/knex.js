const Knex = require('knex')
const config = require('../config')

const knex = Knex({
  client: 'pg',
  connection: config.database,
  acquireConnectionTimeout: 30000,
  pool: { min: 0, max: 10 },
})

exports.knex = knex