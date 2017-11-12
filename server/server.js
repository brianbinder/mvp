var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var db = require('../database/index.js');
var dbHelp = require('../database/helper.js');
var app = express();

var port = 1117;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));


app.get('/users', function(req, res) {
  console.log('get users path: ', req.path);

  db.retrieveUsers(null, (err, users) => {
    if (err) { console.log('error server.js get /users', err); }
    res.send(users);
  });
});

app.get('/posts', function(req, res) {
  db.retrievePosts(null, (err, posts) => {
    if (err) { console.log('error server.js get /posts', err) }
    res.send(posts);
  });
});

app.use((req, res, next) => {
  if (req.path.indexOf('/posts') !== -1 && req.method === 'GET') {
    var username = req.path.slice(7);
    db.retrievePosts(username, (err, posts) => {
      if (err) { console.log('error server.js get /posts', err) }
      res.send(posts);
    });
  } else {
    next();
  }

app.post('/logOut', function(req, res) {
  req.session.destroy();
  res.send();
});

});

app.post('/submitLogin', function(req, res) {
  dbHelp.logInOrCreateUser(req.body.username, req.body.password, (result) => {
    if (result) {
      req.session.username = req.body.username;
    }
    res.send(result);
  })
});

app.post('/submitNewPost', function(req, res) {
  if (req.session.username === req.body.username) {
    db.savePost(req.body, (err) => {
      if (err) { throw err; }
      res.send();
    });
  } else {
    res.redirect('/');
  }
});

app.listen(port);