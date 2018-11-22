const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'ToDo'
  });
});

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});

module.exports.app = app;
