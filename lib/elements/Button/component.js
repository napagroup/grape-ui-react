"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.ButtonComponent = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../utils/componentHelpers");

var _grid = require("../../elements/grid");

var _Progress = require("../../elements/Progress");

var _utils = require("../../elements/typography/Link/utils");

var _utils2 = require("../../elements/utils");

var _styledSystem = require("styled-system");

var _reactRouterDom = require("react-router-dom");

var _styledHelpers = require("../../utils/styledHelpers");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

const propsToTrim = _objectSpread({}, _styledHelpers.flexboxProps.propTypes, {}, _styledHelpers.layoutProps.propTypes, {}, _styledHelpers.positionProps.propTypes, {}, _styledHelpers.spaceProps.propTypes, {}, _styledHelpers.typography.propTypes, {}, _Progress.getProgressPropTypes, {
  boxSizing: _propTypes.default.any,
  innerBoxProps: _propTypes.default.object,
  innerFlexProps: _propTypes.default.object,
  leadingIcon: _propTypes.default.any,
  leadingIconProps: _propTypes.default.object,
  variant: _propTypes.default.string
});

const propsToTrimForButton = _objectSpread({}, propsToTrim, {}, _styledSystem.boxShadow.propTypes, {}, _Progress.getProgressDefaultProps, {
  bgActiveColor: _propTypes.default.string,
  bgHoverColor: _propTypes.default.string,
  contained: false,
  href: _propTypes.default.string,
  outline: false,
  raised: false,
  target: _propTypes.default.string,
  to: _propTypes.default.string
});

const propsToTrimForLink = _objectSpread({}, propsToTrim, {}, _styledSystem.boxShadow.propTypes, {
  bgActiveColor: _propTypes.default.string,
  bgHoverColor: _propTypes.default.string,
  contained: false,
  outline: false,
  raised: false
});

const getChildren = options => {
  const children = options.children,
        innerBoxProps = options.innerBoxProps,
        innerFlexProps = options.innerFlexProps,
        leadingIcon = options.leadingIcon,
        leadingIconProps = options.leadingIconProps,
        p = options.p,
        pl = options.pl,
        px = options.px,
        showProgress = options.showProgress;

  if (leadingIcon || showProgress) {
    return /*#__PURE__*/_react.default.createElement(_grid.Flex, innerFlexProps, /*#__PURE__*/_react.default.createElement(_grid.Box, (0, _extends2.default)({
      pr: pl || px || p
    }, leadingIconProps), /*#__PURE__*/_react.default.createElement(_utils2.Hideable, {
      hide: showProgress
    }, leadingIcon), (0, _Progress.getProgress)(_objectSpread({
      showProgress
    }, options))), /*#__PURE__*/_react.default.createElement(_grid.Box, innerBoxProps, children));
  }

  return /*#__PURE__*/_react.default.createElement(_grid.Box, innerBoxProps, children);
};

const ButtonComponent = (_ref) => {
  let emailHref = _ref.emailHref,
      href = _ref.href,
      to = _ref.to,
      props = (0, _objectWithoutProperties2.default)(_ref, ["emailHref", "href", "to"]);
  let output = null;
  const trimmedPropsLink = (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrimForLink));
  const emailLinkHref = (0, _utils.emailHrefString)(emailHref);

  if (href) {
    output = /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      href: href
    }, trimmedPropsLink), getChildren(props));
  } else if (to) {
    const linkProps = {
      to
    };
    output = /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, (0, _extends2.default)({}, trimmedPropsLink, linkProps), getChildren(props));
  } else if (emailLinkHref) {
    return /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
      href: emailLinkHref
    }, trimmedPropsLink), getChildren(props));
  } else {
    output = /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
      type: "button"
    }, (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrimForButton))), getChildren(props));
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