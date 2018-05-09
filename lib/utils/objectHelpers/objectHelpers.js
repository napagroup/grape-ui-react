'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
* Allows access to nested JavaScript objects with a string key.
* Example usage:
* resolve("document.body.style.width")
* resolve("style.width", document.body)
*/
var resolve = function resolve(path, obj) {
  return path.split('.').reduce(function (prev, curr) {
    return prev ? prev[curr] : undefined;
  }, obj);
};

var isKeyNestedProp = function isKeyNestedProp(path) {
  return path.indexOf('.') > -1;
};

exports.resolve = resolve;
exports.isKeyNestedProp = isKeyNestedProp;