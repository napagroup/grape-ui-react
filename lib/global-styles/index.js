'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateGlobalStyles = exports.getDefaultGlobalStyles = undefined;

var _breakpoints = require('../assets/json/breakpoints.json');

var breakpoints = _interopRequireWildcard(_breakpoints);

var _colors = require('../assets/json/colors.json');

var colors = _interopRequireWildcard(_colors);

var _fontFamily = require('../assets/json/fontFamily.json');

var fontFamily = _interopRequireWildcard(_fontFamily);

var _shadow = require('../assets/json/shadow.json');

var shadow = _interopRequireWildcard(_shadow);

var _zIndex = require('../assets/json/zIndex.json');

var zIndex = _interopRequireWildcard(_zIndex);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var getDefaultGlobalStyles = exports.getDefaultGlobalStyles = function getDefaultGlobalStyles() {
  return {
    breakpoints: Object.assign({}, breakpoints),
    colors: Object.assign({}, colors),
    fontFamily: Object.assign({}, fontFamily),
    shadow: Object.assign({}, shadow),
    zIndex: Object.assign({}, zIndex)
  };
};

var generateGlobalStyles = exports.generateGlobalStyles = function generateGlobalStyles() {
  var overrides = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (overrides instanceof Object && !Array.isArray(overrides)) {
    var _overrides$breakpoint = overrides.breakpoints,
        breakpointOverrides = _overrides$breakpoint === undefined ? {} : _overrides$breakpoint,
        _overrides$colors = overrides.colors,
        colorsOverrides = _overrides$colors === undefined ? {} : _overrides$colors,
        _overrides$fontFamily = overrides.fontFamily,
        fontFamilyOverrides = _overrides$fontFamily === undefined ? {} : _overrides$fontFamily,
        _overrides$shadow = overrides.shadow,
        shadowOverrides = _overrides$shadow === undefined ? {} : _overrides$shadow,
        _overrides$zIndex = overrides.zIndex,
        zIndexOverrides = _overrides$zIndex === undefined ? {} : _overrides$zIndex;

    return {
      breakpoints: Object.assign({}, breakpoints, breakpointOverrides),
      colors: Object.assign({}, colors, colorsOverrides),
      fontFamily: Object.assign({}, fontFamily, fontFamilyOverrides),
      shadow: Object.assign({}, shadow, shadowOverrides),
      zIndex: Object.assign({}, zIndex, zIndexOverrides)
    };
  }
  return getDefaultGlobalStyles();
};