'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textStylesBase = undefined;

var _componentHelpers = require('../../utils/componentHelpers');

var _globalStyles = require('../../global-styles');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontFamilySchema = _getGlobalStyles.fontFamily,
    fontSizeSchema = _getGlobalStyles.fontSize;

var defaultTextStylesBase = {
  color: 'inherit',
  fontFamily: fontFamilySchema.base,
  fontSizeBase: fontSizeSchema.baseFontSize,
  fontWeight: 'inherit',
  italic: false,
  kerning: 'inherit',
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
      color: getColor(props),
      fontFamily: fontFamilySchema[props.fontFamily] || defaultTextStylesBase.fontFamily
    });
  }

  var scaleFactor = getScaleFactor(props);
  var _overrides = overrides,
      color = _overrides.color,
      fontFamily = _overrides.fontFamily,
      fontSizeBase = _overrides.fontSizeBase,
      fontWeight = _overrides.fontWeight,
      italic = _overrides.italic,
      kerning = _overrides.kerning,
      textAlign = _overrides.textAlign;

  return '\n    font-family: ' + fontFamily + ';\n    font-size: calc(' + fontSizeBase + ' * ' + scaleFactor + ');\n    font-weight: ' + fontWeight + ';\n    letter-spacing: ' + kerning + ';\n    line-height: 1.5;\n    ' + (italic ? 'font-style: italic;' : '') + '\n    color: ' + color + ';\n    text-align: ' + textAlign + ';\n  ';
};