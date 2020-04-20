import _Object$defineProperty from "@babel/runtime-corejs3/core-js-stable/object/define-property";
import _Object$defineProperties from "@babel/runtime-corejs3/core-js-stable/object/define-properties";
import _Object$getOwnPropertyDescriptors from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors";
import _forEachInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/for-each";
import _Object$getOwnPropertyDescriptor from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor";
import _filterInstanceProperty from "@babel/runtime-corejs3/core-js-stable/instance/filter";
import _Object$getOwnPropertySymbols from "@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols";
import _Object$keys from "@babel/runtime-corejs3/core-js-stable/object/keys";
import _taggedTemplateLiteral from "@babel/runtime-corejs3/helpers/taggedTemplateLiteral";
import _defineProperty from "@babel/runtime-corejs3/helpers/defineProperty";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  outline: 0;\n  text-transform: uppercase;\n  &:hover {\n    cursor: pointer;\n    ", ";\n  }\n  &:active {\n    ", ";\n    ", ";\n  }\n  &[disabled] {\n    opacity: 0.4;\n    pointer-events: none;\n    cursor: not-allowed;\n  }\n  > div {\n    ", "\n    ", "\n    ", "\n    ", "\n    ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function ownKeys(object, enumerableOnly) { var keys = _Object$keys(object); if (_Object$getOwnPropertySymbols) { var symbols = _Object$getOwnPropertySymbols(object); if (enumerableOnly) symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) { return _Object$getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; _forEachInstanceProperty(_context = ownKeys(Object(source), true)).call(_context, function (key) { _defineProperty(target, key, source[key]); }); } else if (_Object$getOwnPropertyDescriptors) { _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source)); } else { var _context2; _forEachInstanceProperty(_context2 = ownKeys(Object(source))).call(_context2, function (key) { _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key)); }); } } return target; }

import PropTypes from 'prop-types';
import styled from 'styled-components';
import { border, boxShadow, buttonStyle, display, flexbox, fontWeight, layout, lineHeight, maxWidth, position, space, verticalAlign } from 'styled-system';
import { borderRadiusCore, colorCore, defaultStylesBase, ellipsisCore, fontFamilyCore, fontSizeCore, fontStyleCore, letterSpacingCore, POSITION_DEFAULT_VALUE, resolveBoxShadow, resolveColor, textAlignCore, textDecorationCore, typography } from 'src/utils/styledHelpers';
import propTypes from '@styled-system/prop-types';
import { activeColorButton, hoverColorButton } from './utils';
import { ButtonComponent } from './component';

var borderButton = function borderButton(props) {
  return border(_objectSpread({}, props, {
    border: props.outline ? props.border : '0'
  }));
};

var boxShadowButtonMemoized = function boxShadowButtonMemoized() {
  var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '01';
  return function (props) {
    return boxShadow(_objectSpread({}, props, {
      boxShadow: props.raised ? resolveBoxShadow(value) : ''
    }));
  };
};

var scaleButton = function scaleButton(props) {
  var pbProps = props.pb,
      plProps = props.pl,
      prProps = props.pr,
      ptProps = props.pt;
  var pb = pbProps;
  var pl = plProps;
  var pr = prProps;
  var pt = ptProps;
  var sm = props.sm,
      lg = props.lg;

  if (lg) {
    pb = 2;
    pl = 4;
    pr = 4;
    pt = 2;
  } else if (sm) {
    pb = 0;
    pl = 2;
    pr = 2;
    pt = 0;
  }

  var nextProps = _objectSpread({}, props, {
    pb: pb,
    pl: pl,
    pr: pr,
    pt: pt
  });

  return space(nextProps);
};

var Button = styled(ButtonComponent)(_templateObject(), borderButton, borderRadiusCore, boxShadowButtonMemoized(), buttonStyle, colorCore, flexbox, fontFamilyCore, fontSizeCore, fontStyleCore, fontWeight, layout, letterSpacingCore, lineHeight, position, scaleButton, textAlignCore, textDecorationCore, hoverColorButton, boxShadowButtonMemoized('02'), activeColorButton, borderRadiusCore, display, ellipsisCore, maxWidth, verticalAlign);
Button.propTypes = _objectSpread({
  /** Defines the active background color for the control. */
  bgActiveColor: PropTypes.string,

  /** Defines the hover background color for the control. */
  bgHoverColor: PropTypes.string
}, boxShadow.propTypes, {
  /** Makes the button a "contained" button.
   * @see See [Material Design/Components/Buttons/Contained Button](https://material.io/components/buttons/#contained-button) for more on this style. */
  contained: PropTypes.bool
}, display.propTypes, {
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
  })
}, fontWeight.propTypes, {
  /** Will use an anchor tag instead of a button tag. */
  href: PropTypes.string
}, lineHeight.propTypes, {}, maxWidth.propTypes, {
  /** Makes the button a "contained" button.
   * @see See [Material Design/Components/Buttons/Outlined Button](https://material.io/components/buttons/#outlined-button) for more on this style. */
  outline: PropTypes.bool
}, position.propTypes, {
  /** Makes the button a "raised" button.
   * @see See [Material Design/Components/Buttons/Hierarchy and Placement](https://material.io/components/buttons/#hierarchy-placement) for more on this style. */
  raised: PropTypes.bool
}, space.propTypes, {
  /** Will use react-router's Link component. You will still need to wrap this in a Router component. */
  to: PropTypes.string
}, typography.propTypes, {}, propTypes.border, {}, propTypes.flexbox, {}, propTypes.layout, {}, propTypes.position);
Button.defaultProps = _objectSpread({}, defaultStylesBase, {
  bg: null,
  bgActiveColor: null,
  bgHoverColor: null,
  border: "1px solid ".concat(resolveColor('borderColor')),
  borderRadius: '',
  color: null,
  contained: false,
  display: 'inline-block',
  emailHref: {},
  href: null,
  m: 1,
  maxWidth: '100%',
  outline: false,
  pb: 1,
  pl: 3,
  position: POSITION_DEFAULT_VALUE,
  pr: 3,
  pt: 1,
  raised: false,
  textAlign: 'center',
  textDecoration: 'none',
  to: null,
  verticalAlign: 'top'
});
/** @component */

export { Button };