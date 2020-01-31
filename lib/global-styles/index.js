"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalOverrides = exports.getGlobalStyles = undefined;

var _themeGet = require("@styled-system/theme-get");

var _border = require("../assets/json/border.json");

var border = _interopRequireWildcard(_border);

var _breakpoints = require("../assets/json/breakpoints.json");

var breakpoints = _interopRequireWildcard(_breakpoints);

var _colors = require("../assets/json/colors.json");

var colors = _interopRequireWildcard(_colors);

var _fontFamily = require("../assets/json/fontFamily.json");

var fontFamily = _interopRequireWildcard(_fontFamily);

var _fontSize = require("../assets/json/fontSize.json");

var fontSize = _interopRequireWildcard(_fontSize);

var _shadow = require("../assets/json/shadow.json");

var shadow = _interopRequireWildcard(_shadow);

var _zIndex = require("../assets/json/zIndex.json");

var zIndex = _interopRequireWildcard(_zIndex);

var _grid = require("../assets/json/grid.json");

var grid = _interopRequireWildcard(_grid);

var _buttonVariant = require("../assets/json/buttonVariant.json");

var buttonVariant = _interopRequireWildcard(_buttonVariant);

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getGlobalStyles = exports.getGlobalStyles = function getGlobalStyles() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (overrides instanceof Object && !Array.isArray(overrides)) {
    var _overrides$border = overrides.border,
        borderOverrides = _overrides$border === void 0 ? {} : _overrides$border,
        _overrides$breakpoint = overrides.breakpoints,
        breakpointOverrides = _overrides$breakpoint === void 0 ? {} : _overrides$breakpoint,
        _overrides$buttonVari = overrides.buttonVariant,
        buttonVariantOverrides = _overrides$buttonVari === void 0 ? {} : _overrides$buttonVari,
        _overrides$colors = overrides.colors,
        colorsOverrides = _overrides$colors === void 0 ? {} : _overrides$colors,
        _overrides$fontFamily = overrides.fontFamily,
        fontFamilyOverrides = _overrides$fontFamily === void 0 ? {} : _overrides$fontFamily,
        _overrides$fontSize = overrides.fontSize,
        fontSizeOverrides = _overrides$fontSize === void 0 ? {} : _overrides$fontSize,
        _overrides$shadow = overrides.shadow,
        shadowOverrides = _overrides$shadow === void 0 ? {} : _overrides$shadow,
        _overrides$zIndex = overrides.zIndex,
        zIndexOverrides = _overrides$zIndex === void 0 ? {} : _overrides$zIndex,
        _overrides$grid = overrides.grid,
        gridOverrides = _overrides$grid === void 0 ? {} : _overrides$grid;
    return {
      border: _objectSpread({}, border, {}, borderOverrides),
      breakpoints: _objectSpread({}, breakpoints, {}, breakpointOverrides),
      buttonVariant: _objectSpread({}, buttonVariant, {}, buttonVariantOverrides),
      colors: _objectSpread({}, colors, {}, colorsOverrides),
      fontFamily: _objectSpread({}, fontFamily, {}, fontFamilyOverrides),
      fontSize: _objectSpread({}, fontSize, {}, fontSizeOverrides),
      grid: _objectSpread({}, grid, {}, gridOverrides),
      shadow: _objectSpread({}, shadow, {}, shadowOverrides),
      zIndex: _objectSpread({}, zIndex, {}, zIndexOverrides)
    };
  }

  return getGlobalStyles();
};
/**
 * Takes in an object containing theme e.g. props.theme.
 * Returns a new global style object with properties of global styles merged and overridden with styles defined in the theme.
 * @param {Object} props The object containing the theme object.
 */


var getGlobalOverrides = exports.getGlobalOverrides = function getGlobalOverrides() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return getGlobalStyles({
    border: (0, _themeGet.themeGet)('border', null)(props),
    colors: (0, _themeGet.themeGet)('colors', null)(props),
    fontFamily: (0, _themeGet.themeGet)('fonts', null)(props)
  });
};