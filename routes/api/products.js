var express = require('express');
var lodash = require('lodash');
var data = require('../../data/products');
var router = express.Router();

router.get('/', function (req, res) {
  res.json(data);
});

router.get('/:id', function (req, res) {
  var idProduct = req.params.id;
  var product = lodash.filter(data.list, function (a) {
    return a.id == idProduct;
  });
    res.send(product);
});

module.exports = router;
