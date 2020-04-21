"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.getGlobalOverrides = exports.getGlobalStyles = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _themeGet = require("@styled-system/theme-get");

var border = _interopRequireWildcard(require("../assets/json/border.json"));

var breakpoints = _interopRequireWildcard(require("../assets/json/breakpoints.json"));

var colors = _interopRequireWildcard(require("../assets/json/colors.json"));

var fontFamily = _interopRequireWildcard(require("../assets/json/fontFamily.json"));

var fontSize = _interopRequireWildcard(require("../assets/json/fontSize.json"));

var shadow = _interopRequireWildcard(require("../assets/json/shadow.json"));

var zIndex = _interopRequireWildcard(require("../assets/json/zIndex.json"));

var grid = _interopRequireWildcard(require("../assets/json/grid.json"));

var buttonVariant = _interopRequireWildcard(require("../assets/json/buttonVariant.json"));

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const getGlobalStyles = (overrides = {}) => {
  if (overrides instanceof Object && !(0, _isArray.default)(overrides)) {
    const _overrides$border = overrides.border,
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


exports.getGlobalStyles = getGlobalStyles;

const getGlobalOverrides = (props = {}) => getGlobalStyles({
  border: (0, _themeGet.themeGet)('border', null)(props),
  colors: (0, _themeGet.themeGet)('colors', null)(props),
  fontFamily: (0, _themeGet.themeGet)('fonts', null)(props)
});

exports.getGlobalOverrides = getGlobalOverrides;