'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveColor = undefined;

var _globalStyles = require('../../global-styles');

var _objectHelpers = require('utils/objectHelpers');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    colorSchema = _getGlobalStyles.colors;

var defaultValue = 'inherit';

var resolveColor = function resolveColor(color) {
  if (!color || typeof color !== 'string') {
    return defaultValue;
  }
  var resolvedValue = (0, _objectHelpers.isKeyNestedProp)(color) ? (0, _objectHelpers.resolve)(color, colorSchema) : (0, _objectHelpers.resolve)(color + '.base', colorSchema);
  return resolvedValue || defaultValue;
};

exports.resolveColor = resolveColor;