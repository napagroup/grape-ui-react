"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.ellipsisCore = exports.textDecorationCore = exports.textAlignCore = exports.fontStyleCore = exports.lineHeightCore = exports.letterSpacingCore = exports.fontFamilyCore = exports.fontSizeCore = exports.colorCore = exports.borderRadiusCore = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _styledSystem = require("styled-system");

var _globalStyles = require("../../global-styles");

var _cssDefaults = require("./cssDefaults");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var borderRadiusCore = function borderRadiusCore(props) {
  var nextGlobalOverrides = (0, _globalStyles.getGlobalOverrides)(props);

  var nextProps = _objectSpread({}, props, {
    borderRadius: (0, _utils.resolveBorderRadius)(props, nextGlobalOverrides)
  });

  return (0, _styledSystem.borderRadius)(nextProps);
};

exports.borderRadiusCore = borderRadiusCore;

var colorCore = function colorCore(props) {
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

exports.colorCore = colorCore;

var fontSizeCore = function fontSizeCore(props) {
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

exports.fontSizeCore = fontSizeCore;

var fontFamilyCore = function fontFamilyCore(props) {
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

exports.fontFamilyCore = fontFamilyCore;

var letterSpacingCore = function letterSpacingCore(props) {
  return (0, _styledSystem.letterSpacing)(_objectSpread({}, props, {
    letterSpacing: props.kerning || _cssDefaults.defaultStylesBase.kerning
  }));
};

exports.letterSpacingCore = letterSpacingCore;

var lineHeightCore = function lineHeightCore(props) {
  return (0, _styledSystem.lineHeight)(_objectSpread({}, props, {
    lineHeight: props.lineHeight || _cssDefaults.defaultStylesBase.lineHeight
  }));
};

exports.lineHeightCore = lineHeightCore;

var fontStyleCore = function fontStyleCore(props) {
  return "".concat(props.italic ? 'font-style: italic;' : '');
};

exports.fontStyleCore = fontStyleCore;

var textAlignCore = function textAlignCore(props) {
  return (0, _styledSystem.textAlign)(_objectSpread({}, props, {
    textAlign: props.textAlign || _cssDefaults.defaultStylesBase.textAlign
  }));
};

exports.textAlignCore = textAlignCore;

var textDecorationCore = function textDecorationCore(props) {
  return "text-decoration: ".concat(props.textDecoration || _cssDefaults.defaultStylesBase.textDecoration, ";");
};

exports.textDecorationCore = textDecorationCore;

var ellipsisCore = function ellipsisCore(props) {
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

exports.ellipsisCore = ellipsisCore;