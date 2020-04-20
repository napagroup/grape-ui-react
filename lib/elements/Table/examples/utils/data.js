"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.makeData = makeData;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context3; (0, _forEach["default"])(_context3 = ownKeys(Object(source))).call(_context3, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var range = function range(len) {
  var arr = [];

  for (var i = 0; i < len; i++) {
    arr.push(i);
  }

  return arr;
};

var names = ['Ann', 'Alfred', 'Amanda', 'Betty', 'Bob', 'Brian', 'Christine', 'David', 'Debra', 'Elizabeth', 'Eugene', 'Heather', 'Helen', 'James', 'Jennifer', 'Jill', 'Kevin', 'Kimberly', 'Lisa', 'Mark', 'Mary', 'Michelle', 'Nicholas', 'Pamela', 'Patricia', 'Ralph', 'Sally', 'Sarah', 'Scott', 'Stacy', 'Tina', 'Wayne'];
var lastNames = ['Allen', 'Anderson', 'Brown', 'Cook', 'Davis', 'Flores', 'Garcia', 'Henderson', 'Hill', 'Jenkins', 'Johnson', 'Lee', 'Morris', 'Miller', 'Patterson', 'Perry', 'Roberts', 'Smith', 'Taylor', 'Thompson', 'Walker', 'Washington'];

var getStatus = function getStatus(statusChance) {
  if (statusChance > 0.66) {
    return 'Relationship';
  }

  return statusChance > 0.33 ? 'Complicated' : 'Single';
};

var newPerson = function newPerson() {
  return {
    age: 18 + Math.floor(Math.random() * 30),
    firstName: names[Math.floor(Math.random() * names.length)],
    lastName: lastNames[Math.floor(Math.random() * lastNames.length)],
    progress: Math.floor(Math.random() * 100),
    status: getStatus(Math.random()),
    visits: Math.floor(Math.random() * 100)
  };
};

function makeData() {
  for (var _len = arguments.length, lens = new Array(_len), _key = 0; _key < _len; _key++) {
    lens[_key] = arguments[_key];
  }

  var makeDataLevel = function makeDataLevel() {
    var _context;

    var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var len = lens[depth];
    return (0, _map["default"])(_context = range(len)).call(_context, function () {
      return _objectSpread({}, newPerson(), {
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      });
    });
  };

  return makeDataLevel();
}