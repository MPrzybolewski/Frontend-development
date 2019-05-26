"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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