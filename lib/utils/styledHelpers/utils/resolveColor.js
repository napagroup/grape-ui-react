'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveColorByPropName = exports.resolveColor = undefined;

var _styledSystem = require('styled-system');

var _globalStyles = require('../../../global-styles');

var _objectHelpers = require('../../../utils/objectHelpers');

var _ = require('../');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    colorSchema = _getGlobalStyles.colors;

var resolveColor = exports.resolveColor = function resolveColor(colorToResolve) {
  var colorsTheme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : colorSchema;
  var defaultColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _.defaultStylesBase.color;

  var resolvedValue = (0, _objectHelpers.isKeyNestedProp)(colorToResolve) ? (0, _objectHelpers.resolveToProperty)(colorToResolve, colorsTheme) : (0, _objectHelpers.resolveToProperty)(colorToResolve + '.base', colorsTheme);
  return resolvedValue || defaultColor;
};
/*
  Grape UI Core style helpers.
*/
var resolveColorByPropName = exports.resolveColorByPropName = function resolveColorByPropName(props) {
  var propName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'color';
  var defaultColor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _.defaultStylesBase.color;

  if (!props[propName] || typeof props[propName] !== 'string') {
    return defaultColor;
  }
  // If available, get the props.theme.color or default to colorSchema.
  var colorsTheme = (0, _styledSystem.themeGet)('colors', colorSchema)(props);
  return resolveColor(props[propName], colorsTheme, defaultColor);
};