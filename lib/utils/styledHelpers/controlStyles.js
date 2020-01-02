"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlStyles = exports.getFinalFieldPadding = exports.disabledStyle = exports.focusStyles = exports.controlColor = undefined;

var _globalStyles = require("../../global-styles");

var _constants = require("../../elements/form/DateField/constants");

var _utils = require("./utils");

var _cssDefaults = require("./cssDefaults");

var _core = require("./core");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    borderSchema = _getGlobalStyles.border,
    gridSchema = _getGlobalStyles.grid;

var controlColor = exports.controlColor = function controlColor(props) {
  var bg = props.bg,
      formStyle = props.formStyle;
  var nextBg = formStyle === 'filled' && !bg ? 'formControlFilledBg' : bg || _cssDefaults.defaultStylesBase.bg;
  return (0, _core.colorCore)(_objectSpread({}, props, {
    bg: nextBg
  }));
};

var focusStyles = exports.focusStyles = function focusStyles(props) {
  var activeColor = props.activeColor,
      formStyle = props.formStyle;
  var focusColor = !activeColor ? (0, _utils.resolveColor)(_cssDefaults.defaultControlStyles.activeColor, props) : (0, _utils.resolveColor)(activeColor, props);

  if (formStyle === 'filled') {
    return "\n      border-bottom: 2px solid ".concat(focusColor, ";\n      margin-bottom: -1px;\n      + label { color: ").concat(focusColor, "; }\n    ");
  }

  return "\n    border-color: ".concat(focusColor, ";\n    box-shadow: 0 0 0 1px ").concat(focusColor, ";\n    + label { color: ").concat(focusColor, "; }\n  ");
};

var disabledStyle = exports.disabledStyle = "\n  opacity: 0.3;\n  ~ * { color: rgba(0,0,0,0.3); }\n";

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

var getFinalFieldPadding = exports.getFinalFieldPadding = function getFinalFieldPadding(padding, formStyle, labelText) {
  return formStyle === 'filled' && labelText ? "\n    padding: ".concat(Number.parseInt(padding, 10) * 1.5, "rem ").concat(padding, " ").concat(Number.parseInt(padding, 10) / 2, "rem;\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -").concat(Number.parseInt(padding, 10) * 1.5, "rem -").concat(padding, " -").concat(Number.parseInt(padding, 10) / 2, "rem;\n      padding: ").concat(Number.parseInt(padding, 10) * 1.5, "rem ").concat(padding, " ").concat(Number.parseInt(padding, 10) / 2, "rem;\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-").concat(padding, ") translateY(calc(").concat(Number.parseInt(padding, 10) / 2, "rem + 2px));\n      }\n    }\n    + label {\n      background: transparent;\n      line-height: 1;\n      top: ").concat(Number.parseInt(padding, 10) - 0.2, "rem;\n    }\n  ") : "\n    padding: ".concat(padding, ";\n    .grape-ui-select__control,\n    .DayPickerInput > input {\n      margin: -").concat(padding, ";\n      padding: ").concat(padding, ";\n      + .DayPickerInput-OverlayWrapper {\n        transform: translateX(-").concat(padding, ") translateY(calc(").concat(padding, " + 2px));\n      }\n    }\n  ");
};

var getFinalStyle = function getFinalStyle(props) {
  var activeColor = props.activeColor,
      borderColor = props.borderColor,
      formStyle = props.formStyle,
      labelText = props.labelText,
      padding = props.padding,
      placeholderColor = props.placeholderColor;
  var scale = scaleFactor(props);
  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  var focusStyle = focusStyles(_objectSpread({
    activeColor: activeColor,
    formStyle: formStyle
  }, globalOverrides));
  var resolvedBorderColor = (0, _utils.resolveColor)(borderColor, globalOverrides);
  var resolvedPlaceholderColor = (0, _utils.resolveColor)(placeholderColor, globalOverrides);
  var controlSharedStyle = "\n    border-radius: ".concat((0, _utils.resolveBorderRadius)(props), ";\n    outline: 0;\n    width: 100%;\n    ").concat(getFinalFieldPadding(padding, formStyle, labelText), "\n    &[disabled] {\n      ").concat(disabledStyle, "\n    }\n    &:focus, &:focus-within{ ").concat(focusStyle, " }\n    &::placeholder,\n    input::placeholder {\n      color: ").concat(resolvedPlaceholderColor, "\n    }\n    ").concat(_constants.DateFieldControlOverrides, "\n  ");

  if (formStyle === 'filled') {
    return "\n      border-bottom: 1px solid ".concat(resolvedBorderColor, ";\n      border-radius: ").concat(scale, " ").concat(scale, " 0 0;\n      ").concat(controlSharedStyle, "\n    ");
  }

  return "\n    border: 1px solid ".concat(resolvedBorderColor, ";\n    border-radius: ").concat(scale, ";\n    ").concat(controlSharedStyle, "\n  ");
};

var controlStyles = exports.controlStyles = function controlStyles() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var overrides = null;
  overrides = _objectSpread({}, _cssDefaults.defaultControlStyles, {}, props, {
    padding: gridSchema[props.gutter] || _cssDefaults.defaultControlStyles.padding
  });
  var _overrides = overrides,
      formStyle = _overrides.formStyle,
      labelText = _overrides.labelText,
      padding = _overrides.padding,
      plainText = _overrides.plainText;

  if (plainText) {
    return "\n      border: 0;\n      display: block;\n      outline: 0;\n      width: 100%;\n      ".concat(getFinalFieldPadding(padding, formStyle, labelText), "\n    ");
  }

  return getFinalStyle(_objectSpread({}, props, {}, overrides));
};