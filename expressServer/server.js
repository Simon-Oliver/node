const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  const data = {
    welcome: 'Hi!!! You have found my website!',
    currentYear: new Date().getFullYear()
  };
  res.render('home', { data });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'Whoops!!! Something went wrong!'
  });
});

app.get('/about', (req, res) => {
  const user = {
    name: 'Simon',
    hobbies: ['Coding', 'Photography']
  };
  res.render('about', { user });
});

app.listen(3000);
