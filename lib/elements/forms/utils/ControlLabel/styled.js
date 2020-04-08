"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.object.define-properties");

require("core-js/modules/es.object.define-property");

require("core-js/modules/es.object.freeze");

require("core-js/modules/es.object.get-own-property-descriptor");

require("core-js/modules/es.object.get-own-property-descriptors");

require("core-js/modules/es.object.keys");

require("core-js/modules/web.dom-collections.for-each");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlLabel = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _globalStyles = require("../../../../global-styles");

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../../utils/styledHelpers");

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

var ControlLabel = (0, _styledComponents["default"])(_component.ControlLabelComponent)(_templateObject(), colorLabel, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, fontSizeLabel, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledSystem.layout, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledSystem.position, _styledSystem.space, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);
exports.ControlLabel = ControlLabel;
ControlLabel.propTypes = _objectSpread({
  /** Background of the label component.  For 'outlined' styled controls, this assures that the label is making space on the control's border. */
  bg: _propTypes["default"].string,

  /** When true, this will change the label text color to the control disabled color. */
  disabled: _propTypes["default"].bool
}, _styledHelpers.typography.propTypes, {
  /** When true, this will change the label text color to brandDanger. */
  validationError: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].string])
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