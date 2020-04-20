import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _extends from "@babel/runtime-corejs3/helpers/extends";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _objectWithoutProperties from "@babel/runtime-corejs3/helpers/objectWithoutProperties";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { removeSomeProps } from 'src/utils/componentHelpers';
import { Link as ReactRouterLink } from 'react-router-dom';
import { spaceProps, typography } from 'src/utils/styledHelpers';
import { emailHrefString } from './utils';
export var LinkComponent = function LinkComponent(_ref) {
  var children = _ref.children,
      emailHref = _ref.emailHref,
      to = _ref.to,
      props = _objectWithoutProperties(_ref, ["children", "emailHref", "to"]);

  var trimmedProps = removeSomeProps(props, _Object$keys(_objectSpread({}, spaceProps.propTypes, {}, typography.propTypes)));
  var emailLinkHref = emailHrefString(emailHref);

  if (to) {
    var linkProps = _objectSpread({
      to: to
    }, trimmedProps);

    return /*#__PURE__*/React.createElement(ReactRouterLink, linkProps, children);
  }

  if (emailLinkHref) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: emailLinkHref
    }, trimmedProps), children);
  }

  return /*#__PURE__*/React.createElement("a", trimmedProps, children);
};
LinkComponent.propTypes = {
  children: PropTypes.any.isRequired,
  emailHref: PropTypes.shape({
    bcc: PropTypes.string,
    body: PropTypes.string,
    cc: PropTypes.string,
    subject: PropTypes.string,
    to: PropTypes.string
  }),
  to: PropTypes.string
};
LinkComponent.defaultProps = {
  emailHref: {},
  to: ''
};