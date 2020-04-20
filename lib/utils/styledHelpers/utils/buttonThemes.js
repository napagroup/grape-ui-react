"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.buttonThemes = exports.getButtonThemesByVariant = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _globalStyles = require("../../../global-styles");

var _resolvers = require("./resolvers");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; (0, _forEach["default"])(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context5; (0, _forEach["default"])(_context5 = ownKeys(Object(source))).call(_context5, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

var getButtonThemesByVariant = function getButtonThemesByVariant(type, globalOverrides) {
  var _context;

  // return all themes of that type.
  var buttonVariantSchema = globalOverrides.buttonVariant;
  var variantThemes = buttonVariantSchema[type];

  if (!variantThemes) {
    return {};
  }

  return (0, _reduce["default"])(_context = (0, _keys["default"])(variantThemes)).call(_context, function (prev, current) {
    var _context2;

    var variantName = type !== 'plain' ? (0, _concat["default"])(_context2 = "".concat(type, "-")).call(_context2, current) : current;
    var currentTheme = variantThemes[current];

    var vTheme = _objectSpread({}, prev, (0, _defineProperty3["default"])({}, variantName, {
      backgroundColor: (0, _resolvers.resolveColor)(currentTheme.backgroundColor, globalOverrides, null),
      color: (0, _resolvers.resolveColor)(currentTheme.color, globalOverrides, null)
    }));

    if (variantThemes[current].focusColor) {
      vTheme[variantName]['&:focus'] = {
        backgroundColor: (0, _resolvers.resolveColor)(currentTheme.focusColor, globalOverrides, null)
      };
    }

    if (variantThemes[current].hoverColor) {
      vTheme[variantName]['&:hover'] = {
        backgroundColor: (0, _resolvers.resolveColor)(currentTheme.hoverColor, globalOverrides, null)
      };
    }

    return vTheme;
  }, {});
};

exports.getButtonThemesByVariant = getButtonThemesByVariant;

var buttonThemes = function buttonThemes(variantTypes, globalOverrides) {
  var globalStyles = globalOverrides || (0, _globalStyles.getGlobalStyles)();
  var buttonVariantSchema = globalStyles.buttonVariant;

  if (!variantTypes) {
    var _context3;

    // return all button variants
    return (0, _reduce["default"])(_context3 = (0, _keys["default"])(buttonVariantSchema)).call(_context3, function (prev, current) {
      return _objectSpread({}, prev, {}, getButtonThemesByVariant(current, globalStyles));
    }, {});
  }

  if ((0, _isArray["default"])(variantTypes)) {
    // return button variants based on indicated types.
    return (0, _reduce["default"])(variantTypes).call(variantTypes, function (prev, current) {
      return _objectSpread({}, prev, {}, getButtonThemesByVariant(current, globalStyles));
    }, {});
  }

  return null;
};

exports.buttonThemes = buttonThemes;