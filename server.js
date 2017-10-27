const port = process.env.PORT || 3000;
const express = require('express')
const app = express()
const knex = require('./knex')

app.get('/data', function (req, res) {
  res.send('hello')
  // return knex('totals').select('*')
  // .then((data) => {
  //   return res.status(200).send(data);
  // })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
