"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scaleFont = exports.scaleFactor = undefined;

var _globalStyles = require("../../../global-styles");

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize;

var scaleFactor = exports.scaleFactor = function scaleFactor(props) {
  var _fontSizeSchema$sizeV = fontSizeSchema.sizeVariants,
      schemaSm = _fontSizeSchema$sizeV.sm,
      schemaLg = _fontSizeSchema$sizeV.lg;
  var value = null;
  var sm = props.sm,
      lg = props.lg;

  if (lg) {
    value = schemaLg;
  } else if (sm) {
    value = schemaSm;
  }

  return value;
};

var getUnit = function getUnit(size, defaultUnit) {
  // Get the unit of measurement
  var unit = defaultUnit;

  if (size.toString().indexOf('%') !== -1) {
    unit = '%';
  } else if (size.toString().indexOf('px') !== -1) {
    unit = 'px';
  } else if (size.toString().indexOf('rem') !== -1) {
    unit = 'rem';
  } else if (size.toString().indexOf('em') !== -1) {
    unit = 'em';
  }

  return unit;
};

var scaleFont = exports.scaleFont = function scaleFont(size) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var defaultSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var defaultUnit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rem';
  // Convert the font size and scale factor to floats for calculation
  var floatSize = parseFloat(size) || defaultSize;
  var floatScaleFactor = parseFloat(factor);
  var unit = size ? getUnit(size, defaultUnit) : defaultUnit; // Calculate the final font size

  return (floatSize * floatScaleFactor).toString() + unit;
};