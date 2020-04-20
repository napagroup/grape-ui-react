"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.PlainText = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../../utils/styledHelpers");

var _globalStyles = require("../../../../global-styles");

var _component = require("./component");

const {
  grid: gridSchema
} = (0, _globalStyles.getGlobalStyles)();
const PlainTextStyledComponent = (0, _styledComponents.default)(_component.PlainTextComponent)`
  ${_styledHelpers.colorCore}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledSystem.fontWeight}
  ${_styledSystem.layout}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledSystem.space}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
  > div {
    ${_styledHelpers.ellipsisCore}
  }
  box-sizing: border-box;
`;
PlainTextStyledComponent.propTypes = { ..._styledHelpers.layoutProps.propTypes,
  ..._styledSystem.space.propTypes,
  ..._styledHelpers.typography.propTypes
};
PlainTextStyledComponent.defaultProps = { ..._styledHelpers.defaultStylesBase,
  pb: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pl: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pr: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pt: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  width: 1
};

const PlainText = props => {
  const {
    formStyle,
    pb,
    pt,
    ...otherProps
  } = props;
  const paddingBottom = formStyle === 'filled' ? '0.5rem' : pb;
  const paddingTop = formStyle === 'filled' ? 'calc(0.7rem + 1px)' : pt;
  return /*#__PURE__*/_react.default.createElement(PlainTextStyledComponent, (0, _extends2.default)({
    pb: paddingBottom,
    pt: paddingTop
  }, otherProps));
};

exports.PlainText = PlainText;
PlainText.propTypes = { ..._styledSystem.space.propTypes
};
PlainText.defaultProps = {
  pb: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pl: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pr: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding,
  pt: gridSchema.gutter || _styledHelpers.defaultControlStyles.padding
};
/** @component */