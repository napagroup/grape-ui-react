"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textDecorationCore = exports.textAlignCore = exports.fontStyleCore = exports.lineHeightCore = exports.letterSpacingCore = exports.fontFamilyCore = exports.fontSizeCore = exports.colorCore = undefined;

var _styledSystem = require("styled-system");

var _globalStyles = require("../../global-styles");

var _cssDefaults = require("./cssDefaults");

var _utils = require("./utils");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontFamilySchema = _getGlobalStyles.fontFamily;

var colorCore = exports.colorCore = function colorCore(props) {
  var nextProps = null;
  var nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);

  if (props.variant) {
    nextProps = _objectSpread({}, props, {
      bg: (0, _utils.resolveColor)(props.bg, nextGlobalOverrides, null),
      color: (0, _utils.resolveColor)(props.color, nextGlobalOverrides, null)
    });
  } else {
    nextProps = _objectSpread({}, props, {
      bg: (0, _utils.resolveColor)(props.bg, nextGlobalOverrides, _cssDefaults.defaultStylesBase.bg),
      color: (0, _utils.resolveColor)(props.color, nextGlobalOverrides)
    });
  }

  return (0, _styledSystem.color)(nextProps);
};

var fontSizeCore = exports.fontSizeCore = function fontSizeCore(props) {
  var value = props.fontSize || _cssDefaults.defaultStylesBase.fontSize;
  var scaleValue = (0, _utils.scaleFactor)(props);

  if (scaleValue) {
    value = scaleValue ? (0, _utils.scaleFont)(value, scaleValue, 1, 'rem') : value;
  }

  var nextProps = _objectSpread({}, props, {
    fontSize: value
  });

  return (0, _styledSystem.fontSize)(nextProps);
};

var fontFamilyCore = exports.fontFamilyCore = function fontFamilyCore(props) {
  var value = _cssDefaults.defaultStylesBase.fontFamily;

  if (props && props.fontFamily) {
    value = fontFamilySchema[props.fontFamily] || _cssDefaults.defaultStylesBase.fontFamily;
  }

  var nextProps = _objectSpread({}, props, {
    fontFamily: value
  });

  return (0, _styledSystem.fontFamily)(nextProps);
};

var letterSpacingCore = exports.letterSpacingCore = function letterSpacingCore(props) {
  return (0, _styledSystem.letterSpacing)(_objectSpread({}, props, {
    letterSpacing: props.kerning || _cssDefaults.defaultStylesBase.kerning
  }));
};

var lineHeightCore = exports.lineHeightCore = function lineHeightCore(props) {
  return (0, _styledSystem.lineHeight)(_objectSpread({}, props, {
    lineHeight: props.lineHeight || _cssDefaults.defaultStylesBase.lineHeight
  }));
};

var fontStyleCore = exports.fontStyleCore = function fontStyleCore(props) {
  return "".concat(props.italic ? 'font-style: italic;' : '');
};

var textAlignCore = exports.textAlignCore = function textAlignCore(props) {
  return (0, _styledSystem.textAlign)(_objectSpread({}, props, {
    textAlign: props.textAlign || _cssDefaults.defaultStylesBase.textAlign
  }));
};

var textDecorationCore = exports.textDecorationCore = function textDecorationCore(props) {
  return "text-decoration: ".concat(props.textDecoration || _cssDefaults.defaultStylesBase.textDecoration, ";");
};