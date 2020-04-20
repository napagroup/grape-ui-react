"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ListItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _globalStyles = require("../../../global-styles");

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _component = require("./component");

const {
  grid: {
    gutter
  }
} = (0, _globalStyles.getGlobalStyles)();
const ListItem = (0, _styledComponents.default)(_component.ListItemComponent)`
  ${_styledHelpers.colorCore}
  ${_styledHelpers.ellipsisCore}
  ${_styledHelpers.fontFamilyCore}
  ${_styledHelpers.fontSizeCore}
  ${_styledSystem.fontWeight}
  ${_styledHelpers.letterSpacingCore}
  ${_styledHelpers.lineHeightCore}
  ${_styledHelpers.fontStyleCore}
  ${_styledSystem.space}
  ${_styledHelpers.textAlignCore}
  ${_styledHelpers.textDecorationCore}
`;
exports.ListItem = ListItem;
ListItem.propTypes = { ..._styledHelpers.typography.propTypes
};
ListItem.defaultProps = { ..._styledHelpers.defaultStylesBase,
  mb: (0, _styledHelpers.scaleFont)(gutter, 0.25)
};
/** @component */