"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlStyles = exports.getFinalFieldPadding = exports.disabledStyle = exports.focusStyles = exports.controlColor = undefined;

var _globalStyles = require("../../global-styles");

var _utils = require("./utils");

var _cssDefaults = require("./cssDefaults");

var _core = require("./core");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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
  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  var focusColor = !activeColor ? (0, _utils.resolveColor)(_cssDefaults.defaultControlStyles.activeColor, globalOverrides) : (0, _utils.resolveColor)(activeColor, globalOverrides);

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
  return formStyle === 'filled' && labelText ? "".concat(Number.parseInt(padding, 10) * 1.5, "rem ").concat(padding, " ").concat(Number.parseInt(padding, 10) / 2, "rem") : padding;
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
  var topLabel = "".concat(Number.parseInt(padding, 10) - 0.2, "rem");
  var controlSharedStyle = "\n    outline: 0;\n    padding: ".concat(getFinalFieldPadding(padding, formStyle, labelText), ";\n    width: 100%;\n    &[required] + label:after { content: \"*\" }\n    &[disabled] {\n      ").concat(disabledStyle, "\n    }\n    &:focus{ ").concat(focusStyle, " }\n    &::placeholder { color: ").concat(resolvedPlaceholderColor, " }\n  ");

  if (formStyle === 'filled') {
    return "\n      border-bottom: 1px solid ".concat(resolvedBorderColor, ";\n      border-radius: ").concat(scale, " ").concat(scale, " 0 0;\n      + label {\n        background: transparent;\n        line-height: 1;\n        top: ").concat(topLabel, ";\n      }\n      ").concat(controlSharedStyle, "\n    ");
  }

  return "\n    border: 1px solid ".concat(resolvedBorderColor, ";\n    border-radius: ").concat(scale, ";\n    ").concat(controlSharedStyle, "\n  ");
};

var controlStyles = exports.controlStyles = function controlStyles() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var overrides = null;

  if (!props || Array.isArray(props)) {
    overrides = _cssDefaults.defaultControlStyles;
  } else {
    overrides = _objectSpread({}, _cssDefaults.defaultControlStyles, props, {
      padding: gridSchema[props.gutter] || _cssDefaults.defaultControlStyles.padding
    });
  }

  var _overrides = overrides,
      padding = _overrides.padding,
      plainText = _overrides.plainText;

  if (plainText) {
    return "\n      border: 0;\n      display: block;\n      outline: 0;\n      padding: ".concat(padding, ";\n    ");
  }

  return getFinalStyle(_objectSpread({}, props, overrides));
};