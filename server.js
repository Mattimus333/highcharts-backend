const express = require('express')
const app = express()
const knex = require('./knex')

app.get('/data', function (req, res) {
  return knex('totals').select('*')
  .then((data) => {
    return res.status(200).send(data);
  })
})

app.listen( process.env.PORT||3000, function () {
  console.log('Example app listening on port 3000!')
})
