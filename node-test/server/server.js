const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'ToDo'
  });
});

app.get('/users', (req, res) => {
  res
    .status(200)
    .send([
      { name: 'Max', age: 34 },
      { name: 'Anna', age: 14 },
      { name: 'Hans', age: 84 }
    ]);
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

module.exports.app = app;
