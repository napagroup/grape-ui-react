'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStylesBase = undefined;

var _styledComponents = require('styled-components');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSizeObject = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var textStylesBase = exports.textStylesBase = function textStylesBase(_ref) {
  var _ref$fontSizeBase = _ref.fontSizeBase,
      fontSizeBase = _ref$fontSizeBase === undefined ? fontSizeObject.baseFontSize : _ref$fontSizeBase,
      _ref$italic = _ref.italic,
      italic = _ref$italic === undefined ? true : _ref$italic,
      _ref$lg = _ref.lg,
      lg = _ref$lg === undefined ? false : _ref$lg,
      _ref$sm = _ref.sm,
      sm = _ref$sm === undefined ? false : _ref$sm;

  var fontSizeVariants = fontSizeObject.sizeVariants;
  var sizeVariant = fontSizeVariants.base;
  if (lg) {
    sizeVariant = fontSizeVariants.lg;
  } else if (sm) {
    sizeVariant = fontSizeVariants.sm;
  }
  var Primitive = '\n    font-size: calc(' + fontSizeBase + ' * ' + sizeVariant + ');\n    line-height: 1.5;\n    ' + (italic ? 'font-style: italic;' : '') + '\n  ';
  return Primitive;
};