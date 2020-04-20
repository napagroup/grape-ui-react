"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Text = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

const Text = (0, _styledComponents.default)(_component.TextComponent)`
  ${_styledHelpers.colorCore}
  ${_styledHelpers.ellipsisCore}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledSystem.fontWeight}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
  ${_styledSystem.space}
`;
exports.Text = Text;
Text.propTypes = { ..._styledHelpers.typography.propTypes
};
Text.defaultProps = { ..._styledHelpers.defaultStylesBase
};
/** @component */