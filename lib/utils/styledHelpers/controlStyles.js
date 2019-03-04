'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlStyles = exports.focusStyles = undefined;

var _globalStyles = require('../../global-styles');

var _utils = require('./utils');

var _cssDefaults = require('./cssDefaults');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    borderSchema = _getGlobalStyles.border,
    gridSchema = _getGlobalStyles.grid;

var focusStyles = exports.focusStyles = function focusStyles(props) {
  var activeColor = props.activeColor;

  var focusColor = !activeColor ? (0, _utils.resolveColor)(_cssDefaults.defaultControlStyles.activeColor) : (0, _utils.resolveColor)(activeColor);
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

var getFinalStyle = function getFinalStyle(_ref) {
  var borderColor = _ref.borderColor,
      focusStyle = _ref.focusStyle,
      formStyle = _ref.formStyle,
      padding = _ref.padding,
      placeholderColor = _ref.placeholderColor,
      scale = _ref.scale;

  var resolvedBorderColor = (0, _utils.resolveColor)(borderColor);
  var resolvedPlaceholderColor = (0, _utils.resolveColor)(placeholderColor);
  // TODO: Ryan please apply the filled style here
  if (formStyle === 'filled') {
    return '\n      border: 2px solid ' + resolvedBorderColor + ';\n      border-radius: ' + scale + ';\n      padding: ' + padding + ';\n      outline: 1;\n      width: 100%;\n      &:focus{\n        ' + focusStyle + '\n      }\n      &[required] + label:after { content: "*" }\n      &[disabled] {\n        opacity: 0.3;\n        ~ * { color: rgba(0,0,0,0.3); }\n      }\n      &::placeholder {\n        color: ' + resolvedPlaceholderColor + '\n    }';
  }
  return '\n    border: 1px solid ' + resolvedBorderColor + ';\n    border-radius: ' + scale + ';\n    padding: ' + padding + ';\n    outline: 0;\n    width: 100%;\n    &:focus{\n      ' + focusStyle + '\n    }\n    &[required] + label:after { content: "*" }\n    &[disabled] {\n      opacity: 0.3;\n      ~ * { color: rgba(0,0,0,0.3); }\n    }\n    &::placeholder {\n      color: ' + resolvedPlaceholderColor + '\n    }';
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
      activeColor = _overrides.activeColor,
      borderColor = _overrides.borderColor,
      padding = _overrides.padding,
      placeholderColor = _overrides.placeholderColor,
      plainText = _overrides.plainText,
      formStyle = _overrides.formStyle;

  var focusStyle = focusStyles(activeColor);

  if (plainText) {
    return '\n      border: 0;\n      display: block;\n      outline: 0;\n      padding: ' + padding + ';\n    ';
  }
  return getFinalStyle({
    borderColor: borderColor,
    focusStyle: focusStyle,
    formStyle: formStyle,
    padding: padding,
    placeholderColor: placeholderColor,
    scale: scaleFactor(props)
  });
};