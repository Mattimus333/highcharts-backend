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
  var results = '"name","nav total","total eur","total usd","total inr"\n';
  var bondString = '"bond",';
  var swapsString = '"swaps",';
  var fxString = '"fx",';
  var fxoptionsString = '"fx options",';
  var equitiesString = '"equities",';

  // return knex('data').select('product','nav', 'currency')
  // .then((data) => {
  //
  // })
  return knex('data').sum('nav').where('product', 'bond')
  .then((data) => {
    bondString = bondString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'eur','product':'bond'})
  })
  .then((data) => {
    bondString = bondString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'usd','product':'bond'})
  })
  .then((data) => {
    bondString = bondString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'inr','product':'bond'})
  })
  .then((data) => {
    bondString = bondString + data[0]['sum'] + '\n';
    return knex('data').sum('nav').where('product', 'swaps')
  })
  .then((data) => {
    swapsString = swapsString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'eur','product':'swaps'})
  })
  .then((data) => {
    swapsString = swapsString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'usd','product':'swaps'})
  })
  .then((data) => {
    swapsString = swapsString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'inr','product':'swaps'})
  })
  .then((data) => {
    swapsString = swapsString + data[0]['sum'] + '\n';
    return knex('data').sum('nav').where('product', 'fx')
  })
  .then((data) => {
    fxString = fxString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'eur','product':'fx'})
  })
  .then((data) => {
    fxString = fxString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'usd','product':'fx'})
  })
  .then((data) => {
    fxString = fxString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'inr','product':'fx'})
  })
  .then((data) => {
    fxString = fxString + data[0]['sum'] + '\n';
    return knex('data').sum('nav').where('product', 'fx options')
  })
  .then((data) => {
    fxoptionsString = fxoptionsString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'eur','product':'fx options'})
  })
  .then((data) => {
    fxoptionsString = fxoptionsString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'usd','product':'fx options'})
  })
  .then((data) => {
    fxoptionsString = fxoptionsString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'inr','product':'fx options'})
  })
  .then((data) => {
    fxoptionsString = fxoptionsString + data[0]['sum'] + '\n';
    return knex('data').sum('nav').where('product', 'equities')
  })
  .then((data) => {
    equitiesString = equitiesString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'eur','product':'equities'})
  })
  .then((data) => {
    equitiesString = equitiesString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'usd','product':'equities'})
  })
  .then((data) => {
    equitiesString = equitiesString + data[0]['sum'] + ',';
    return knex('data').sum('nav').where({'currency':'inr','product':'equities'})
  })
  .then((data) => {
    equitiesString = equitiesString + data[0]['sum'] + '\n';
    results = results + bondString + swapsString + fxString + fxoptionsString + equitiesString;
    return res.status(200).send(results);
  });
  // .then((data) => {
  //   results = results + '"fx",' + data[0]['sum'] + '\n';
  //   return knex('data').sum('nav').where('product', 'fx options')
  // })
  // .then((data) => {
  //   results = results + '"fx options",' + data[0]['sum'] + '\n';
  //   return knex('data').sum('nav').where('product', 'equities')
  // })
  // .then((data) => {
  //   results = results + '"equities",' + data[0]['sum'] + '\n';
  //   return res.status(200).send(results);
});

app.listen(PORT, () => {
  console.log('Example app listening on port 3000!');
});
