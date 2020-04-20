import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";

/**
 * Grape UI Core style helpers.
 */
import { getGlobalStyles, getGlobalOverrides } from 'src/global-styles';
import { isKeyNestedProp, resolveToProperty } from 'src/utils/objectHelpers';
import { defaultStylesBase } from '..';
import { CSS_INHERIT_VALUE } from '../cssDefaults';
/**
 *
 * @param {Object} globalOverrides Takes in global styles as an object. If the object has theme property, it will resolve to new global styled object with theme styles via getGlobalOverrides.
 * Othewise returns the global styles object as is. If undefined returns the default global style object via getGlobalStyles.
 */

export var resolveGlobal = function resolveGlobal() {
  var globalOverrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getGlobalStyles();
  var theme = resolveToProperty('theme', globalOverrides);
  return theme ? getGlobalOverrides(globalOverrides) : globalOverrides;
};
export var getBorderRadiusForFormFieldType = function getBorderRadiusForFormFieldType(borderRadius, formStyle) {
  var _context;

  return formStyle === 'filled' ? _concatInstanceProperty(_context = "".concat(borderRadius, " ")).call(_context, borderRadius, " 0 0") : borderRadius;
};
export var resolveBorderRadius = function resolveBorderRadius(props, globalOverrides) {
  var defaultBorderRadius = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStylesBase.borderRadius;

  if (!props) {
    return getBorderRadiusForFormFieldType(defaultBorderRadius);
  } // Grape UI lg or sm options


  var globalStyles = resolveGlobal(globalOverrides);
  var borderSchema = globalStyles.border;
  var borderRadius = props.borderRadius,
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
export var resolveColor = function resolveColor(colorToResolve, globalOverrides) {
  var defaultColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultStylesBase.color;
  var globalStyles = resolveGlobal(globalOverrides);
  var colorSchema = globalStyles.colors;
  var resolvedValue = isKeyNestedProp(colorToResolve) ? resolveToProperty(colorToResolve, colorSchema) : resolveToProperty("".concat(colorToResolve, ".base"), colorSchema);
  return resolvedValue || colorToResolve || defaultColor;
};
export var resolveFontFamily = function resolveFontFamily(fontFamilyToResolve, globalOverrides, defaultValue) {
  var globalStyles = resolveGlobal(globalOverrides);
  var fontFamilySchema = globalStyles.fontFamily;
  return resolveToProperty(fontFamilyToResolve, fontFamilySchema) || defaultValue;
};
export var resolveBoxShadow = function resolveBoxShadow(depth, globalOverrides) {
  var _resolveGlobal = resolveGlobal(globalOverrides),
      shadowSchema = _resolveGlobal.shadow;

  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }

  var resolvedBoxShadow = resolveToProperty(depth, shadowSchema);
  return resolvedBoxShadow || CSS_INHERIT_VALUE;
};
export var resolveZIndex = function resolveZIndex(depth, globalOverrides) {
  var _resolveGlobal2 = resolveGlobal(globalOverrides),
      zIndexSchema = _resolveGlobal2.zIndex;

  if (!depth || typeof depth !== 'string') {
    return CSS_INHERIT_VALUE;
  }

  var resolvedZIndex = resolveToProperty(depth, zIndexSchema);
  return resolvedZIndex || CSS_INHERIT_VALUE;
};
export var resolveElevation = function resolveElevation(depth, globalOverrides) {
  var _context2;

  var resolvedBoxShadow = resolveBoxShadow(depth, globalOverrides);
  var resolvedZIndex = resolveZIndex(depth, globalOverrides);
  return _concatInstanceProperty(_context2 = "z-index: ".concat(resolvedZIndex, "; box-shadow: ")).call(_context2, resolvedBoxShadow) || CSS_INHERIT_VALUE;
};