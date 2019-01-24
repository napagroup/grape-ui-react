'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStylesBase = exports.getTextDecoration = exports.getTextAlign = exports.getColor = exports.getFontStyle = exports.getLineHeight = exports.getLetterSpacing = exports.getFontWeight = exports.getFontSize = exports.getFontFamily = exports.defaultTextStylesBase = undefined;

var _componentHelpers = require('../../utils/componentHelpers');

var _globalStyles = require('../../global-styles');

var _utils = require('./utils');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontFamilySchema = _getGlobalStyles.fontFamily,
    fontSizeSchema = _getGlobalStyles.fontSize;

var defaultTextStylesBase = exports.defaultTextStylesBase = {
  color: 'inherit',
  fontFamily: 'inherit',
  fontSizeBase: 'inherit',
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
  var fontSizeBase = props.fontSizeBase || defaultTextStylesBase.fontSizeBase;
  return 'font-size: ' + (scaleFactor ? (0, _utils.getScaledFontSize)(fontSizeBase, scaleFactor) : fontSizeBase) + ';';
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
      fontSizeBase = _overrides.fontSizeBase,
      fontWeight = _overrides.fontWeight,
      italic = _overrides.italic,
      kerning = _overrides.kerning,
      textAlign = _overrides.textAlign,
      textDecoration = _overrides.textDecoration;

  return '\n    ' + getFontFamily(props) + '\n    font-size: ' + (scaleFactor ? (0, _utils.getScaledFontSize)(fontSizeBase, scaleFactor) : fontSizeBase) + ';\n    font-weight: ' + fontWeight + ';\n    letter-spacing: ' + kerning + ';\n    line-height: 1.5;\n    ' + (italic ? 'font-style: italic;' : '') + '\n    ' + getColor(props) + '\n    text-align: ' + textAlign + ';\n    text-decoration: ' + textDecoration + ';\n  ';
};