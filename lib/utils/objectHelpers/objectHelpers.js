"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.split");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.isKeyNestedProp = exports.resolveToProperty = void 0;

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

/*
* Allows access to nested JavaScript objects with a string key.
* Example usage:
* resolveToProperty("style.width", document.body)
*/
var resolveToProperty = function resolveToProperty(path, obj) {
  var _context;

  return typeof path !== 'string' ? undefined : (0, _reduce["default"])(_context = path.split('.')).call(_context, function (prev, curr) {
    return prev ? prev[curr] : undefined;
  }, obj);
};
/**
 * Returns true if path is represented as a nested prop. Otherwise false.
 * @param {string} path the string representation of a path to the nested property.
 */


exports.resolveToProperty = resolveToProperty;

var isKeyNestedProp = function isKeyNestedProp(path) {
  return /[a-zA-Z_](\w*\.[a-z_]\w*)+/i.test(path);
};

exports.isKeyNestedProp = isKeyNestedProp;