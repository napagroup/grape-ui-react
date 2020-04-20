"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.BoxComponent = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _componentHelpers = require("../../../utils/componentHelpers");

const propsToTrim = { ..._propTypes2.default.border,
  ..._propTypes2.default.flexbox,
  ..._propTypes2.default.layout,
  ..._propTypes2.default.position,
  ..._propTypes2.default.space,
  boxSizing: _propTypes.default.oneOfType([_propTypes.default.array, _propTypes.default.string])
};

const BoxComponent = ({
  children,
  ...props
}) => /*#__PURE__*/_react.default.createElement("div", (0, _componentHelpers.removeSomeProps)(props, (0, _keys.default)(propsToTrim)), children);

exports.BoxComponent = BoxComponent;
BoxComponent.propTypes = {
  children: _propTypes.default.any
};
BoxComponent.defaultProps = {
  children: null
};