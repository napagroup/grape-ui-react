"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultControlStyles = exports.defaultStylesBase = exports.POSITION_DEFAULT_VALUE = exports.CSS_INHERIT_VALUE = undefined;

var _globalStyles = require("../../global-styles");

var CSS_INHERIT_VALUE = exports.CSS_INHERIT_VALUE = 'inherit';
var POSITION_DEFAULT_VALUE = exports.POSITION_DEFAULT_VALUE = 'relative';

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    borderSchema = _getGlobalStyles.border,
    gridSchema = _getGlobalStyles.grid;

var defaultStylesBase = exports.defaultStylesBase = {
  bg: 'transparent',
  color: CSS_INHERIT_VALUE,
  fontFamily: CSS_INHERIT_VALUE,
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
  borderRadius: borderSchema.borderRadius.base,
  isFocused: false,
  padding: gridSchema.gutter,
  placeholderColor: 'gray.light',
  plainText: false
};