'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveColor = undefined;

var _colors = require('assets/json/colors.json');

var colorSchema = _interopRequireWildcard(_colors);

var _objectHelpers = require('utils/objectHelpers');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var resolveColor = function resolveColor(color) {
  if (!color) {
    return 'inherit';
  }
  return (0, _objectHelpers.isKeyNestedProp)(color) ? (0, _objectHelpers.resolve)(color, colorSchema) : color;
};

exports.resolveColor = resolveColor;