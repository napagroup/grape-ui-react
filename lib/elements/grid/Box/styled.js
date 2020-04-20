"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Box = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _component = require("./component");

const Box = (0, _styledComponents.default)(_component.BoxComponent)`
  ${(0, _styledSystem.system)({
  boxSizing: true
})}
  ${_styledSystem.border}
  ${_styledSystem.flexbox}
  ${_styledSystem.layout}
  ${_styledSystem.position}
  ${_styledSystem.space}
`;
exports.Box = Box;
Box.propTypes = {
  /** Defines the boxSizing of the Box component. */
  boxSizing: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string])
};
Box.defaultProps = {
  boxSizing: 'border-box'
};
/** @component */