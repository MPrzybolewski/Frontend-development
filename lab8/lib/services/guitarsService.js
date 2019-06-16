"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _guitar = _interopRequireDefault(require("../domain/guitar"));

var _guitarType = _interopRequireDefault(require("../domain/guitarType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GUITAR_DB = function GUITAR_DB() {
  var guitarDB = [new _guitar["default"](1, "black", "gretsch", "electric", true), new _guitar["default"](2, "white", "fender", "acoustic", false), new _guitar["default"](3, "yelow", "gibson", "eletric", false)];
  var guitarTypeDB = [new _guitarType["default"](1, "electric"), new _guitarType["default"](2, "acoustic")];

  function GetNewGuitarId() {
    var guitarIds = guitarDB.map(function (x) {
      return x.id;
    });
    return Math.max.apply(null, guitarIds) + 1;
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

  function getGuitarTypeById(id) {
    var guitarTypeString = '';
    guitarTypeDB.forEach(function (guitarType) {
      if (guitarType.id == id) {
        guitarTypeString = guitarType.name;
      }
    });
    return guitarTypeString;
  }

  return {
    showGuitars: function showGuitars() {
      console.log(guitarDB);
    },
    add: function add(guitar) {
      guitar.id = GetNewGuitarId();
      guitar.type = getGuitarTypeById(guitar.type);
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
    update: function update(guitar) {
      var guitarIndex = getGuitarIndexById(guitar.id);
      var guitarDb = guitarDB[guitarIndex];
      guitarDb.color = guitar.color;
      guitarDb.brand = guitar.brand;
      guitarDb.withStrings = guitar.withStrings;
      guitarDb.type = getGuitarTypeById(guitar.type);
      return 'guitar updated';
    },
    getAll: function getAll() {
      return guitarDB;
    },
    getGuitarTypes: function getGuitarTypes() {
      return guitarTypeDB;
    }
  };
};

var _default = GUITAR_DB;
exports["default"] = _default;