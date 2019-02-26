'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.typography = exports.textStylesBase = exports.getTextDecoration = exports.getTextAlign = exports.getColor = exports.getFontStyle = exports.getLineHeight = exports.getLetterSpacing = exports.getFontWeight = exports.getFontSize = exports.getFontFamily = exports.defaultTextStylesBase = undefined;

var _globalStyles = require('../../global-styles');

var _componentHelpers = require('../../utils/componentHelpers');

var _utils = require('./utils');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontFamilySchema = _getGlobalStyles.fontFamily,
    fontSizeSchema = _getGlobalStyles.fontSize;

var defaultTextStylesBase = exports.defaultTextStylesBase = {
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  fontWeight: 'inherit',
  italic: false,
  kerning: 'inherit',
  lg: false,
  sm: false,
  textAlign: 'inherit',
  textDecoration: 'inherit'
};

var getScaleFactor = function getScaleFactor(props) {
  var sm = props.sm,
      lg = props.lg;
  var _fontSizeSchema$sizeV = fontSizeSchema.sizeVariants,
      schemaBase = _fontSizeSchema$sizeV.base,
      schemaSm = _fontSizeSchema$sizeV.sm,
      schemaLg = _fontSizeSchema$sizeV.lg;

  var scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  } else {
    scaleFactor = null;
  }
  return scaleFactor;
};

var getColorFromProps = function getColorFromProps(props) {
  var color = props.color;

  if (!color) {
    return defaultTextStylesBase.color;
  }
  return (0, _componentHelpers.resolveColor)(color);
};

var getFontFamily = exports.getFontFamily = function getFontFamily(props) {
  if (props && props.fontFamily) {
    return 'font-family: ' + (fontFamilySchema[props.fontFamily] || defaultTextStylesBase.fontFamily) + ';';
  }
  return 'font-family: ' + defaultTextStylesBase.fontFamily + ';';
};
var getFontSize = exports.getFontSize = function getFontSize(props) {
  var scaleFactor = getScaleFactor(props);
  var fontSize = props.fontSize || defaultTextStylesBase.fontSize;
  return 'font-size: ' + (scaleFactor ? (0, _utils.getScaledFontSize)(fontSize, scaleFactor) : fontSize) + ';';
};
var getFontWeight = exports.getFontWeight = function getFontWeight(props) {
  return 'font-weight: ' + (props.fontWeight || defaultTextStylesBase.fontWeight) + ';';
};
var getLetterSpacing = exports.getLetterSpacing = function getLetterSpacing(props) {
  return 'letter-spacing: ' + (props.kerning || defaultTextStylesBase.kerning) + ';';
};
var getLineHeight = exports.getLineHeight = function getLineHeight() {
  return 'line-height: 1.5;';
};
var getFontStyle = exports.getFontStyle = function getFontStyle(props) {
  return '' + (props.italic ? 'font-style: italic;' : '');
};
var getColor = exports.getColor = function getColor(props) {
  return 'color: ' + getColorFromProps(props) + ';';
};
var getTextAlign = exports.getTextAlign = function getTextAlign(props) {
  return 'text-align: ' + (props.textAlign || defaultTextStylesBase.textAlign) + ';';
};
var getTextDecoration = exports.getTextDecoration = function getTextDecoration(props) {
  return 'text-decoration: ' + (props.textDecoration || defaultTextStylesBase.textDecoration) + ';';
};

var textStylesBase = exports.textStylesBase = function textStylesBase() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultTextStylesBase;
  } else {
    overrides = Object.assign({}, defaultTextStylesBase, props);
  }

  var scaleFactor = getScaleFactor(props);
  var _overrides = overrides,
      fontSize = _overrides.fontSize,
      fontWeight = _overrides.fontWeight,
      italic = _overrides.italic,
      kerning = _overrides.kerning,
      textAlign = _overrides.textAlign,
      textDecoration = _overrides.textDecoration;

  return '\n    ' + getFontFamily(props) + '\n    font-size: ' + (scaleFactor ? (0, _utils.getScaledFontSize)(fontSize, scaleFactor) : fontSize) + ';\n    font-weight: ' + fontWeight + ';\n    letter-spacing: ' + kerning + ';\n    line-height: 1.5;\n    ' + (italic ? 'font-style: italic;' : '') + '\n    ' + getColor(props) + '\n    text-align: ' + textAlign + ';\n    text-decoration: ' + textDecoration + ';\n  ';
};
var typography = exports.typography = {
  propTypes: {
    color: _propTypes2.default.string,
    fontFamily: _propTypes2.default.string,
    fontWeight: _propTypes2.default.string,
    italic: _propTypes2.default.bool,
    kerning: _propTypes2.default.string,
    lg: _propTypes2.default.bool,
    sm: _propTypes2.default.bool,
    textAlign: _propTypes2.default.string,
    textDecoration: _propTypes2.default.string
  }
};