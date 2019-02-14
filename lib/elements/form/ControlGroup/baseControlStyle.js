'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.controlStylesBase = exports.focusStylesBase = exports.defaultControlStylesBase = exports.control = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _globalStyles = require('../../../global-styles');

var _componentHelpers = require('../../../utils/componentHelpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    borderSchema = _getGlobalStyles.border,
    gridSchema = _getGlobalStyles.grid;

var control = exports.control = {
  propTypes: {
    activeColor: _propTypes2.default.string,
    bgColor: _propTypes2.default.string,
    borderColor: _propTypes2.default.string,
    borderRadius: _propTypes2.default.string,
    isFocused: _propTypes2.default.bool,
    padding: _propTypes2.default.string,
    placeholderColor: _propTypes2.default.string,
    plainText: _propTypes2.default.bool
  }
};
var defaultControlStylesBase = exports.defaultControlStylesBase = {
  activeColor: 'brandPrimary',
  bgColor: 'white.light',
  borderColor: borderSchema.borderColor,
  borderRadius: borderSchema.borderRadius.base,
  isFocused: false,
  padding: gridSchema.gutter,
  placeholderColor: 'gray.light',
  plainText: false
};

var getScaleFactor = function getScaleFactor(props) {
  var sm = props.sm,
      lg = props.lg;
  var _borderSchema$borderR = borderSchema.borderRadius,
      schemaBase = _borderSchema$borderR.base,
      schemaSm = _borderSchema$borderR.sm,
      schemaLg = _borderSchema$borderR.lg;

  var scaleFactor = schemaBase;
  if (lg) {
    scaleFactor = schemaLg;
  } else if (sm) {
    scaleFactor = schemaSm;
  } else {
    scaleFactor = schemaBase;
  }
  return scaleFactor;
};

var focusStylesBase = exports.focusStylesBase = function focusStylesBase(props) {
  var activeColor = props.activeColor;

  var focusColor = !activeColor ? (0, _componentHelpers.resolveColor)(defaultControlStylesBase.activeColor) : (0, _componentHelpers.resolveColor)(activeColor);
  return '\n    border-color: ' + focusColor + ';\n    box-shadow: 0 0 0 1px ' + focusColor + ';\n    + label { color: ' + focusColor + '; }\n  ';
};

var controlStylesBase = exports.controlStylesBase = function controlStylesBase() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var overrides = null;
  if (!props || Array.isArray(props)) {
    overrides = defaultControlStylesBase;
  } else {
    overrides = Object.assign({}, defaultControlStylesBase, props, {
      padding: gridSchema[props.gutter] || defaultControlStylesBase.padding
    });
  }
  var scaleFactor = getScaleFactor(props);
  var _overrides = overrides,
      activeColor = _overrides.activeColor,
      borderColor = _overrides.borderColor,
      padding = _overrides.padding,
      placeholderColor = _overrides.placeholderColor,
      plainText = _overrides.plainText;

  var focusStyle = focusStylesBase(activeColor);
  if (plainText) {
    return '\n      border: 0;\n      display: block;\n      outline: 0;\n      padding: ' + padding + ';\n    ';
  }
  return '\n    border: 1px solid ' + borderColor + ';\n    border-radius: ' + scaleFactor + ';\n    padding: ' + padding + ';\n    outline: 0;\n    width: 100%;\n    &:focus{\n      ' + focusStyle + '\n    }\n    &[required] + label:after { content: "*" }\n    &[disabled] {\n      opacity: 0.3;\n      ~ * { color: rgba(0,0,0,0.3); }\n    }\n    &::placeholder {\n      color: ' + (0, _componentHelpers.resolveColor)(placeholderColor) + '\n    }\n  ';
};