"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _guitar = _interopRequireDefault(require("../domain/guitar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GUITAR_DB = function GUITAR_DB() {
  var guitarDB = [new _guitar["default"](1, "black", "gretsch", "test", true), new _guitar["default"](2, "white", "fender", "test", false), new _guitar["default"](3, "yelow", "gibson", "test", false)];

  function isGuitarCurrentlyExist(guitar) {
    return guitarDB.some(function (x) {
      return x.id == guitar.id;
    });
  }

  function getGuitarIndexById(id) {
    var guitarIndex = -1;
    guitarDB.forEach(function (guitar) {
      if (guitar.id === id) {
        guitarIndex = guitarDB.indexOf(guitar);
      }
    });
    return guitarIndex;
  }

  return {
    showGuitars: function showGuitars() {
      console.log(guitarDB);
    },
    add: function add(guitar) {
      if (isGuitarCurrentlyExist(guitar)) {
        return 'Guitar with this ID already exists!';
      }

      guitarDB.push(guitar);
      return guitar;
    },
    remove: function remove(id) {
      var guitarIndex = getGuitarIndexById(id);

      if (guitarIndex !== -1) {
        guitarDB.splice(guitarIndex, 1);
        return 'Guitar removed';
      }

      return 'Guitar not exists in database';
    },
    getById: function getById(id) {
      var guitarIndex = getGuitarIndexById(id);

      if (guitarIndex !== -1) {
        return guitarDB[guitarIndex];
      } else {
        return 'Guitar not exists';
      }
    },
    updateGuitarColor: function updateGuitarColor(guitar, color) {
      guitarDB[guitarDB.indexOf(guitar)].color = color;
    },
    getAll: function getAll() {
      return guitarDB;
    },
    getByType: function getByType(type) {}
  };
};

var _default = GUITAR_DB;
exports["default"] = _default;