"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Button = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../utils/styledHelpers");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _utils = require("./utils");

var _component = require("./component");

const borderButton = props => (0, _styledSystem.border)({ ...props,
  border: props.outline ? props.border : '0'
});

const boxShadowButtonMemoized = (value = '01') => props => (0, _styledSystem.boxShadow)({ ...props,
  boxShadow: props.raised ? (0, _styledHelpers.resolveBoxShadow)(value) : ''
});

const scaleButton = props => {
  const {
    pb: pbProps,
    pl: plProps,
    pr: prProps,
    pt: ptProps
  } = props;
  let pb = pbProps;
  let pl = plProps;
  let pr = prProps;
  let pt = ptProps;
  const {
    sm,
    lg
  } = props;

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

  const nextProps = { ...props,
    pb,
    pl,
    pr,
    pt
  };
  return (0, _styledSystem.space)(nextProps);
};

const Button = (0, _styledComponents.default)(_component.ButtonComponent)`
  ${borderButton}
  ${_styledHelpers.borderRadiusCore}
  ${boxShadowButtonMemoized()}
  ${_styledSystem.buttonStyle}
  ${_styledHelpers.colorCore}
  ${_styledSystem.flexbox}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledSystem.fontWeight}
  ${_styledSystem.layout}
  ${_styledHelpers.letterSpacingCore}
  ${_styledSystem.lineHeight}
  ${_styledSystem.position}
  ${scaleButton}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
  outline: 0;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
    ${_utils.hoverColorButton};
  }
  &:active {
    ${boxShadowButtonMemoized('02')};
    ${_utils.activeColorButton};
  }
  &[disabled] {
    opacity: 0.4;
    pointer-events: none;
    cursor: not-allowed;
  }
  > div {
    ${_styledHelpers.borderRadiusCore}
    ${_styledSystem.display}
    ${_styledHelpers.ellipsisCore}
    ${_styledSystem.maxWidth}
    ${_styledSystem.verticalAlign}
  }
`;
exports.Button = Button;
Button.propTypes = {
  /** Defines the active background color for the control. */
  bgActiveColor: _propTypes.default.string,

  /** Defines the hover background color for the control. */
  bgHoverColor: _propTypes.default.string,
  ..._styledSystem.boxShadow.propTypes,

  /** Makes the button a "contained" button.
   * @see See [Material Design/Components/Buttons/Contained Button](https://material.io/components/buttons/#contained-button) for more on this style. */
  contained: _propTypes.default.bool,
  ..._styledSystem.display.propTypes,

  /** Define properties for an email.  Fill in props and the control will generate the proper string. */
  emailHref: _propTypes.default.shape({
    /** Sets the BCC line. Can be comma-seperatred list. */
    bcc: _propTypes.default.string,

    /** Sets the Body. */
    body: _propTypes.default.string,

    /** Sets the CC line. Can be comma-seperatred list. */
    cc: _propTypes.default.string,

    /** Sets the Subject Line. */
    subject: _propTypes.default.string,

    /** Sets who to send it to. Can be comma-seperatred list. */
    to: _propTypes.default.string
  }),
  ..._styledSystem.fontWeight.propTypes,

  /** Will use an anchor tag instead of a button tag. */
  href: _propTypes.default.string,
  ..._styledSystem.lineHeight.propTypes,
  ..._styledSystem.maxWidth.propTypes,

  /** Makes the button a "contained" button.
   * @see See [Material Design/Components/Buttons/Outlined Button](https://material.io/components/buttons/#outlined-button) for more on this style. */
  outline: _propTypes.default.bool,
  ..._styledSystem.position.propTypes,

  /** Makes the button a "raised" button.
   * @see See [Material Design/Components/Buttons/Hierarchy and Placement](https://material.io/components/buttons/#hierarchy-placement) for more on this style. */
  raised: _propTypes.default.bool,
  ..._styledSystem.space.propTypes,

  /** Will use react-router's Link component. You will still need to wrap this in a Router component. */
  to: _propTypes.default.string,
  ..._styledHelpers.typography.propTypes,
  ..._propTypes2.default.border,
  ..._propTypes2.default.flexbox,
  ..._propTypes2.default.layout,
  ..._propTypes2.default.position
};
Button.defaultProps = { ..._styledHelpers.defaultStylesBase,
  bg: null,
  bgActiveColor: null,
  bgHoverColor: null,
  border: `1px solid ${(0, _styledHelpers.resolveColor)('borderColor')}`,
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
  position: _styledHelpers.POSITION_DEFAULT_VALUE,
  pr: 3,
  pt: 1,
  raised: false,
  textAlign: 'center',
  textDecoration: 'none',
  to: null,
  verticalAlign: 'top'
};
/** @component */