"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ControlGroup = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../../utils/styledHelpers");

var _component = require("./component");

const ControlGroup = (0, _styledComponents.default)(_component.ControlGroupComponent)`
  position: relative;
  ${_styledHelpers.colorCore}
  ${_styledSystem.space}
  width: 100%;
`;
exports.ControlGroup = ControlGroup;
ControlGroup.propTypes = { ..._styledHelpers.spaceProps.propTypes,
  ..._styledHelpers.typography.propTypes
};
ControlGroup.defaultProps = {
  pb: 3,
  pt: 1
};
/** @component */