"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlLabel = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _globalStyles = require("../../../global-styles");

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  left: ", ";\n  padding: 0 ", ";\n  ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize,
    gridSchema = _getGlobalStyles.grid;

var padding = (0, _styledHelpers.scaleFont)(gridSchema.gutter, 0.5);

var colorLabel = function colorLabel(props) {
  return (0, _styledHelpers.colorCore)(_objectSpread({}, props, {
    color: !props.validationError ? props.color : 'brandDanger'
  }));
};

var fontSizeLabel = function fontSizeLabel(props) {
  return (0, _styledHelpers.fontSizeCore)(_objectSpread({}, props, {
    sm: true
  }));
};

var positionStyle = function positionStyle(props) {
  return "position: ".concat(props.isRelative ? 'relative' : 'absolute', ";");
};

var isRelativeStyle = function isRelativeStyle(props) {
  return props.isRelative ? '' : "top: -1px; height: ".concat(fontSizeSchema.sizeVariants.sm / 2, "rem");
};

var ControlLabel = exports.ControlLabel = (0, _styledComponents2.default)(_component.ControlLabelComponent)(_templateObject(), colorLabel, _styledHelpers.fontFamilyCore, fontSizeLabel, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, padding, padding, isRelativeStyle, positionStyle);
ControlLabel.propTypes = _objectSpread({
  bg: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  isRelative: _propTypes2.default.bool
}, _styledHelpers.typography.propTypes, {
  validationError: _propTypes2.default.string
});
ControlLabel.defaultProps = {
  bg: _styledHelpers.defaultControlStyles.bg,
  disabled: false,
  isRelative: false,
  lineHeight: 0.8,
  validationError: ''
};