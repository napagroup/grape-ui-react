"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.Link = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  &:hover,\n  &:active {\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const hoverStyle = props => "\n  color: ".concat((0, _styledHelpers.resolveColor)(props.hoverColor, (0, _globalStyles.getGlobalOverrides)(props)), ";\n  cursor: pointer;\n");

const Link = (0, _styledComponents.default)(_component.LinkComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _styledSystem.space, hoverStyle);
exports.Link = Link;
Link.propTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {
  /** Define properties for an email.  Fill in props and the control will generate the proper string. */
  emailHref: _propTypes.default.shape({
    /** Sets the BCC line. Can be comma-seperatred list. */
    bcc: _propTypes.default.string,

    /** Sets the Body. */
    body: _propTypes.default.string,

    /** Sets the CC line. Can be comma-seperatred list. */
    cc: _propTypes.default.string,

    /** Sets the Subject Line. */
    subject: _propTypes.default.string,

    /** Sets who to send it to. Can be comma-seperatred list. */
    to: _propTypes.default.string
  }),

  /** Define a custom color for a link element.  This is intended for single use primarily, brandLinkHover should be defined in the theme. */
  hoverColor: _propTypes.default.string,

  /** The base component will utilize react-router's Link component.  You will still need to wrap this in a Router component. */
  to: _propTypes.default.string
});
Link.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  color: 'brandLink',
  emailHref: {},
  hoverColor: 'brandLinkHover',
  textDecoration: 'none'
});
Link.Router = Link;
/** @component */