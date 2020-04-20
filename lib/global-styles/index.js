"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getGlobalOverrides = exports.getGlobalStyles = void 0;

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

const getGlobalStyles = (overrides = {}) => {
  if (overrides instanceof Object && !(0, _isArray.default)(overrides)) {
    const {
      border: borderOverrides = {},
      breakpoints: breakpointOverrides = {},
      buttonVariant: buttonVariantOverrides = {},
      colors: colorsOverrides = {},
      fontFamily: fontFamilyOverrides = {},
      fontSize: fontSizeOverrides = {},
      shadow: shadowOverrides = {},
      zIndex: zIndexOverrides = {},
      grid: gridOverrides = {}
    } = overrides;
    return {
      border: { ...border,
        ...borderOverrides
      },
      breakpoints: { ...breakpoints,
        ...breakpointOverrides
      },
      buttonVariant: { ...buttonVariant,
        ...buttonVariantOverrides
      },
      colors: { ...colors,
        ...colorsOverrides
      },
      fontFamily: { ...fontFamily,
        ...fontFamilyOverrides
      },
      fontSize: { ...fontSize,
        ...fontSizeOverrides
      },
      grid: { ...grid,
        ...gridOverrides
      },
      shadow: { ...shadow,
        ...shadowOverrides
      },
      zIndex: { ...zIndex,
        ...zIndexOverrides
      }
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