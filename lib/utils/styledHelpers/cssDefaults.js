"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.defaultControlStyles = exports.defaultStylesBase = exports.CSS_DEFAULT_FONT_FAMILY_VALUE = exports.POSITION_DEFAULT_VALUE = exports.CSS_INHERIT_VALUE = void 0;

var _globalStyles = require("../../global-styles");

var CSS_INHERIT_VALUE = 'inherit';
exports.CSS_INHERIT_VALUE = CSS_INHERIT_VALUE;
var POSITION_DEFAULT_VALUE = 'relative';
exports.POSITION_DEFAULT_VALUE = POSITION_DEFAULT_VALUE;
var CSS_DEFAULT_FONT_FAMILY_VALUE = 'base';
exports.CSS_DEFAULT_FONT_FAMILY_VALUE = CSS_DEFAULT_FONT_FAMILY_VALUE;

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    gridSchema = _getGlobalStyles.grid;

var defaultStylesBase = {
  bg: 'transparent',
  color: CSS_INHERIT_VALUE,
  ellipsis: false,
  fontFamily: CSS_DEFAULT_FONT_FAMILY_VALUE,
  fontSize: CSS_INHERIT_VALUE,
  fontWeight: CSS_INHERIT_VALUE,
  italic: false,
  kerning: CSS_INHERIT_VALUE,
  lg: false,
  lineHeight: 1.5,
  sm: false,
  textAlign: CSS_INHERIT_VALUE,
  textDecoration: CSS_INHERIT_VALUE
};
exports.defaultStylesBase = defaultStylesBase;
var defaultControlStyles = {
  activeColor: 'brandPrimary',
  bg: 'white.light',
  borderColor: 'borderColor',
  fontFamily: CSS_DEFAULT_FONT_FAMILY_VALUE,
  isFocused: false,
  isRequired: false,
  padding: gridSchema.gutter,
  placeholderColor: 'gray.light',
  plainText: false
};
exports.defaultControlStyles = defaultControlStyles;