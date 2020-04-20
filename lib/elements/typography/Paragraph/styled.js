"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Paragraph = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _globalStyles = require("../../../global-styles");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

const {
  grid: gridSchema
} = (0, _globalStyles.getGlobalStyles)();

const fontSizeParagraph = props => {
  const {
    lead
  } = props;
  return lead ? (0, _styledHelpers.fontSizeCore)({ ...props,
    lg: true
  }) : (0, _styledHelpers.fontSizeCore)(props);
};

const fontWeightParagraph = props => {
  const {
    lead
  } = props;
  return lead ? (0, _styledSystem.fontWeight)({ ...props,
    fontWeight: '300'
  }) : (0, _styledSystem.fontWeight)(props);
};

const Paragraph = (0, _styledComponents.default)(_component.ParagraphComponent)`
  ${_styledHelpers.colorCore}
  ${_styledHelpers.ellipsisCore}
  ${_styledHelpers.fontFamilyCore}
  ${fontSizeParagraph}
  ${fontWeightParagraph}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
  ${_styledSystem.space}
`;
exports.Paragraph = Paragraph;
Paragraph.propTypes = { ..._styledHelpers.typography.propTypes,

  /** Use the lead font size */
  lead: _propTypes.default.bool
};
Paragraph.defaultProps = { ..._styledHelpers.defaultStylesBase,
  lead: false,
  mb: gridSchema.gutter,
  mt: 0
};
/** @component */