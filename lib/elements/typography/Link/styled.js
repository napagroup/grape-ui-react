"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Link = undefined;

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require("styled-system");

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  &:hover,\n  &:active {\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hoverStyle = function hoverStyle(props) {
  return "\n  color: ".concat((0, _styledHelpers.resolveColor)(props.hoverColor, (0, _globalStyles.getGlobalOverrides)(props)), ";\n  cursor: pointer;\n");
};

var Link = (0, _styledComponents2["default"])(_component.LinkComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.ellipsisCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, _styledSystem.space, hoverStyle);
Link.propTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {
  /** Define a custom color for a link element.  This is intended for single use primarily, brandLinkHover should be defined in the theme. */
  hoverColor: _propTypes2["default"].string,

  /** The base component will utilize react-router's Link component.  You will still need to wrap this in a Router component. */
  to: _propTypes2["default"].string
});
Link.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  color: 'brandLink',
  hoverColor: 'brandLinkHover',
  textDecoration: 'none'
});
Link.Router = Link;
/** @component */

exports.Link = Link;