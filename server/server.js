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
    console.log(users);
    res.send(users);
  });
});

app.post('/submitNewUser', function(req, res) {
  console.log(req.body.newUsername);
  db.saveUser(req.body.newUsername, req.body.newPassword, (err) => {
    if (err) {
      res.write(err);
    } else {
      console.log('saved ', req.body.newUsername, ' and ', req.body.newPassword);
      res.redirect('/');
    }
  });
});

// app.get('/', function (req, res) {
//   res.send('You found the server');
// });


app.listen(port);