var express = require('express');
var app = express();

var port = 1117;

app.get('/', function (req, res) {
  res.send('You found the server');
});


app.listen(port);