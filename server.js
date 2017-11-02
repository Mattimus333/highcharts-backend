const express = require('express')
const app = express()
const knex = require('./knex')

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data', function (req, res) {
  return knex('totals').select('*')
  .then((data) => {
    delete data[0].id;
    return res.status(200).send(data);
  })
})

app.listen( process.env.PORT||3000, function () {
  console.log('Example app listening on port 3000!')
})
