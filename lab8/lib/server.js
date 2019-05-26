"use strict";

var _guitarsService = _interopRequireDefault(require("./services/guitarsService"));

var _guitar = _interopRequireDefault(require("./domain/guitar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var express = require('express');

var bodyParser = require('body-parser');

var cors = require('cors');

var app = express();
var port = 4000;
var guitarDB = (0, _guitarsService["default"])();
app.use(bodyParser.json());
app.use(cors());
app.get('/api/guitars/all', function (req, res) {
  res.send(guitarDB.getAll());
});
app.post('/api/guitars', function (req, res) {
  var id = req.body.guitar.id;
  var color = req.body.guitar.color;
  var brand = req.body.guitar.brand;
  var type = req.body.guitar.type;
  var withStrings = req.body.guitar.withStrings;
  var newGuitar = new _guitar["default"](id, color, brand, type, withStrings);
  res.send(guitarDB.add(newGuitar));
});
app["delete"]('/api/guitars', function (req, res) {
  var id = req.body.id;
  res.send(guitarDB.remove(id));
});
app.listen(port, function () {
  return console.log("Example app listening on port ".concat(port));
});