"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.LinkComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _reactRouterDom = require("react-router-dom");

var _styledHelpers = require("../../../utils/styledHelpers");

var _utils = require("./utils");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const LinkComponent = (_ref) => {
  let children = _ref.children,
      emailHref = _ref.emailHref,
      to = _ref.to,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children", "emailHref", "to"]);
  const trimmedProps = (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(_objectSpread({}, _styledHelpers.spaceProps.propTypes, {}, _styledHelpers.typography.propTypes)));
  const emailLinkHref = (0, _utils.emailHrefString)(emailHref);

  if (to) {
    const linkProps = _objectSpread({
      to
    }, trimmedProps);

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