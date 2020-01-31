"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ellipsisCore = exports.textDecorationCore = exports.textAlignCore = exports.fontStyleCore = exports.lineHeightCore = exports.letterSpacingCore = exports.fontFamilyCore = exports.fontSizeCore = exports.colorCore = exports.borderRadiusCore = undefined;

var _styledSystem = require("styled-system");

var _globalStyles = require("../../global-styles");

var _cssDefaults = require("./cssDefaults");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var borderRadiusCore = exports.borderRadiusCore = function borderRadiusCore(props) {
  var nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);

  var nextProps = _objectSpread({}, props, {
    borderRadius: (0, _utils.resolveBorderRadius)(props, nextGlobalOverrides)
  });

  return (0, _styledSystem.borderRadius)(nextProps);
};

var colorCore = exports.colorCore = function colorCore(props) {
  var nextProps = null;
  var nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);

  if (props.variant) {
    nextProps = _objectSpread({}, props, {
      backgroundColor: (0, _utils.resolveColor)(props.bg, nextGlobalOverrides, null),
      bg: (0, _utils.resolveColor)(props.bg, nextGlobalOverrides, null),
      color: (0, _utils.resolveColor)(props.color, nextGlobalOverrides, null)
    });
  } else {
    nextProps = _objectSpread({}, props, {
      backgroundColor: (0, _utils.resolveColor)(props.bg, nextGlobalOverrides, _cssDefaults.defaultStylesBase.bg),
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
  var defaultValue = (0, _utils.resolveFontFamily)(_cssDefaults.defaultStylesBase.fontFamily);
  var value = defaultValue;

  if (props && props.fontFamily) {
    var nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
    value = (0, _utils.resolveFontFamily)(props.fontFamily, nextGlobalOverrides, defaultValue);
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

var ellipsisCore = exports.ellipsisCore = function ellipsisCore(props) {
  if (props.ellipsis > 1) {
    return {
      display: '-webkit-box',
      overflow: 'hidden',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: props.ellipsis
    };
  }

  if (props.ellipsis) {
    return {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    };
  }

  return {};
};