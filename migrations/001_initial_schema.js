exports.up = function (knex) {
  return knex.schema.createTable('data', (table) => {
    table.increments();
    table.string('product').notNullable().defaultTo('');
    table.string('region').notNullable().defaultTo('');
    table.string('sector').notNullable().defaultTo('');
    table.string('currency').notNullable().defaultTo('');
    table.string('ticker').notNullable().defaultTo('');
    table.integer('price').notNullable().defaultTo(0);
    table.integer('quanity').notNullable().defaultTo(0);
    table.integer('cost').notNullable().defaultTo(0);
    table.integer('nav').notNullable().defaultTo(0);
    table.integer('pnl').notNullable().defaultTo(0);
    table.integer('benchmark').notNullable().defaultTo(0);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('data');
};
