'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.resolveToProperty = resolveToProperty;
exports.isKeyNestedProp = isKeyNestedProp;