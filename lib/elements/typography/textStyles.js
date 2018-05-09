'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStylesBase = undefined;

var _fontSize = require('../../assets/json/fontSize.json');

var fontSizeSchema = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultTextStylesBase = {
  colorBase: 'inherit',
  fontSizeBase: fontSizeSchema.baseFontSize,
  fontWeight: 'inherit',
  italic: false,
  // kerning: false,
  lg: false,
  sm: false,
  textAlign: 'inherit'
};

var textStylesBase = exports.textStylesBase = function textStylesBase() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultTextStylesBase,
      _ref$colorBase = _ref.colorBase,
      colorBase = _ref$colorBase === undefined ? 'inherit' : _ref$colorBase,
      _ref$fontSizeBase = _ref.fontSizeBase,
      fontSizeBase = _ref$fontSizeBase === undefined ? fontSizeSchema.baseFontSize : _ref$fontSizeBase,
      _ref$fontWeight = _ref.fontWeight,
      fontWeight = _ref$fontWeight === undefined ? 'inherit' : _ref$fontWeight,
      _ref$italic = _ref.italic,
      italic = _ref$italic === undefined ? false : _ref$italic,
      _ref$lg = _ref.lg,
      lg = _ref$lg === undefined ? false : _ref$lg,
      _ref$sm = _ref.sm,
      sm = _ref$sm === undefined ? false : _ref$sm,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === undefined ? 'inherit' : _ref$textAlign;

  var sizeVariants = fontSizeSchema.sizeVariants;
  var schemaBase = sizeVariants.base,
      schemaSm = sizeVariants.sm,
      schemaLg = sizeVariants.lg;

  var scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  }
  return '\n    font-size: calc(' + fontSizeBase + ' * ' + scaleFactor + ');\n    font-weight: ' + fontWeight + ';\n    line-height: 1.5;\n    ' + (italic ? 'font-style: italic;' : '') + '\n    color: ' + colorBase + ';\n    text-align: ' + textAlign + ';\n    ' + (kerning ? 'font-kerning: normal;' : '') + '\n  ';
};