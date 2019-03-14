"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonThemes = exports.getButtonThemesByVariant = undefined;

var _globalStyles = require("../../../global-styles");

var _resolvers = require("./resolvers");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getButtonThemesByVariant = exports.getButtonThemesByVariant = function getButtonThemesByVariant(type, globalOverrides) {
  // return all themes of that type.
  var buttonVariantSchema = globalOverrides.buttonVariant;
  var variantThemes = buttonVariantSchema[type];

  if (!variantThemes) {
    return {};
  }

  return Object.keys(variantThemes).reduce(function (prev, current) {
    var variantName = type !== 'plain' ? "".concat(type, "-").concat(current) : current;
    var currentTheme = variantThemes[current];

    var vTheme = _objectSpread({}, prev, _defineProperty({}, variantName, {
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

var buttonThemes = exports.buttonThemes = function buttonThemes(variantTypes, globalOverrides) {
  var globalStyles = globalOverrides || (0, _globalStyles.getGlobalStyles)();
  var buttonVariantSchema = globalStyles.buttonVariant;

  if (!variantTypes) {
    // return all button variants
    return Object.keys(buttonVariantSchema).reduce(function (prev, current) {
      return _objectSpread({}, prev, getButtonThemesByVariant(current, globalStyles));
    }, {});
  }

  if (Array.isArray(variantTypes)) {
    // return button variants based on indicated types.
    return variantTypes.reduce(function (prev, current) {
      return _objectSpread({}, prev, getButtonThemesByVariant(current, globalStyles));
    }, {});
  }

  return null;
};