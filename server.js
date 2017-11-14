const express = require('express')
const app = express()
const knex = require('./knex')
var json2csv = require('json2csv');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data', function (req, res) {
  return knex('data').select('*')
  .then((data) => {
    delete data[0].id;
    // var fields = ["bond","equities","fx","fxoptions","swaps"]
    let results = '"name","number"\n"bond",5606300\n"equities",401030\n"fx",15266300\n"fxoptions",2147600\n"swaps",468300\n'
    // var result = json2csv({ data: data, fields: fields});
    return res.status(200).send(data);
  })
})

app.listen( process.env.PORT||3000, function () {
  console.log('Example app listening on port 3000!')
})
