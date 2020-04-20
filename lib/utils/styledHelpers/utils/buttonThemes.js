"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.buttonThemes = exports.getButtonThemesByVariant = void 0;

var _isArray = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/array/is-array"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _reduce = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/reduce"));

var _globalStyles = require("../../../global-styles");

var _resolvers = require("./resolvers");

const getButtonThemesByVariant = (type, globalOverrides) => {
  var _context;

  // return all themes of that type.
  const {
    buttonVariant: buttonVariantSchema
  } = globalOverrides;
  const variantThemes = buttonVariantSchema[type];

  if (!variantThemes) {
    return {};
  }

  return (0, _reduce.default)(_context = (0, _keys.default)(variantThemes)).call(_context, (prev, current) => {
    const variantName = type !== 'plain' ? `${type}-${current}` : current;
    const currentTheme = variantThemes[current];
    const vTheme = { ...prev,
      [variantName]: {
        backgroundColor: (0, _resolvers.resolveColor)(currentTheme.backgroundColor, globalOverrides, null),
        color: (0, _resolvers.resolveColor)(currentTheme.color, globalOverrides, null)
      }
    };

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

const buttonThemes = (variantTypes, globalOverrides) => {
  const globalStyles = globalOverrides || (0, _globalStyles.getGlobalStyles)();
  const {
    buttonVariant: buttonVariantSchema
  } = globalStyles;

  if (!variantTypes) {
    var _context2;

    // return all button variants
    return (0, _reduce.default)(_context2 = (0, _keys.default)(buttonVariantSchema)).call(_context2, (prev, current) => ({ ...prev,
      ...getButtonThemesByVariant(current, globalStyles)
    }), {});
  }

  if ((0, _isArray.default)(variantTypes)) {
    // return button variants based on indicated types.
    return (0, _reduce.default)(variantTypes).call(variantTypes, (prev, current) => ({ ...prev,
      ...getButtonThemesByVariant(current, globalStyles)
    }), {});
  }

  return null;
};

exports.buttonThemes = buttonThemes;