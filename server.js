const express = require("express");
const db = require('sqlite')
const Promise = require('bluebird')

const app = express();
const port = process.env.PORT || 3000;

app.get('/data', async (req, res, next) => {
  try {
    const data = await db.all('SELECT * FROM totals'); // <=
    res.send(data);
  } catch (err) {
    next(err);
  }
});

Promise.resolve()
  // First, try to open the database
  .then(() => db.open('./database.sqlite', { Promise }))      // <=
  // Update db schema to the latest version using SQL-based migrations
  .then(() => db.migrate({ force: 'last' }))                  // <=
  // Display error message if something went wrong
  .catch((err) => console.error(err.stack))
  // Finally, launch the Node.js app
  .finally(() => {
    app.listen(port)
    if (app.get('env') === 'development') {
      console.log('App listening on port', port);
    }
  });
