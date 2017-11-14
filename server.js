const express = require('express');
const app = express();
const knex = require('./knex');
const PORT = (process.env.PORT || 3000);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data', function (req, res) {
  var results = '"name","number"\n';
  return knex('data').sum('nav').where('product', 'bond')
  .then((data) => {
    results = results + '"bond",' + data[0]['sum'] + '\n';
    return knex('data').sum('nav').where('product', 'swaps')
    // return res.status(200).send(results);
  })
  .then((data) => {
    results = results + '"swaps",' + data[0]['sum'] + '\n';
    return knex('data').sum('nav').where('product', 'fx')
  })
  .then((data) => {
    results = results + '"fx",' + data[0]['sum'] + '\n';
    return knex('data').sum('nav').where('product', 'fx options')
  })
  .then((data) => {
    results = results + '"fx options",' + data[0]['sum'] + '\n';
    return knex('data').sum('nav').where('product', 'equities')
  })
  .then((data) => {
    results = results + '"equities",' + data[0]['sum'] + '\n';
    return res.status(200).send(results);
  })
})

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
})
