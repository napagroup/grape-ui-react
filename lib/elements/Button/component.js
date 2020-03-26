"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonComponent = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _componentHelpers = require("../../utils/componentHelpers");

var _utils = require("../../elements/typography/Link/utils");

var _styledSystem = require("styled-system");

var _reactRouterDom = require("react-router-dom");

var _styledHelpers = require("../../utils/styledHelpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propsToTrim = _objectSpread({}, _styledHelpers.flexboxProps.propTypes, {}, _styledHelpers.layoutProps.propTypes, {}, _styledHelpers.positionProps.propTypes, {}, _styledHelpers.spaceProps.propTypes, {}, _styledHelpers.typography.propTypes, {
  variant: _propTypes2["default"].string
});

var propsToTrimForButton = _objectSpread({}, propsToTrim, {}, _styledSystem.boxShadow.propTypes, {
  bgActiveColor: _propTypes2["default"].string,
  bgHoverColor: _propTypes2["default"].string,
  contained: false,
  href: _propTypes2["default"].string,
  outline: false,
  raised: false,
  target: _propTypes2["default"].string,
  to: _propTypes2["default"].string
});

var propsToTrimForLink = _objectSpread({}, propsToTrim, {}, _styledSystem.boxShadow.propTypes, {
  bgActiveColor: _propTypes2["default"].string,
  bgHoverColor: _propTypes2["default"].string,
  contained: false,
  outline: false,
  raised: false
});

var ButtonComponent = exports.ButtonComponent = function ButtonComponent(_ref) {
  var children = _ref.children,
      emailHref = _ref.emailHref,
      href = _ref.href,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ["children", "emailHref", "href", "to"]);

  var output = null;
  var trimmedPropsLink = (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrimForLink));
  var emailLinkHref = (0, _utils.emailHrefString)(emailHref);

  if (href) {
    output = /*#__PURE__*/_react2["default"].createElement("a", _extends({
      href: href
    }, trimmedPropsLink), /*#__PURE__*/_react2["default"].createElement("div", null, children));
  } else if (to) {
    var linkProps = {
      to: to
    };
    output = /*#__PURE__*/_react2["default"].createElement(_reactRouterDom.Link, _extends({}, trimmedPropsLink, linkProps), /*#__PURE__*/_react2["default"].createElement("div", null, children));
  } else if (emailLinkHref) {
    return /*#__PURE__*/_react2["default"].createElement("a", _extends({
      href: emailLinkHref
    }, trimmedPropsLink), /*#__PURE__*/_react2["default"].createElement("div", null, children));
  } else {
    output = /*#__PURE__*/_react2["default"].createElement("button", _extends({
      type: "button"
    }, (0, _componentHelpers.removeSomeProps)(props, Object.keys(propsToTrimForButton))), /*#__PURE__*/_react2["default"].createElement("div", null, children));
  }

  return output;
};

ButtonComponent.propTypes = {
  children: _propTypes2["default"].any,
  emailHref: _propTypes2["default"].shape({
    bcc: _propTypes2["default"].string,
    body: _propTypes2["default"].string,
    cc: _propTypes2["default"].string,
    subject: _propTypes2["default"].string,
    to: _propTypes2["default"].string
  }),
  href: _propTypes2["default"].string,
  to: _propTypes2["default"].string
};
ButtonComponent.defaultProps = {
  children: null,
  emailHref: {},
  href: null,
  to: null
};