"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Flex = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

const Flex = (0, _styledComponents.default)(_component.FlexComponent)`
  ${_styledSystem.flexbox}
  ${_styledSystem.layout}
  ${_styledSystem.position}
  ${_styledSystem.space}
`;
exports.Flex = Flex;
Flex.defaultProps = {
  display: 'flex'
};
/** @component */