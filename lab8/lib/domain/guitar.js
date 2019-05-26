"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Guitar =
/*#__PURE__*/
function () {
  function Guitar(id, color, brand, type, withStrings) {
    _classCallCheck(this, Guitar);

    this.id = id;
    this.color = color;
    this.brand = brand;
    this.type = type;
    this.withStrings = withStrings;
    this.sound = "la";
  }

  _createClass(Guitar, [{
    key: "play",
    value: function play() {
      console.log(this._sound);
    }
  }]);

  return Guitar;
}();

exports["default"] = Guitar;