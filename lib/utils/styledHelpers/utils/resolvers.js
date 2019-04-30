"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveElevation = exports.resolveZIndex = exports.resolveBoxShadow = exports.resolveFontFamily = exports.resolveColor = exports.resolveBorderRadius = exports.getBorderRadiusForFormFieldType = exports.resolveGlobal = undefined;

var _globalStyles = require("../../../global-styles");

var _objectHelpers = require("../../../utils/objectHelpers");

var _ = require("..");

var _cssDefaults = require("../cssDefaults");

/**
 * Grape UI Core style helpers.
 */

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

var getBorderRadiusForFormFieldType = exports.getBorderRadiusForFormFieldType = function getBorderRadiusForFormFieldType(borderRadius, formStyle) {
  return formStyle === 'filled' ? "".concat(borderRadius, " ").concat(borderRadius, " 0 0") : borderRadius;
};

var resolveBorderRadius = exports.resolveBorderRadius = function resolveBorderRadius(props, globalOverrides) {
  var defaultBorderRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _.defaultStylesBase.borderRadius;

  if (!props) {
    return getBorderRadiusForFormFieldType(defaultBorderRadius);
  } // Grape UI lg or sm options


  var globalStyles = resolveGlobal(globalOverrides);
  var borderSchema = globalStyles.border;
  var formStyle = props.formStyle,
      lg = props.lg,
      sm = props.sm;

  if (lg) {
    return getBorderRadiusForFormFieldType(borderSchema.borderRadius.lg, formStyle);
  }

  if (sm) {
    return getBorderRadiusForFormFieldType(borderSchema.borderRadius.sm, formStyle);
  } // User specified or base value


  var borderRadius = props.borderRadius;
  return getBorderRadiusForFormFieldType(borderRadius || borderSchema.borderRadius.base, formStyle);
};

var resolveColor = exports.resolveColor = function resolveColor(colorToResolve, globalOverrides) {
  var defaultColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _.defaultStylesBase.color;
  var globalStyles = resolveGlobal(globalOverrides);
  var colorSchema = globalStyles.colors;
  var resolvedValue = (0, _objectHelpers.isKeyNestedProp)(colorToResolve) ? (0, _objectHelpers.resolveToProperty)(colorToResolve, colorSchema) : (0, _objectHelpers.resolveToProperty)("".concat(colorToResolve, ".base"), colorSchema);
  return resolvedValue || defaultColor;
};

var resolveFontFamily = exports.resolveFontFamily = function resolveFontFamily(fontFamilyToResolve, globalOverrides, defaultValue) {
  var globalStyles = resolveGlobal(globalOverrides);
  var fontFamilySchema = globalStyles.fontFamily;
  return (0, _objectHelpers.resolveToProperty)(fontFamilyToResolve, fontFamilySchema) || defaultValue;
};

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
}; // TODO: This function below needs to be fixed becuase one path returns just the value and another returns properties and values.


var resolveElevation = exports.resolveElevation = function resolveElevation(depth, globalOverrides) {
  if (!depth || typeof depth !== 'string') {
    return _cssDefaults.CSS_INHERIT_VALUE;
  }

  var resolvedBoxShadow = resolveBoxShadow(depth, globalOverrides);
  var resolvedZIndex = resolveZIndex(depth, globalOverrides);
  return "z-index: ".concat(resolvedZIndex, "; box-shadow: ").concat(resolvedBoxShadow) || _cssDefaults.CSS_INHERIT_VALUE;
};