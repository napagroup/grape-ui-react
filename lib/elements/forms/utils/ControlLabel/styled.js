"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.ControlLabel = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _globalStyles = require("../../../../global-styles");

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../../utils/styledHelpers");

var _component = require("./component");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
      fontSizeSchema = _getGlobalStyles.fontSize;

const colorLabel = props => (0, _styledHelpers.colorCore)(_objectSpread({}, props, {
  color: !props.validationError ? props.color : 'brandDanger'
}));

const fontSizeLabel = props => (0, _styledHelpers.fontSizeCore)(_objectSpread({}, props, {
  sm: true
}));

const ControlLabel = (0, _styledComponents.default)(_component.ControlLabelComponent)(_templateObject(), colorLabel, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, fontSizeLabel, _styledHelpers.fontStyleCore, _styledSystem.fontWeight, _styledSystem.layout, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledSystem.position, _styledSystem.space, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore);
exports.ControlLabel = ControlLabel;
ControlLabel.propTypes = _objectSpread({
  /** Background of the label component.  For 'outlined' styled controls, this assures that the label is making space on the control's border. */
  bg: _propTypes.default.string,

  /** When true, this will change the label text color to the control disabled color. */
  disabled: _propTypes.default.bool
}, _styledHelpers.typography.propTypes, {
  /** When true, this will change the label text color to brandDanger. */
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string])
});
ControlLabel.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  bg: _styledHelpers.defaultControlStyles.bg,
  disabled: false,
  height: "".concat((fontSizeSchema.sizeVariants.sm / 1.5).toFixed(1), "rem"),
  left: 2,
  lineHeight: 0.8,
  position: 'absolute',
  px: 2,
  top: '-1px',
  validationError: ''
});
/** @component */