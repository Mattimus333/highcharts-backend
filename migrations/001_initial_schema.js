exports.up = function (knex) {
  return knex.schema.createTable('data', (table) => {
    table.increments();
    table.string('Product').notNullable().defaultTo('');
    table.string('Region').notNullable().defaultTo('');
    table.string('Sector').notNullable().defaultTo('');
    table.string('Currency').notNullable().defaultTo('');
    table.string('Ticker').notNullable().defaultTo('');
    table.string('Price').notNullable().defaultTo('');
    table.string('Quanity').notNullable().defaultTo('');
    table.string('COST').notNullable().defaultTo('');
    table.string('NAV').notNullable().defaultTo('');
    table.string('PNL').notNullable().defaultTo('');
    table.string('Benchmark').notNullable().defaultTo('');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('data');
};
