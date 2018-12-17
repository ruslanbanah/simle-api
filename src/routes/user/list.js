const { knex } = require('../../db/knex')

async function handler(req, res, next) {
  const data = await knex.select('*').from('users')
  res.json(data)
}

module.exports = [
  handler
]