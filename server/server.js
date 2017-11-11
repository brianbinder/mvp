var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');
var app = express();

var port = 1117;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', function(req, res) {
  db.retrieveUsers((users) => {
    res.send(users);
  });
});

app.get('/posts', function(req, res) {
  db.retrievePosts(null, (posts) => {
    console.log('posts, server.js line 20: ', posts);
    res.send(posts);
  });
});

app.post('/submitNewUser', function(req, res) {
  db.saveUser(req.body.username, req.body.password, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('saved ', req.body.username, ' and ', req.body.password);
    }
    res.redirect('/');
  });
});

app.post('/submitNewPost', function(req, res) {
  console.log(req.body);
  db.savePost(req.body, (err) => {
    if (err) { throw err; }
    res.send();
  });
});

app.listen(port);