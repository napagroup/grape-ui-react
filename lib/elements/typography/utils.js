'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Use this function to convert sizes and avoid IE quirks
var getScaledSize = exports.getScaledSize = function getScaledSize(size, scaleFactor, defaultSize, defaultUnit) {
  // Convert the font size and scale factor to floats for calculation
  var floatSize = parseFloat(size) || defaultSize || 1;
  var floatScaleFactor = parseFloat(scaleFactor) || 1;

  // Get the unit of measurement
  var unit = defaultUnit || ''; // default
  if (size) {
    if (size.toString().indexOf('%') !== -1) {
      unit = '%';
    } else if (size.toString().indexOf('px') !== -1) {
      unit = 'px';
    } else if (size.toString().indexOf('rem') !== -1) {
      unit = 'rem';
    } else if (size.toString().indexOf('em') !== -1) {
      unit = 'em';
    }
  }

  // Calculate the final font size
  return (floatSize * floatScaleFactor).toString() + unit;
};

var getScaledFontSize = exports.getScaledFontSize = function getScaledFontSize(size, scaleFactor) {
  return getScaledSize(size, scaleFactor, 12, 'px');
};