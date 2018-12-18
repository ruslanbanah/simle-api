const Knex = require('knex')
const config = require('../config')

const knex = Knex({
  client: 'mysql',
  connection: config.connection,
})

exports.knex = knex