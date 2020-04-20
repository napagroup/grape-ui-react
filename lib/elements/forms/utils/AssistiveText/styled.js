"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.AssistiveText = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../../utils/styledHelpers");

var _component = require("./component");

const fontSizeAssistiveText = props => (0, _styledHelpers.fontSizeCore)({ ...props,
  sm: true
});

const AssistiveText = (0, _styledComponents.default)(_component.AssistiveTextComponent)`
  ${_styledHelpers.colorCore}
  ${_styledHelpers.ellipsisCore}
  ${_styledHelpers.fontFamilyCore}
  ${fontSizeAssistiveText}
  ${_styledSystem.fontWeight}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledSystem.space}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
`;
exports.AssistiveText = AssistiveText;
AssistiveText.propTypes = { ..._styledHelpers.spaceProps.propTypes,
  ..._styledHelpers.typography.propTypes
};
AssistiveText.defaultProps = { ..._styledHelpers.defaultStylesBase,
  color: 'gray',
  px: 3
};
/** @component */