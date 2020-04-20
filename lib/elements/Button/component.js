"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ButtonComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../utils/componentHelpers");

var _utils = require("../../elements/typography/Link/utils");

var _styledSystem = require("styled-system");

var _reactRouterDom = require("react-router-dom");

var _styledHelpers = require("../../utils/styledHelpers");

const propsToTrim = { ..._styledHelpers.flexboxProps.propTypes,
  ..._styledHelpers.layoutProps.propTypes,
  ..._styledHelpers.positionProps.propTypes,
  ..._styledHelpers.spaceProps.propTypes,
  ..._styledHelpers.typography.propTypes,
  variant: _propTypes.default.string
};
const propsToTrimForButton = { ...propsToTrim,
  ..._styledSystem.boxShadow.propTypes,
  bgActiveColor: _propTypes.default.string,
  bgHoverColor: _propTypes.default.string,
  contained: false,
  href: _propTypes.default.string,
  outline: false,
  raised: false,
  target: _propTypes.default.string,
  to: _propTypes.default.string
};
const propsToTrimForLink = { ...propsToTrim,
  ..._styledSystem.boxShadow.propTypes,
  bgActiveColor: _propTypes.default.string,
  bgHoverColor: _propTypes.default.string,
  contained: false,
  outline: false,
  raised: false
};

const ButtonComponent = ({
  children,
  emailHref,
  href,
  to,
  ...props
}) => {
  let output = null;
  const trimmedPropsLink = (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrimForLink));
  const emailLinkHref = (0, _utils.emailHrefString)(emailHref);

  if (href) {
    output = /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      href: href
    }, trimmedPropsLink), /*#__PURE__*/_react.default.createElement("div", null, children));
  } else if (to) {
    const linkProps = {
      to
    };
    output = /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, (0, _extends2.default)({}, trimmedPropsLink, linkProps), /*#__PURE__*/_react.default.createElement("div", null, children));
  } else if (emailLinkHref) {
    return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      href: emailLinkHref
    }, trimmedPropsLink), /*#__PURE__*/_react.default.createElement("div", null, children));
  } else {
    output = /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
      type: "button"
    }, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrimForButton))), /*#__PURE__*/_react.default.createElement("div", null, children));
  }

  return output;
};

exports.ButtonComponent = ButtonComponent;
ButtonComponent.propTypes = {
  children: _propTypes.default.any,
  emailHref: _propTypes.default.shape({
    bcc: _propTypes.default.string,
    body: _propTypes.default.string,
    cc: _propTypes.default.string,
    subject: _propTypes.default.string,
    to: _propTypes.default.string
  }),
  href: _propTypes.default.string,
  to: _propTypes.default.string
};
ButtonComponent.defaultProps = {
  children: null,
  emailHref: {},
  href: null,
  to: null
};