var express = require('express');
var router = express.Router();

router.get('/hello', function (req, res) {
  var html = '<h1>Hello '+Date.now();
  html += '<img src= "http://localHost:3000/static/googlelogo.png " />';
  html += '</h1>';
  res.send(html);
});

router.get('/test', function (req, res) {
  var html = '<h1>Test '+Date.now()+ '</h1>';
  html += '<button id="press">Press</button>';
  html += '<p id="p">Texto de relleno</p>'
  html += '<script src="http://localHost:3000/static/libs/jquery-3.3.1.min.js"></script>'
  html += '<script src="http://localHost:3000/static/test.js"></script>'
  res.send(html);
});

router.get('/bye', function (req, res) {
  var html = '<h1>BYE BYE!</h1>';
  res.status(401).send(html);
});

module.exports = router;
