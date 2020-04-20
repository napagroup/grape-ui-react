"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Link = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

const hoverStyle = props => `
  color: ${(0, _styledHelpers.resolveColor)(props.hoverColor, (0, _globalStyles.getGlobalOverrides)(props))};
  cursor: pointer;
`;

const Link = (0, _styledComponents.default)(_component.LinkComponent)`
  ${_styledHelpers.colorCore}
  ${_styledHelpers.ellipsisCore}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledSystem.fontWeight}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
  ${_styledSystem.space}
  &:hover,
  &:active {
    ${hoverStyle}
  }
`;
exports.Link = Link;
Link.propTypes = { ..._styledHelpers.typography.propTypes,

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

  /** Define a custom color for a link element.  This is intended for single use primarily, brandLinkHover should be defined in the theme. */
  hoverColor: _propTypes.default.string,

  /** The base component will utilize react-router's Link component.  You will still need to wrap this in a Router component. */
  to: _propTypes.default.string
};
Link.defaultProps = { ..._styledHelpers.defaultStylesBase,
  color: 'brandLink',
  emailHref: {},
  hoverColor: 'brandLinkHover',
  textDecoration: 'none'
};
Link.Router = Link;
/** @component */