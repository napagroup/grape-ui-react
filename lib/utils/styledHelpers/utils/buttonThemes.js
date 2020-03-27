"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.is-array");

require("core-js/modules/es.array.reduce");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buttonThemes = exports.getButtonThemesByVariant = void 0;

var _globalStyles = require("../../../global-styles");

var _resolvers = require("./resolvers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getButtonThemesByVariant = function getButtonThemesByVariant(type, globalOverrides) {
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

exports.getButtonThemesByVariant = getButtonThemesByVariant;

var buttonThemes = function buttonThemes(variantTypes, globalOverrides) {
  var globalStyles = globalOverrides || (0, _globalStyles.getGlobalStyles)();
  var buttonVariantSchema = globalStyles.buttonVariant;

  if (!variantTypes) {
    // return all button variants
    return Object.keys(buttonVariantSchema).reduce(function (prev, current) {
      return _objectSpread({}, prev, {}, getButtonThemesByVariant(current, globalStyles));
    }, {});
  }

  if (Array.isArray(variantTypes)) {
    // return button variants based on indicated types.
    return variantTypes.reduce(function (prev, current) {
      return _objectSpread({}, prev, {}, getButtonThemesByVariant(current, globalStyles));
    }, {});
  }

  return null;
};

exports.buttonThemes = buttonThemes;