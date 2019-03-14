"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveElevation = exports.resolveZIndex = exports.resolveBoxShadow = exports.resolveColor = exports.resolveGlobal = undefined;

var _globalStyles = require("../../../global-styles");

var _objectHelpers = require("../../../utils/objectHelpers");

var _ = require("..");

var _cssDefaults = require("../cssDefaults");

/**
 *
 * @param {Object} globalOverrides Takes in global styles as an object. If the object has theme property, it will resolve to new global styled object with theme styles via getGlobalOverrides.
 * Othewise returns the global styles object as is. If undefined returns the default global style object via getGlobalStyles.
 */
var resolveGlobal = exports.resolveGlobal = function resolveGlobal() {
  var globalOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0, _globalStyles.getGlobalStyles)();
  var theme = (0, _objectHelpers.resolveToProperty)('theme', globalOverrides);
  return theme ? (0, _globalStyles.getGlobalOverrides)(globalOverrides) : globalOverrides;
};

var resolveColor = exports.resolveColor = function resolveColor(colorToResolve, globalOverrides) {
  var defaultColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _.defaultStylesBase.color;
  var globalStyles = resolveGlobal(globalOverrides);
  var colorSchema = globalStyles.colors;
  var resolvedValue = (0, _objectHelpers.isKeyNestedProp)(colorToResolve) ? (0, _objectHelpers.resolveToProperty)(colorToResolve, colorSchema) : (0, _objectHelpers.resolveToProperty)("".concat(colorToResolve, ".base"), colorSchema);
  return resolvedValue || defaultColor;
};
/*
  Grape UI Core style helpers.
*/


var resolveBoxShadow = exports.resolveBoxShadow = function resolveBoxShadow(depth, globalOverrides) {
  var _resolveGlobal = resolveGlobal(globalOverrides),
      shadowSchema = _resolveGlobal.shadow;

  if (!depth || typeof depth !== 'string') {
    return _cssDefaults.CSS_INHERIT_VALUE;
  }

  var resolvedBoxShadow = (0, _objectHelpers.resolveToProperty)(depth, shadowSchema);
  return resolvedBoxShadow || _cssDefaults.CSS_INHERIT_VALUE;
};

var resolveZIndex = exports.resolveZIndex = function resolveZIndex(depth, globalOverrides) {
  var _resolveGlobal2 = resolveGlobal(globalOverrides),
      zIndexSchema = _resolveGlobal2.zIndex;

  if (!depth || typeof depth !== 'string') {
    return _cssDefaults.CSS_INHERIT_VALUE;
  }

  var resolvedZIndex = (0, _objectHelpers.resolveToProperty)(depth, zIndexSchema);
  return resolvedZIndex || _cssDefaults.CSS_INHERIT_VALUE;
};

var resolveElevation = exports.resolveElevation = function resolveElevation(depth, globalOverrides) {
  if (!depth || typeof depth !== 'string') {
    return _cssDefaults.CSS_INHERIT_VALUE;
  }

  var resolvedBoxShadow = resolveBoxShadow(depth, globalOverrides);
  var resolvedZIndex = resolveZIndex(depth, globalOverrides);
  return "z-index: ".concat(resolvedZIndex, "; box-shadow: ").concat(resolvedBoxShadow) || _cssDefaults.CSS_INHERIT_VALUE;
};