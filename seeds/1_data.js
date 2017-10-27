exports.seed = function (knex, Promise) {
  return knex('totals').del()
  .then(() => {
    return knex('totals').insert({
      bond: 5606300,
      equities: 401030,
      fx: 15266300,
      fxoptions: 2147600,
      swaps: 46830,
    });
  })
  .then(() => {
    return knex.raw("SELECT setval('totals_id_seq', (SELECT MAX(id) FROM totals));");
  });
};
