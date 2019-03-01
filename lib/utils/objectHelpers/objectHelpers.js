'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

/*
* Allows access to nested JavaScript objects with a string key.
* Example usage:
* resolveToProperty("style.width", document.body)
*/
var resolveToProperty = function resolveToProperty(path, obj) {
  return typeof path !== 'string' ? undefined : path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : undefined;
  }, obj);
};

var isKeyNestedProp = function isKeyNestedProp(path) {
  return (/[a-zA-Z_](\w*\.[a-z_]\w*)+/i.test(path)
  );
};

/**
 *  Tests for existence of nested object key.
 * @param {object} obj The object in test.
 * @param {Array.<string>} args The array of nested object keys.
 * Example use: var test = {level1:{level2:{level3:'level3'}} };
 * checkNested(test, ['level1', 'level2', 'level3']); // true
 * checkNested(test, ['level1', 'level2', 'foo']); // false
 */
var checkNested = function checkNested(obj, _ref) {
  var _ref2 = _toArray(_ref),
      args = _ref2.slice(0);

  var next = obj;
  for (var i = 0; i < args.length; i++) {
    if (!next || !next.hasOwnProperty(args[i])) {
      // eslint-disable-line no-prototype-builtins
      return false;
    }
    next = next[args[i]];
  }
  return true;
};
exports.checkNested = checkNested;
exports.resolveToProperty = resolveToProperty;
exports.isKeyNestedProp = isKeyNestedProp;