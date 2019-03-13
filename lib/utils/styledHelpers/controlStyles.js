'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlStyles = exports.focusStyles = exports.controlColor = undefined;

var _globalStyles = require('../../global-styles');

var _utils = require('./utils');

var _cssDefaults = require('./cssDefaults');

var _core = require('./core');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    borderSchema = _getGlobalStyles.border,
    gridSchema = _getGlobalStyles.grid;

var controlColor = exports.controlColor = function controlColor(props) {
  var bg = props.bg,
      formStyle = props.formStyle;

  var nextBg = formStyle === 'filled' && !bg ? 'formControlFilledBg' : bg || _cssDefaults.defaultStylesBase.bg;
  return (0, _core.colorCore)(Object.assign({}, props, { bg: nextBg }));
};

var focusStyles = exports.focusStyles = function focusStyles(props) {
  var activeColor = props.activeColor,
      formStyle = props.formStyle;

  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  var focusColor = !activeColor ? (0, _utils.resolveColor)(_cssDefaults.defaultControlStyles.activeColor, globalOverrides) : (0, _utils.resolveColor)(activeColor, globalOverrides);
  if (formStyle === 'filled') {
    return '\n      border-bottom: 2px solid ' + focusColor + ';\n      margin-bottom: -1px;\n      + label { color: ' + focusColor + '; }\n    ';
  }
  return '\n    border-color: ' + focusColor + ';\n    box-shadow: 0 0 0 1px ' + focusColor + ';\n    + label { color: ' + focusColor + '; }\n  ';
};

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

var getFinalStyle = function getFinalStyle(props) {
  var activeColor = props.activeColor,
      borderColor = props.borderColor,
      formStyle = props.formStyle,
      padding = props.padding,
      placeholderColor = props.placeholderColor;

  var scale = scaleFactor(props);
  var globalOverrides = (0, _globalStyles.getGlobalOverrides)(props);
  var focusStyle = focusStyles({ activeColor: activeColor, formStyle: formStyle, globalOverrides: globalOverrides });
  var resolvedBorderColor = (0, _utils.resolveColor)(borderColor, globalOverrides);
  var resolvedPlaceholderColor = (0, _utils.resolveColor)(placeholderColor, globalOverrides);
  var filledPadding = Number.parseInt(padding, 10) * 1.5 + 'rem ' + padding + ' ' + Number.parseInt(padding, 10) / 2 + 'rem';
  var topLabel = Number.parseInt(padding, 10) - 0.1 + 'rem';
  var controlSharedStyle = '\n    outline: 0;\n    width: 100%;\n    &[required] + label:after { content: "*" }\n    &[disabled] {\n      opacity: 0.3;\n      ~ * { color: rgba(0,0,0,0.3); }\n    }\n    &:focus{ ' + focusStyle + ' }\n    &::placeholder { color: ' + resolvedPlaceholderColor + ' }\n  ';
  if (formStyle === 'filled') {
    return '\n      border-bottom: 1px solid ' + resolvedBorderColor + ';\n      border-radius: ' + scale + ' ' + scale + ' 0 0;\n      padding: ' + filledPadding + ';\n      + label {\n        top: ' + topLabel + ';\n        background: transparent;\n      }\n      ' + controlSharedStyle + '\n    ';
  }
  return '\n    border: 1px solid ' + resolvedBorderColor + ';\n    border-radius: ' + scale + ';\n    padding: ' + padding + ';\n    ' + controlSharedStyle + '\n  ';
};

var controlStyles = exports.controlStyles = function controlStyles() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = _cssDefaults.defaultControlStyles;
  } else {
    overrides = Object.assign({}, _cssDefaults.defaultControlStyles, props, {
      padding: gridSchema[props.gutter] || _cssDefaults.defaultControlStyles.padding
    });
  }
  var _overrides = overrides,
      padding = _overrides.padding,
      plainText = _overrides.plainText;

  if (plainText) {
    return '\n      border: 0;\n      display: block;\n      outline: 0;\n      padding: ' + padding + ';\n    ';
  }
  return getFinalStyle(Object.assign({}, props, overrides));
};