"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.scaleFont = exports.scaleFactor = void 0;

var _parseFloat2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-float"));

var _indexOf = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/index-of"));

var _globalStyles = require("../../../global-styles");

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      fontSizeSchema = _getGlobalStyles.fontSize;

const scaleFactor = props => {
  const _fontSizeSchema$sizeV = fontSizeSchema.sizeVariants,
        schemaSm = _fontSizeSchema$sizeV.sm,
        schemaLg = _fontSizeSchema$sizeV.lg;
  let value = null;
  const sm = props.sm,
        lg = props.lg;

  if (lg) {
    value = schemaLg;
  } else if (sm) {
    value = schemaSm;
  }

  return value;
};

exports.scaleFactor = scaleFactor;

const getUnit = (size, defaultUnit) => {
  var _context, _context2, _context3, _context4;

  // Get the unit of measurement
  let unit = defaultUnit;

  if ((0, _indexOf.default)(_context = size.toString()).call(_context, '%') !== -1) {
    unit = '%';
  } else if ((0, _indexOf.default)(_context2 = size.toString()).call(_context2, 'px') !== -1) {
    unit = 'px';
  } else if ((0, _indexOf.default)(_context3 = size.toString()).call(_context3, 'rem') !== -1) {
    unit = 'rem';
  } else if ((0, _indexOf.default)(_context4 = size.toString()).call(_context4, 'em') !== -1) {
    unit = 'em';
  }

  return unit;
};

const scaleFont = (size, factor = 1, defaultSize = 1, defaultUnit = 'rem') => {
  // Convert the font size and scale factor to floats for calculation
  const floatSize = (0, _parseFloat2.default)(size) || defaultSize;
  const floatScaleFactor = (0, _parseFloat2.default)(factor);
  const unit = size ? getUnit(size, defaultUnit) : defaultUnit; // Calculate the final font size

  return (floatSize * floatScaleFactor).toString() + unit;
};

exports.scaleFont = scaleFont;