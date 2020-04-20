import "core-js/modules/es.date.to-string";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.regexp.to-string";
import _parseFloat from "@babel/runtime-corejs3/core-js-stable/parse-float";
import _indexOfInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/index-of";
import { getGlobalStyles } from 'src/global-styles';

var _getGlobalStyles = getGlobalStyles(),
    fontSizeSchema = _getGlobalStyles.fontSize;

export var scaleFactor = function scaleFactor(props) {
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
  var _context, _context2, _context3, _context4;

  // Get the unit of measurement
  var unit = defaultUnit;

  if (_indexOfInstanceProperty(_context = size.toString()).call(_context, '%') !== -1) {
    unit = '%';
  } else if (_indexOfInstanceProperty(_context2 = size.toString()).call(_context2, 'px') !== -1) {
    unit = 'px';
  } else if (_indexOfInstanceProperty(_context3 = size.toString()).call(_context3, 'rem') !== -1) {
    unit = 'rem';
  } else if (_indexOfInstanceProperty(_context4 = size.toString()).call(_context4, 'em') !== -1) {
    unit = 'em';
  }

  return unit;
};

export var scaleFont = function scaleFont(size) {
  var factor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var defaultSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
  var defaultUnit = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'rem';
  // Convert the font size and scale factor to floats for calculation
  var floatSize = _parseFloat(size) || defaultSize;

  var floatScaleFactor = _parseFloat(factor);

  var unit = size ? getUnit(size, defaultUnit) : defaultUnit; // Calculate the final font size

  return (floatSize * floatScaleFactor).toString() + unit;
};