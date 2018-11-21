const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now} ${req.method} ${req.url}`;

  fs.appendFile('server.log', log + '\n', err => {
    if (err) {
      console.log(err);
    }
  });

  console.log(log);
  next();
});

// app.use((req, res, next) => {
//   res.render('maintenance');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', text => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  const data = {
    welcome: 'Hi!!! You have found my website!'
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

app.get('/projects', (req, res) => {
  const projectData = {
    project: ['Project 1', 'Project 2', 'Project 3']
  };
  res.render('projects', { projectData });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
