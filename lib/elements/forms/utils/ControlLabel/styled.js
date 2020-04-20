"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ControlLabel = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _globalStyles = require("../../../../global-styles");

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../../utils/styledHelpers");

var _component = require("./component");

const {
  fontSize: fontSizeSchema
} = (0, _globalStyles.getGlobalStyles)();

const colorLabel = props => (0, _styledHelpers.colorCore)({ ...props,
  color: !props.validationError ? props.color : 'brandDanger'
});

const fontSizeLabel = props => (0, _styledHelpers.fontSizeCore)({ ...props,
  sm: true
});

const ControlLabel = (0, _styledComponents.default)(_component.ControlLabelComponent)`
  ${colorLabel}
  ${_styledHelpers.ellipsisCore}
  ${_styledHelpers.fontFamilyCore}
  ${fontSizeLabel}
  ${_styledHelpers.fontStyleCore}
  ${_styledSystem.fontWeight}
  ${_styledSystem.layout}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledSystem.position}
  ${_styledSystem.space}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
`;
exports.ControlLabel = ControlLabel;
ControlLabel.propTypes = {
  /** Background of the label component.  For 'outlined' styled controls, this assures that the label is making space on the control's border. */
  bg: _propTypes.default.string,

  /** When true, this will change the label text color to the control disabled color. */
  disabled: _propTypes.default.bool,
  ..._styledHelpers.typography.propTypes,

  /** When true, this will change the label text color to brandDanger. */
  validationError: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.string])
};
ControlLabel.defaultProps = { ..._styledHelpers.defaultStylesBase,
  bg: _styledHelpers.defaultControlStyles.bg,
  disabled: false,
  height: `${(fontSizeSchema.sizeVariants.sm / 1.5).toFixed(1)}rem`,
  left: 2,
  lineHeight: 0.8,
  position: 'absolute',
  px: 2,
  top: '-1px',
  validationError: ''
};
/** @component */