"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultControlStyles = exports.defaultStylesBase = exports.CSS_DEFAULT_FONT_FAMILY_VALUE = exports.POSITION_DEFAULT_VALUE = exports.CSS_INHERIT_VALUE = undefined;

var _globalStyles = require("../../global-styles");

var CSS_INHERIT_VALUE = exports.CSS_INHERIT_VALUE = 'inherit';
var POSITION_DEFAULT_VALUE = exports.POSITION_DEFAULT_VALUE = 'relative';
var CSS_DEFAULT_FONT_FAMILY_VALUE = exports.CSS_DEFAULT_FONT_FAMILY_VALUE = 'base';

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    borderSchema = _getGlobalStyles.border,
    gridSchema = _getGlobalStyles.grid;

var defaultStylesBase = exports.defaultStylesBase = {
  bg: 'transparent',
  borderRadius: borderSchema.borderRadius.base,
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
var defaultControlStyles = exports.defaultControlStyles = {
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