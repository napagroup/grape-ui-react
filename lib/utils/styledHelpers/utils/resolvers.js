"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.resolveElevation = exports.resolveZIndex = exports.resolveBoxShadow = exports.resolveFontFamily = exports.resolveColor = exports.resolveBorderRadius = exports.getBorderRadiusForFormFieldType = exports.resolveGlobal = void 0;

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

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
const resolveGlobal = (globalOverrides = (0, _globalStyles.getGlobalStyles)()) => {
  const theme = (0, _objectHelpers.resolveToProperty)('theme', globalOverrides);
  return theme ? (0, _globalStyles.getGlobalOverrides)(globalOverrides) : globalOverrides;
};

exports.resolveGlobal = resolveGlobal;

const getBorderRadiusForFormFieldType = (borderRadius, formStyle) => {
  var _context;

  return formStyle === 'filled' ? (0, _concat.default)(_context = "".concat(borderRadius, " ")).call(_context, borderRadius, " 0 0") : borderRadius;
};

exports.getBorderRadiusForFormFieldType = getBorderRadiusForFormFieldType;

const resolveBorderRadius = (props, globalOverrides, defaultBorderRadius = _.defaultStylesBase.borderRadius) => {
  if (!props) {
    return getBorderRadiusForFormFieldType(defaultBorderRadius);
  } // Grape UI lg or sm options


  const globalStyles = resolveGlobal(globalOverrides);
  const borderSchema = globalStyles.border;
  const borderRadius = props.borderRadius,
        formStyle = props.formStyle,
        lg = props.lg,
        sm = props.sm;

  if (borderRadius) {
    return getBorderRadiusForFormFieldType(borderRadius, formStyle);
  }

  if (lg) {
    return getBorderRadiusForFormFieldType(borderSchema.borderRadius.lg, formStyle);
  }

  if (sm) {
    return getBorderRadiusForFormFieldType(borderSchema.borderRadius.sm, formStyle);
  }

  return getBorderRadiusForFormFieldType(borderSchema.borderRadius.base, formStyle);
};

exports.resolveBorderRadius = resolveBorderRadius;

const resolveColor = (colorToResolve, globalOverrides, defaultColor = _.defaultStylesBase.color) => {
  const globalStyles = resolveGlobal(globalOverrides);
  const colorSchema = globalStyles.colors;
  const resolvedValue = (0, _objectHelpers.isKeyNestedProp)(colorToResolve) ? (0, _objectHelpers.resolveToProperty)(colorToResolve, colorSchema) : (0, _objectHelpers.resolveToProperty)("".concat(colorToResolve, ".base"), colorSchema);
  return resolvedValue || colorToResolve || defaultColor;
};

exports.resolveColor = resolveColor;

const resolveFontFamily = (fontFamilyToResolve, globalOverrides, defaultValue) => {
  const globalStyles = resolveGlobal(globalOverrides);
  const fontFamilySchema = globalStyles.fontFamily;
  return (0, _objectHelpers.resolveToProperty)(fontFamilyToResolve, fontFamilySchema) || defaultValue;
};

exports.resolveFontFamily = resolveFontFamily;

const resolveBoxShadow = (depth, globalOverrides) => {
  const _resolveGlobal = resolveGlobal(globalOverrides),
        shadowSchema = _resolveGlobal.shadow;

  if (!depth || typeof depth !== 'string') {
    return _cssDefaults.CSS_INHERIT_VALUE;
  }

  const resolvedBoxShadow = (0, _objectHelpers.resolveToProperty)(depth, shadowSchema);
  return resolvedBoxShadow || _cssDefaults.CSS_INHERIT_VALUE;
};

exports.resolveBoxShadow = resolveBoxShadow;

const resolveZIndex = (depth, globalOverrides) => {
  const _resolveGlobal2 = resolveGlobal(globalOverrides),
        zIndexSchema = _resolveGlobal2.zIndex;

  if (!depth || typeof depth !== 'string') {
    return _cssDefaults.CSS_INHERIT_VALUE;
  }

  const resolvedZIndex = (0, _objectHelpers.resolveToProperty)(depth, zIndexSchema);
  return resolvedZIndex || _cssDefaults.CSS_INHERIT_VALUE;
};

exports.resolveZIndex = resolveZIndex;

const resolveElevation = (depth, globalOverrides) => {
  var _context2;

  const resolvedBoxShadow = resolveBoxShadow(depth, globalOverrides);
  const resolvedZIndex = resolveZIndex(depth, globalOverrides);
  return (0, _concat.default)(_context2 = "z-index: ".concat(resolvedZIndex, "; box-shadow: ")).call(_context2, resolvedBoxShadow) || _cssDefaults.CSS_INHERIT_VALUE;
};

exports.resolveElevation = resolveElevation;