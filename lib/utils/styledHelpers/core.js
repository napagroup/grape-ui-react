'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textDecorationCore = exports.textAlignCore = exports.fontStyleCore = exports.lineHeightCore = exports.letterSpacingCore = exports.fontFamilyCore = exports.fontSizeCore = exports.colorCore = undefined;

var _styledSystem = require('styled-system');

var _cssDefaults = require('./cssDefaults');

var _utils = require('./utils');

var _globalStyles = require('../../global-styles');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontFamilySchema = _getGlobalStyles.fontFamily;

var colorCore = exports.colorCore = function colorCore(props) {
  var nextProps = Object.assign({}, props, {
    bg: (0, _utils.resolveColorByPropName)(props, 'bg', _cssDefaults.defaultStylesBase.bg),
    color: (0, _utils.resolveColorByPropName)(props, 'color')
  });
  return (0, _styledSystem.color)(nextProps);
};
var fontSizeCore = exports.fontSizeCore = function fontSizeCore(props) {
  var value = props.fontSize || _cssDefaults.defaultStylesBase.fontSize;
  var scaleValue = (0, _utils.scaleFactor)(props);
  if (scaleValue) {
    value = scaleValue ? (0, _utils.scaleFont)(value, scaleValue, 1, 'rem') : value;
  }
  var nextProps = Object.assign({}, props, {
    fontSize: value
  });
  return (0, _styledSystem.fontSize)(nextProps);
};

var fontFamilyCore = exports.fontFamilyCore = function fontFamilyCore(props) {
  var value = _cssDefaults.defaultStylesBase.fontFamily;
  if (props && props.fontFamily) {
    value = fontFamilySchema[props.fontFamily] || _cssDefaults.defaultStylesBase.fontFamily;
  }
  var nextProps = Object.assign({}, props, {
    fontFamily: value
  });
  return (0, _styledSystem.fontFamily)(nextProps);
};

var letterSpacingCore = exports.letterSpacingCore = function letterSpacingCore(props) {
  return (0, _styledSystem.letterSpacing)(Object.assign({}, props, { letterSpacing: props.kerning || _cssDefaults.defaultStylesBase.kerning }));
};
var lineHeightCore = exports.lineHeightCore = function lineHeightCore(props) {
  return (0, _styledSystem.lineHeight)(Object.assign({}, props, { lineHeight: props.lineHeight || _cssDefaults.defaultStylesBase.lineHeight }));
};
var fontStyleCore = exports.fontStyleCore = function fontStyleCore(props) {
  return '' + (props.italic ? 'font-style: italic;' : '');
};
var textAlignCore = exports.textAlignCore = function textAlignCore(props) {
  return (0, _styledSystem.textAlign)(Object.assign({}, props, { textAlign: props.textAlign || _cssDefaults.defaultStylesBase.textAlign }));
};
var textDecorationCore = exports.textDecorationCore = function textDecorationCore(props) {
  return 'text-decoration: ' + (props.textDecoration || _cssDefaults.defaultStylesBase.textDecoration) + ';';
};