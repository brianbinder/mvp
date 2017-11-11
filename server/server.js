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

app.post('/submitLogin', function(req, res) {
  dbHelp.logInOrCreateUser(req.body.username, req.body.password, (result) => {
    console.log(result);
    res.send(result);
  })
});

app.post('/submitNewPost', function(req, res) {
  console.log(req.body);
  db.savePost(req.body, (err) => {
    if (err) { throw err; }
    res.send();
  });
});

app.listen(port);