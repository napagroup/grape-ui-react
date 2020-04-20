"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.LinkComponent = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactRouterDom = require("react-router-dom");

var _styledHelpers = require("../../../utils/styledHelpers");

var _utils = require("./utils");

const LinkComponent = ({
  children,
  emailHref,
  to,
  ...props
}) => {
  const trimmedProps = (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)({ ..._styledHelpers.spaceProps.propTypes,
    ..._styledHelpers.typography.propTypes
  }));
  const emailLinkHref = (0, _utils.emailHrefString)(emailHref);

  if (to) {
    const linkProps = {
      to,
      ...trimmedProps
    };
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, linkProps, children);
  }

  if (emailLinkHref) {
    return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      href: emailLinkHref
    }, trimmedProps), children);
  }

  return /*#__PURE__*/_react.default.createElement("a", trimmedProps, children);
};

exports.LinkComponent = LinkComponent;
LinkComponent.propTypes = {
  children: _propTypes.default.any.isRequired,
  emailHref: _propTypes.default.shape({
    bcc: _propTypes.default.string,
    body: _propTypes.default.string,
    cc: _propTypes.default.string,
    subject: _propTypes.default.string,
    to: _propTypes.default.string
  }),
  to: _propTypes.default.string
};
LinkComponent.defaultProps = {
  emailHref: {},
  to: ''
};