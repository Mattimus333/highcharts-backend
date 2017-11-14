const data = require('../dataArray');
console.log(data);
exports.seed = function (knex, Promise) {
  return knex('data').del()
  .then(() => {
    return knex('data').insert(data);
  })
  .then(() => {
    return knex.raw("SELECT setval('data_id_seq', (SELECT MAX(id) FROM data));");
  });
};
