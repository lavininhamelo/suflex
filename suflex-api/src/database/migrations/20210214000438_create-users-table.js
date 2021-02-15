exports.up = function (knex) {
  return knex.schema.createTable('usuarios', (table) => {
    table.increments('id')
    table.text('nome')
    table.text('sobrenome')
    table.text('username')
    table.text('senha')
    table.text('salt')
    table.timestamp('datacriacao').defaultTo(knex.fn.now())
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('usuarios')
}
