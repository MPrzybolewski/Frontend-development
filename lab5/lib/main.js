"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Guitar =
/*#__PURE__*/
function () {
  function Guitar(id, color, brand, type, withStrings) {
    _classCallCheck(this, Guitar);

    this._id = id;
    this._color = color;
    this._brand = brand;
    this._type = type;
    this._withStrings = withStrings;
    this._sound = "la";
  }

  _createClass(Guitar, [{
    key: "play",
    value: function play() {
      console.log(this._sound);
    }
  }, {
    key: "color",
    set: function set(value) {
      this._color = value;
    },
    get: function get() {
      return this._color;
    }
  }, {
    key: "brand",
    set: function set(value) {
      this._brand = value;
    },
    get: function get() {
      return this.brand;
    }
  }, {
    key: "type",
    set: function set(value) {
      this._type = value;
    },
    get: function get() {
      return this.type;
    }
  }, {
    key: "withString",
    set: function set(value) {
      this._withStrings = value;
    },
    get: function get() {
      return this.withString;
    }
  }]);

  return Guitar;
}();

var GuitarType =
/*#__PURE__*/
function () {
  function GuitarType(id, name) {
    _classCallCheck(this, GuitarType);

    this._id = id;
    this._name = name;
  }

  _createClass(GuitarType, [{
    key: "id",
    set: function set(value) {
      this._id = value;
    },
    get: function get() {
      return this._id;
    }
  }, {
    key: "name",
    set: function set(value) {
      this._name = value;
    },
    get: function get() {
      return this._name;
    }
  }]);

  return GuitarType;
}();

var ElectricGuitar =
/*#__PURE__*/
function (_Guitar) {
  _inherits(ElectricGuitar, _Guitar);

  function ElectricGuitar(id, color, brand, type, withStrings, withAmplifire) {
    var _this;

    _classCallCheck(this, ElectricGuitar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ElectricGuitar).call(this, id, color, brand, type, withStrings));
    _this._withAmplifire = withAmplifire;
    _this._sound = "wow";

    _this.addGuitarEffect = function (value) {
      _this._sound = "".concat(_this._sound, " ").concat(value);
    };

    return _this;
  }

  _createClass(ElectricGuitar, [{
    key: "withAmplifire",
    set: function set(value) {
      this._withAmplifire = value;
    },
    get: function get() {
      return this._withAmplifire;
    }
  }]);

  return ElectricGuitar;
}(Guitar);

var lesPaulType = new GuitarType(1, "Les Paul");
var hollowBodyType = new GuitarType(2, "Hollow Body");
var electric = new ElectricGuitar(1, "brown", "gretsch", lesPaulType, true);
electric.play();
electric.addGuitarEffect("BUM");
electric.play();