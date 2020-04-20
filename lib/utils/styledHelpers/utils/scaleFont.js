"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

require("core-js/modules/es.date.to-string");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.scaleFont = exports.scaleFactor = void 0;

var _parseFloat2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-float"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _globalStyles = require("../../../global-styles");

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize;

var scaleFactor = function scaleFactor(props) {
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

exports.scaleFactor = scaleFactor;

var getUnit = function getUnit(size, defaultUnit) {
  var _context, _context2, _context3, _context4;

  // Get the unit of measurement
  var unit = defaultUnit;

  if ((0, _indexOf["default"])(_context = size.toString()).call(_context, '%') !== -1) {
    unit = '%';
  } else if ((0, _indexOf["default"])(_context2 = size.toString()).call(_context2, 'px') !== -1) {
    unit = 'px';
  } else if ((0, _indexOf["default"])(_context3 = size.toString()).call(_context3, 'rem') !== -1) {
    unit = 'rem';
  } else if ((0, _indexOf["default"])(_context4 = size.toString()).call(_context4, 'em') !== -1) {
    unit = 'em';
  }

  return unit;
};

var scaleFont = function scaleFont(size) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var defaultSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var defaultUnit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rem';
  // Convert the font size and scale factor to floats for calculation
  var floatSize = (0, _parseFloat2["default"])(size) || defaultSize;
  var floatScaleFactor = (0, _parseFloat2["default"])(factor);
  var unit = size ? getUnit(size, defaultUnit) : defaultUnit; // Calculate the final font size

  return (floatSize * floatScaleFactor).toString() + unit;
};

exports.scaleFont = scaleFont;