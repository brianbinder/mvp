var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var port = 1117;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/users', function(req, res) {
  var users = ['Tom', 'John', 'Jerry'];
  res.send(users);
});

app.post('/submitNewUser', function(req, res) {
  console.log(req.body.newUserName);
  res.redirect('/');
});

// app.get('/', function (req, res) {
//   res.send('You found the server');
// });


app.listen(port);