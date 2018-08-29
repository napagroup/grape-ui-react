'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGlobalStyles = undefined;

var _border = require('../assets/json/border.json');

var border = _interopRequireWildcard(_border);

var _breakpoints = require('../assets/json/breakpoints.json');

var breakpoints = _interopRequireWildcard(_breakpoints);

var _colors = require('../assets/json/colors.json');

var colors = _interopRequireWildcard(_colors);

var _fontFamily = require('../assets/json/fontFamily.json');

var fontFamily = _interopRequireWildcard(_fontFamily);

var _fontSize = require('../assets/json/fontSize.json');

var fontSize = _interopRequireWildcard(_fontSize);

var _shadow = require('../assets/json/shadow.json');

var shadow = _interopRequireWildcard(_shadow);

var _zIndex = require('../assets/json/zIndex.json');

var zIndex = _interopRequireWildcard(_zIndex);

var _grid = require('../assets/json/grid.json');

var grid = _interopRequireWildcard(_grid);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getGlobalStyles = exports.getGlobalStyles = function getGlobalStyles() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (overrides instanceof Object && !Array.isArray(overrides)) {
    var _overrides$border = overrides.border,
        borderOverrides = _overrides$border === undefined ? {} : _overrides$border,
        _overrides$breakpoint = overrides.breakpoints,
        breakpointOverrides = _overrides$breakpoint === undefined ? {} : _overrides$breakpoint,
        _overrides$colors = overrides.colors,
        colorsOverrides = _overrides$colors === undefined ? {} : _overrides$colors,
        _overrides$fontFamily = overrides.fontFamily,
        fontFamilyOverrides = _overrides$fontFamily === undefined ? {} : _overrides$fontFamily,
        _overrides$fontSize = overrides.fontSize,
        fontSizeOverrides = _overrides$fontSize === undefined ? {} : _overrides$fontSize,
        _overrides$shadow = overrides.shadow,
        shadowOverrides = _overrides$shadow === undefined ? {} : _overrides$shadow,
        _overrides$zIndex = overrides.zIndex,
        zIndexOverrides = _overrides$zIndex === undefined ? {} : _overrides$zIndex,
        _overrides$grid = overrides.grid,
        gridOverrides = _overrides$grid === undefined ? {} : _overrides$grid;

    return {
      border: Object.assign({}, border, borderOverrides),
      breakpoints: Object.assign({}, breakpoints, breakpointOverrides),
      colors: Object.assign({}, colors, colorsOverrides),
      fontFamily: Object.assign({}, fontFamily, fontFamilyOverrides),
      fontSize: Object.assign({}, fontSize, fontSizeOverrides),
      shadow: Object.assign({}, shadow, shadowOverrides),
      zIndex: Object.assign({}, zIndex, zIndexOverrides),
      grid: Object.assign({}, grid, gridOverrides)
    };
  }
  return getGlobalStyles();
};