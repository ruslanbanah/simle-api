const { knex } = require('../../db/knex')

async function handler(req, res, next) {
  if(req.body.name) {
    await knex('users')
      .insert({
        name: req.body.name,
      })
  }
  res.json({ code: 0 })
}

module.exports = [
  handler
]