'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlStylesBase = exports.defaultControlStylesBase = undefined;

var _globalStyles = require('../../../global-styles');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    borderSchema = _getGlobalStyles.border,
    gridSchema = _getGlobalStyles.grid;

var defaultControlStylesBase = exports.defaultControlStylesBase = {
  borderColor: borderSchema.borderColor,
  borderColorActive: borderSchema.borderColorActive,
  borderRadius: borderSchema.borderRadius.base,
  padding: gridSchema.gutter
};

var getScaleFactor = function getScaleFactor(props) {
  var sm = props.sm,
      lg = props.lg;
  var _borderSchema$borderR = borderSchema.borderRadius,
      schemaBase = _borderSchema$borderR.base,
      schemaSm = _borderSchema$borderR.sm,
      schemaLg = _borderSchema$borderR.lg;

  var scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  } else {
    scaleFactor = schemaBase;
  }
  return scaleFactor;
};

var controlStylesBase = exports.controlStylesBase = function controlStylesBase() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultControlStylesBase;
  } else {
    overrides = Object.assign({}, defaultControlStylesBase, props, {
      padding: gridSchema[props.gutter] || defaultControlStylesBase.padding
    });
  }

  var scaleFactor = getScaleFactor(props);
  var _overrides = overrides,
      borderColor = _overrides.borderColor,
      padding = _overrides.padding;

  return '\n    border: 1px solid ' + borderColor + ';\n    border-radius: ' + scaleFactor + ';\n    padding: ' + padding + ';\n    outline: 0;\n    &:focus {\n      border: 2px solid ' + borderColorActive + ';\n    }\n  ';
};