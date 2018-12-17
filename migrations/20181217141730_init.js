exports.up = async function(knex, Promise) {
  return knex.transaction(trx => {
    return trx.schema
      .createTable('users', table => {
        table.increments().primary()
        table.string('name').unique().notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
      .createTable('articles', table => {
        table.increments().primary()
        table.integer('author_id').unsigned().notNullable().references('id').inTable('users')
        table.string('title').unique().notNullable()
        table.string('text').unique().notNullable()
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
      .createTable('profile', table => {
        table.increments().primary()
        table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
        table.timestamp('created_at').defaultTo(knex.fn.now())
        table.timestamp('updated_at').defaultTo(knex.fn.now())
      })
  })
}

exports.down = async function(knex, Promise) {
  await knex.raw(`
    ALTER TABLE users
    DROP COLUMN profile_id;
  `)
  await knex.raw(`
    ALTER TABLE articles
    DROP COLUMN author_id;
  `)
  await knex.raw(`
    ALTER TABLE profile
    DROP COLUMN user_id;
  `)

  await knex.schema.dropTable('users')
  await knex.schema.dropTable('articles')
  await knex.schema.dropTable('profile')

}
