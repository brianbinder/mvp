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
    console.log('users, server.js ln14: ', users);
    res.send(users);
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



app.listen(port);