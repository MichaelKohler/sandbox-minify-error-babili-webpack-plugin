var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
  next(new Error('hiiii im wrong!'));
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  console.log('let me log myself.. I should be fine, right?', err);
  res.json({message: err.message, error: {}});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
