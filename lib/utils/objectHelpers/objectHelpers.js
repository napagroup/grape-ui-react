"use strict";

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.regexp.exec");

require("core-js/modules/es.string.split");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isKeyNestedProp = exports.resolveToProperty = void 0;

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
/**
 * Returns true if path is represented as a nested prop. Otherwise false.
 * @param {string} path the string representation of a path to the nested property.
 */


exports.resolveToProperty = resolveToProperty;

var isKeyNestedProp = function isKeyNestedProp(path) {
  return /[a-zA-Z_](\w*\.[a-z_]\w*)+/i.test(path);
};

exports.isKeyNestedProp = isKeyNestedProp;