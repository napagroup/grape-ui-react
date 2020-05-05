"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.FlexComponent = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentHelpers = require("../../../utils/componentHelpers");

var _utils = require("../utils");

const FlexComponent = (_ref) => {
  let children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _componentHelpers.removeSomeProps)(props, _utils.defaultFlexBoxStylesPropsToTrim), children);
};

exports.FlexComponent = FlexComponent;
FlexComponent.propTypes = {
  children: _propTypes.default.any
};
FlexComponent.defaultProps = {
  children: null
};