"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.FlexComponent = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

const propsToTrim = { ..._propTypes2.default.flexbox,
  ..._propTypes2.default.layout,
  ..._propTypes2.default.position,
  ..._propTypes2.default.space
};

const FlexComponent = ({
  children,
  ...props
}) => /*#__PURE__*/_react.default.createElement("div", (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrim)), children);

exports.FlexComponent = FlexComponent;
FlexComponent.propTypes = {
  children: _propTypes.default.any
};
FlexComponent.defaultProps = {
  children: null
};