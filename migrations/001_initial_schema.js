exports.up = function (knex) {
  return knex.schema.createTable('totals', (table) => {
    table.increments();
    table.integer('bond').notNullable().defaultTo(0);
    table.integer('equities').notNullable().defaultTo(0);
    table.integer('fx').notNullable().defaultTo(0);
    table.integer('fxoptions').notNullable().defaultTo(0);
    table.integer('swaps').notNullable().defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('totals');
};
