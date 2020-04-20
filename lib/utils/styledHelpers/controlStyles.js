import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _Number$parseInt from "@babel/runtime-corejs3/core-js-stable/number/parse-int";
import _concatInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/concat";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context29; _forEachInstanceProperty(_context29 = ownKeys(Object(source), true)).call(_context29, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context30; _forEachInstanceProperty(_context30 = ownKeys(Object(source))).call(_context30, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import { getGlobalStyles, getGlobalOverrides } from 'src/global-styles';
import { DateFieldControlOverrides } from 'src/elements/forms/DateField/constants';
import { resolveBorderRadius, resolveColor } from './utils';
import { defaultControlStyles, defaultStylesBase } from './cssDefaults';
import { colorCore } from './core';

var _getGlobalStyles = getGlobalStyles(),
    borderSchema = _getGlobalStyles.border,
    gridSchema = _getGlobalStyles.grid;

export var controlColor = function controlColor(props) {
  var bg = props.bg,
      formStyle = props.formStyle;
  var nextBg = formStyle === 'filled' && !bg ? 'formControlFilledBg' : bg || defaultStylesBase.bg;
  return colorCore(_objectSpread({}, props, {
    bg: nextBg
  }));
};
export var focusStyles = function focusStyles(props) {
  var _context2, _context3;

  var activeColor = props.activeColor,
      formStyle = props.formStyle;
  var focusColor = !activeColor ? resolveColor(defaultControlStyles.activeColor, props) : resolveColor(activeColor, props);

  if (formStyle === 'filled') {
    var _context;

    return _concatInstanceProperty(_context = "\n      border-bottom: 2px solid ".concat(focusColor, ";\n      margin-bottom: -1px;\n      + label { color: ")).call(_context, focusColor, "; }\n    ");
  }

  return _concatInstanceProperty(_context2 = _concatInstanceProperty(_context3 = "\n    border-color: ".concat(focusColor, ";\n    box-shadow: 0 0 0 1px ")).call(_context3, focusColor, ";\n    + label { color: ")).call(_context2, focusColor, "; }\n  ");
};
export var disabledStyle = "\n  opacity: 0.3;\n  ~ * { color: rgba(0,0,0,0.3); }\n";

var scaleFactor = function scaleFactor(props) {
  var sm = props.sm,
      lg = props.lg;
  var _borderSchema$borderR = borderSchema.borderRadius,
      schemaBase = _borderSchema$borderR.base,
      schemaSm = _borderSchema$borderR.sm,
      schemaLg = _borderSchema$borderR.lg;
  var value = schemaBase;

  if (lg) {
    value = schemaLg;
  } else if (sm) {
    value = schemaSm;
  } else {
    value = schemaBase;
  }

  return value;
};

export var getFinalFieldPadding = function getFinalFieldPadding(padding, formStyle, labelText) {
  var _context4, _context5, _context6, _context7, _context8, _context9, _context10, _context11, _context12, _context13, _context14, _context15, _context16, _context17, _context18;

  return formStyle === 'filled' && labelText ? _concatInstanceProperty(_context4 = _concatInstanceProperty(_context5 = _concatInstanceProperty(_context6 = _concatInstanceProperty(_context7 = _concatInstanceProperty(_context8 = _concatInstanceProperty(_context9 = _concatInstanceProperty(_context10 = _concatInstanceProperty(_context11 = _concatInstanceProperty(_context12 = _concatInstanceProperty(_context13 = _concatInstanceProperty(_context14 = "\n    padding: ".concat(_Number$parseInt(padding, 10) * 1.5, "rem ")).call(_context14, padding, " ")).call(_context13, _Number$parseInt(padding, 10) / 2, "rem;\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -")).call(_context12, _Number$parseInt(padding, 10) * 1.5, "rem -")).call(_context11, padding, " -")).call(_context10, _Number$parseInt(padding, 10) / 2, "rem;\n      padding: ")).call(_context9, _Number$parseInt(padding, 10) * 1.5, "rem ")).call(_context8, padding, " ")).call(_context7, _Number$parseInt(padding, 10) / 2, "rem;\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-")).call(_context6, padding, ") translateY(calc(")).call(_context5, _Number$parseInt(padding, 10) / 2, "rem + 2px));\n      }\n    }\n    + label {\n      background: transparent;\n      line-height: 1;\n      top: ")).call(_context4, _Number$parseInt(padding, 10) - 0.2, "rem;\n    }\n  ") : _concatInstanceProperty(_context15 = _concatInstanceProperty(_context16 = _concatInstanceProperty(_context17 = _concatInstanceProperty(_context18 = "\n    padding: ".concat(padding, ";\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -")).call(_context18, padding, ";\n      padding: ")).call(_context17, padding, ";\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-")).call(_context16, padding, ") translateY(calc(")).call(_context15, padding, " + 2px));\n      }\n    }\n  ");
};

var getFinalStyle = function getFinalStyle(props) {
  var _context19, _context20, _context21, _context22, _context23, _context27, _context28;

  var activeColor = props.activeColor,
      borderColor = props.borderColor,
      formStyle = props.formStyle,
      labelText = props.labelText,
      padding = props.padding,
      placeholderColor = props.placeholderColor;
  var scale = scaleFactor(props);
  var globalOverrides = getGlobalOverrides(props);
  var focusStyle = focusStyles(_objectSpread({
    activeColor: activeColor,
    formStyle: formStyle
  }, globalOverrides));
  var resolvedBorderColor = resolveColor(borderColor, globalOverrides);
  var resolvedPlaceholderColor = resolveColor(placeholderColor, globalOverrides);

  var controlSharedStyle = _concatInstanceProperty(_context19 = _concatInstanceProperty(_context20 = _concatInstanceProperty(_context21 = _concatInstanceProperty(_context22 = _concatInstanceProperty(_context23 = "\n    appearance: none;\n    border-radius: ".concat(resolveBorderRadius(props), ";\n    outline: 0;\n    width: 100%;\n    box-sizing: border-box;\n    ")).call(_context23, getFinalFieldPadding(padding, formStyle, labelText), "\n    &[disabled] {\n      ")).call(_context22, disabledStyle, "\n    }\n    &:focus, &:focus-within{ ")).call(_context21, focusStyle, " }\n    &::placeholder,\n    input::placeholder {\n      color: ")).call(_context20, resolvedPlaceholderColor, "\n    }\n    ")).call(_context19, DateFieldControlOverrides, "\n  ");

  if (formStyle === 'filled') {
    var _context24, _context25, _context26;

    return _concatInstanceProperty(_context24 = _concatInstanceProperty(_context25 = _concatInstanceProperty(_context26 = "\n      border: 0;\n      border-bottom: 1px solid ".concat(resolvedBorderColor, ";\n      border-radius: ")).call(_context26, scale, " ")).call(_context25, scale, " 0 0;\n      ")).call(_context24, controlSharedStyle, "\n    ");
  }

  return _concatInstanceProperty(_context27 = _concatInstanceProperty(_context28 = "\n    border: 1px solid ".concat(resolvedBorderColor, ";\n    border-radius: ")).call(_context28, scale, ";\n    ")).call(_context27, controlSharedStyle, "\n  ");
};

export var controlStyles = function controlStyles() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var overrides = null;
  overrides = _objectSpread({}, defaultControlStyles, {}, props, {
    padding: gridSchema[props.gutter] || defaultControlStyles.padding
  });
  return getFinalStyle(_objectSpread({}, props, {}, overrides));
};