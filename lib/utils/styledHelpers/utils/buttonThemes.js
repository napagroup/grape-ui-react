import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Array$isArray from "@babel/runtime-corejs3/core-js-stable/array/is-array";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _reduceInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/reduce";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context4; _forEachInstanceProperty(_context4 = ownKeys(Object(source), true)).call(_context4, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context5; _forEachInstanceProperty(_context5 = ownKeys(Object(source))).call(_context5, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { getGlobalStyles } from 'src/global-styles';
import { resolveColor } from './resolvers';
export var getButtonThemesByVariant = function getButtonThemesByVariant(type, globalOverrides) {
  var _context;

  // return all themes of that type.
  var buttonVariantSchema = globalOverrides.buttonVariant;
  var variantThemes = buttonVariantSchema[type];

  if (!variantThemes) {
    return {};
  }

  return _reduceInstanceProperty(_context = _Object$keys(variantThemes)).call(_context, function (prev, current) {
    var _context2;

    var variantName = type !== 'plain' ? _concatInstanceProperty(_context2 = "".concat(type, "-")).call(_context2, current) : current;
    var currentTheme = variantThemes[current];

    var vTheme = _objectSpread({}, prev, _defineProperty({}, variantName, {
      backgroundColor: resolveColor(currentTheme.backgroundColor, globalOverrides, null),
      color: resolveColor(currentTheme.color, globalOverrides, null)
    }));

    if (variantThemes[current].focusColor) {
      vTheme[variantName]['&:focus'] = {
        backgroundColor: resolveColor(currentTheme.focusColor, globalOverrides, null)
      };
    }

    if (variantThemes[current].hoverColor) {
      vTheme[variantName]['&:hover'] = {
        backgroundColor: resolveColor(currentTheme.hoverColor, globalOverrides, null)
      };
    }

    return vTheme;
  }, {});
};
export var buttonThemes = function buttonThemes(variantTypes, globalOverrides) {
  var globalStyles = globalOverrides || getGlobalStyles();
  var buttonVariantSchema = globalStyles.buttonVariant;

  if (!variantTypes) {
    var _context3;

    // return all button variants
    return _reduceInstanceProperty(_context3 = _Object$keys(buttonVariantSchema)).call(_context3, function (prev, current) {
      return _objectSpread({}, prev, {}, getButtonThemesByVariant(current, globalStyles));
    }, {});
  }

  if (_Array$isArray(variantTypes)) {
    // return button variants based on indicated types.
    return _reduceInstanceProperty(variantTypes).call(variantTypes, function (prev, current) {
      return _objectSpread({}, prev, {}, getButtonThemesByVariant(current, globalStyles));
    }, {});
  }

  return null;
};