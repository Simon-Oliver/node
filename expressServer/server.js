const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("I'm runing");
});

app.listen(3000);
