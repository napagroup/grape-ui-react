'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.positionButton = exports.lineHeightButton = exports.lineHeightStyle = exports.borderButton = exports.getAdvanceButtonStyle = undefined;

var _styledSystem = require('styled-system');

var _globalStyles = require('../../global-styles');

var _styledHelpers = require('../../utils/styledHelpers');

var _constants = require('./constants');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    colorSchema = _getGlobalStyles.colors;

var brandPrimary = colorSchema.brandPrimary;


var containedStyle = '';
var outlineStyle = '';
var raisedStyle = '';

// I see user can only apply one of those contained, outline and raised. if you need to apply both and/or all styles, let Ping know
var getAdvanceButtonStyle = exports.getAdvanceButtonStyle = function getAdvanceButtonStyle() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (props.contained) {
    return containedStyle;
  }if (props.outline) {
    return outlineStyle;
  }if (props.raised) {
    return raisedStyle;
  }
  return '';
};

var borderWidthStyle = (0, _styledSystem.style)({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'border',
  // key for theme values
  key: 'border',
  // React prop name
  prop: 'border',
  // add a fallback scale object or array, if theme is not present
  scale: ['', '', '', '', ''],
  // accessor function for transforming the value
  transformValue: function transformValue(value) {
    return value || '1px solid ' + (0, _styledHelpers.resolveColor)();
  }
});

var borderButton = exports.borderButton = function borderButton(props) {
  return props.borderWidth ? borderWidthStyle(props) : 'border: 1px solid ' + brandPrimary.base + ';';
};

var lineHeightStyle = exports.lineHeightStyle = (0, _styledSystem.style)({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'line-height',
  // key for theme values
  key: 'lineHeight',
  // React prop name
  prop: 'lineHeight',
  // add a fallback scale object or array, if theme is not present
  scale: ['', '', '', '', ''],
  // accessor function for transforming the value
  transformValue: function transformValue(lineHeight) {
    return parseFloat(lineHeight) || _constants.DEFAULT_BUTTON_LINE_HEIGHT;
  }
});

var lineHeightButton = exports.lineHeightButton = function lineHeightButton(props) {
  return props.lineHeight ? lineHeightStyle(props) : 'line-height: ' + _constants.DEFAULT_BUTTON_LINE_HEIGHT + ';';
};

var positionStyle = (0, _styledSystem.style)({
  // The corresponding CSS property (defaults to prop argument)
  cssProperty: 'position',
  // key for theme values
  key: 'position',
  // React prop name
  prop: 'position',
  // add a fallback scale object or array, if theme is not present
  scale: ['', '', '', '', ''],
  // accessor function for transforming the value
  transformValue: function transformValue(position) {
    return position || _styledHelpers.POSITION_DEFAULT_VALUE;
  }
});

var positionButton = exports.positionButton = function positionButton(props) {
  return props.position ? positionStyle(props) : 'position: ' + _styledHelpers.POSITION_DEFAULT_VALUE + ';';
};