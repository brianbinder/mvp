var express = require('express');
var app = express();

var port = 1117;

app.use(express.static('public'));

app.get('/users', function(req, res) {
  var users = ['Tom', 'John', 'Jerry'];
  res.send(users);
});

// app.get('/', function (req, res) {
//   res.send('You found the server');
// });


app.listen(port);