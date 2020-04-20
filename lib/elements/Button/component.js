import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { emailHrefString } from 'src/elements/typography/Link/utils';
import { boxShadow } from 'styled-system';
import { Link as ReactRouterLink } from 'react-router-dom';
import { flexboxProps, layoutProps, positionProps, spaceProps, typography } from 'src/utils/styledHelpers';

var propsToTrim = _objectSpread({}, flexboxProps.propTypes, {}, layoutProps.propTypes, {}, positionProps.propTypes, {}, spaceProps.propTypes, {}, typography.propTypes, {
  variant: PropTypes.string
});

var propsToTrimForButton = _objectSpread({}, propsToTrim, {}, boxShadow.propTypes, {
  bgActiveColor: PropTypes.string,
  bgHoverColor: PropTypes.string,
  contained: false,
  href: PropTypes.string,
  outline: false,
  raised: false,
  target: PropTypes.string,
  to: PropTypes.string
});

var propsToTrimForLink = _objectSpread({}, propsToTrim, {}, boxShadow.propTypes, {
  bgActiveColor: PropTypes.string,
  bgHoverColor: PropTypes.string,
  contained: false,
  outline: false,
  raised: false
});

export var ButtonComponent = function ButtonComponent(_ref) {
  var children = _ref.children,
      emailHref = _ref.emailHref,
      href = _ref.href,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ["children", "emailHref", "href", "to"]);

  var output = null;
  var trimmedPropsLink = removeSomeProps(props, _Object$keys(propsToTrimForLink));
  var emailLinkHref = emailHrefString(emailHref);

  if (href) {
    output = /*#__PURE__*/React.createElement("a", _extends({
      href: href
    }, trimmedPropsLink), /*#__PURE__*/React.createElement("div", null, children));
  } else if (to) {
    var linkProps = {
      to: to
    };
    output = /*#__PURE__*/React.createElement(ReactRouterLink, _extends({}, trimmedPropsLink, linkProps), /*#__PURE__*/React.createElement("div", null, children));
  } else if (emailLinkHref) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: emailLinkHref
    }, trimmedPropsLink), /*#__PURE__*/React.createElement("div", null, children));
  } else {
    output = /*#__PURE__*/React.createElement("button", _extends({
      type: "button"
    }, removeSomeProps(props, _Object$keys(propsToTrimForButton))), /*#__PURE__*/React.createElement("div", null, children));
  }

  return output;
};
ButtonComponent.propTypes = {
  children: PropTypes.any,
  emailHref: PropTypes.shape({
    bcc: PropTypes.string,
    body: PropTypes.string,
    cc: PropTypes.string,
    subject: PropTypes.string,
    to: PropTypes.string
  }),
  href: PropTypes.string,
  to: PropTypes.string
};
ButtonComponent.defaultProps = {
  children: null,
  emailHref: {},
  href: null,
  to: null
};