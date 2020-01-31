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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    fontSizeSchema = _getGlobalStyles.fontSize;

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

var ControlLabel = (0, _styledComponents2["default"])(_component.ControlLabelComponent)(_templateObject(), colorLabel, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, fontSizeLabel, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledSystem.layout, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledSystem.position, _styledSystem.space, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);
ControlLabel.propTypes = _objectSpread({
  bg: _propTypes2["default"].string,
  disabled: _propTypes2["default"].bool
}, _styledHelpers.typography.propTypes, {
  validationError: _propTypes2["default"].string
});
ControlLabel.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  bg: _styledHelpers.defaultControlStyles.bg,
  disabled: false,
  height: "".concat(fontSizeSchema.sizeVariants.sm / 2, "rem"),
  left: 2,
  lineHeight: 0.8,
  position: 'absolute',
  px: 2,
  top: '-1px',
  validationError: ''
});
/** @component */

exports.ControlLabel = ControlLabel;