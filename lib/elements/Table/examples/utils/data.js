import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _mapInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/map";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source), true)).call(_context2, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context3; _forEachInstanceProperty(_context3 = ownKeys(Object(source))).call(_context3, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

export function makeData() {
  for (var _len = arguments.length, lens = new Array(_len), _key = 0; _key < _len; _key++) {
    lens[_key] = arguments[_key];
  }

  var makeDataLevel = function makeDataLevel() {
    var _context;

    var depth = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var len = lens[depth];
    return _mapInstanceProperty(_context = range(len)).call(_context, function () {
      return _objectSpread({}, newPerson(), {
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined
      });
    });
  };

  return makeDataLevel();
}