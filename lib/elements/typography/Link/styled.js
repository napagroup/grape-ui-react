import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  &:hover,\n  &:active {\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { fontWeight, space } from 'styled-system';
import { getGlobalOverrides } from 'src/global-styles';
import { colorCore, defaultStylesBase, ellipsisCore, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, lineHeightCore, resolveColor, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import { LinkComponent } from './component';

var hoverStyle = function hoverStyle(props) {
  return "\n  color: ".concat(resolveColor(props.hoverColor, getGlobalOverrides(props)), ";\n  cursor: pointer;\n");
};

var Link = styled(LinkComponent)(_templateObject(), colorCore, ellipsisCore, fontFamilyCore, fontSizeCore, fontWeight, letterSpacingCore, lineHeightCore, fontStyleCore, textAlignCore, textDecorationCore, space, hoverStyle);
Link.propTypes = _objectSpread({}, typography.propTypes, {
  /** Define properties for an email.  Fill in props and the control will generate the proper string. */
  emailHref: PropTypes.shape({
    /** Sets the BCC line. Can be comma-seperatred list. */
    bcc: PropTypes.string,

    /** Sets the Body. */
    body: PropTypes.string,

    /** Sets the CC line. Can be comma-seperatred list. */
    cc: PropTypes.string,

    /** Sets the Subject Line. */
    subject: PropTypes.string,

    /** Sets who to send it to. Can be comma-seperatred list. */
    to: PropTypes.string
  }),

  /** Define a custom color for a link element.  This is intended for single use primarily, brandLinkHover should be defined in the theme. */
  hoverColor: PropTypes.string,

  /** The base component will utilize react-router's Link component.  You will still need to wrap this in a Router component. */
  to: PropTypes.string
});
Link.defaultProps = _objectSpread({}, defaultStylesBase, {
  color: 'brandLink',
  emailHref: {},
  hoverColor: 'brandLinkHover',
  textDecoration: 'none'
});
Link.Router = Link;
/** @component */

export { Link };