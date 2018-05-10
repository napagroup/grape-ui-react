'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStylesBase = undefined;

var _componentHelpers = require('../../utils/componentHelpers');

var _fontSize = require('../../assets/json/fontSize.json');

var fontSizeSchema = _interopRequireWildcard(_fontSize);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultTextStylesBase = {
  color: 'inherit',
  fontSizeBase: fontSizeSchema.baseFontSize,
  fontWeight: 'inherit',
  italic: false,
  lg: false,
  sm: false,
  textAlign: 'inherit'
};

var getScaleFactor = function getScaleFactor(props) {
  var sm = props.sm,
      lg = props.lg;
  var _fontSizeSchema$sizeV = fontSizeSchema.sizeVariants,
      schemaBase = _fontSizeSchema$sizeV.base,
      schemaSm = _fontSizeSchema$sizeV.sm,
      schemaLg = _fontSizeSchema$sizeV.lg;

  var scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  }
  return scaleFactor;
};

var getColor = function getColor(props) {
  var color = props.color;

  if (!color) {
    return defaultTextStylesBase.color;
  }
  return (0, _componentHelpers.resolveColor)(color);
};

var textStylesBase = exports.textStylesBase = function textStylesBase() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultTextStylesBase;
  } else {
    overrides = Object.assign({}, defaultTextStylesBase, props, {
      color: getColor(props)
    });
  }

  var scaleFactor = getScaleFactor(props);
  var _overrides = overrides,
      fontSizeBase = _overrides.fontSizeBase,
      italic = _overrides.italic,
      color = _overrides.color,
      fontWeight = _overrides.fontWeight,
      textAlign = _overrides.textAlign;

  return '\n    font-size: calc(' + fontSizeBase + ' * ' + scaleFactor + ');\n    font-weight: ' + fontWeight + ';\n    line-height: 1.5;\n    ' + (italic ? 'font-style: italic;' : '') + '\n    color: ' + color + ';\n    text-align: ' + textAlign + ';\n  ';
};