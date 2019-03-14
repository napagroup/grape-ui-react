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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  &:hover,\n  ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var hoverStyle = function hoverStyle(props) {
  return "&:active {\n  color: ".concat((0, _styledHelpers.resolveColor)(props.hoverStyle, (0, _globalStyles.getGlobalOverrides)(props)), ";\n  cursor: pointer;\n }");
};

var Link = (0, _styledComponents2.default)(_component.LinkComponent)(_templateObject(), _styledHelpers.colorCore, _styledHelpers.fontFamilyCore, _styledHelpers.fontSizeCore, _styledSystem.fontWeight, _styledHelpers.letterSpacingCore, _styledHelpers.lineHeightCore, _styledHelpers.fontStyleCore, _styledHelpers.textAlignCore, _styledHelpers.textDecorationCore, hoverStyle);
Link.propTypes = _objectSpread({}, _styledHelpers.typography.propTypes, {
  hoverStyle: _propTypes2.default.string,
  to: _propTypes2.default.string
});
Link.defaultProps = _objectSpread({}, _styledHelpers.defaultStylesBase, {
  color: 'brandLink',
  hoverStyle: 'brandLinkHover',
  textDecoration: 'none'
});
Link.Router = Link;
exports.Link = Link;