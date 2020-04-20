import "core-js/modules/es.regexp.exec";
import "core-js/modules/es.string.split";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reduce";

/*
* Allows access to nested JavaScript objects with a string key.
* Example usage:
* resolveToProperty("style.width", document.body)
*/
var resolveToProperty = function resolveToProperty(path, obj) {
  var _context;

  return typeof path !== 'string' ? undefined : _reduceInstanceProperty(_context = path.split('.')).call(_context, function (prev, curr) {
    return prev ? prev[curr] : undefined;
  }, obj);
};
/**
 * Returns true if path is represented as a nested prop. Otherwise false.
 * @param {string} path the string representation of a path to the nested property.
 */


var isKeyNestedProp = function isKeyNestedProp(path) {
  return /[a-zA-Z_](\w*\.[a-z_]\w*)+/i.test(path);
};

export { resolveToProperty, isKeyNestedProp };