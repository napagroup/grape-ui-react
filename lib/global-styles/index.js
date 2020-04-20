import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _Array$isArray from "@babel/runtime-corejs3/core-js-stable/array/is-array";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { themeGet } from '@styled-system/theme-get';
import * as border from 'src/assets/json/border.json';
import * as breakpoints from 'src/assets/json/breakpoints.json';
import * as colors from 'src/assets/json/colors.json';
import * as fontFamily from 'src/assets/json/fontFamily.json';
import * as fontSize from 'src/assets/json/fontSize.json';
import * as shadow from 'src/assets/json/shadow.json';
import * as zIndex from 'src/assets/json/zIndex.json';
import * as grid from 'src/assets/json/grid.json';
import * as buttonVariant from 'src/assets/json/buttonVariant.json';
export var getGlobalStyles = function getGlobalStyles() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (overrides instanceof Object && !_Array$isArray(overrides)) {
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

export var getGlobalOverrides = function getGlobalOverrides() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return getGlobalStyles({
    border: themeGet('border', null)(props),
    colors: themeGet('colors', null)(props),
    fontFamily: themeGet('fonts', null)(props)
  });
};