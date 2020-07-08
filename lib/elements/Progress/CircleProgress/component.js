"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.CircleComponent = exports.RootComponent = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _grid = require("../../../elements/grid");

var _componentHelpers = require("../../../utils/componentHelpers");

var _utils = require("../utils");

const RootComponent = (_ref) => {
  let children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);
  return /*#__PURE__*/_react.default.createElement(_grid.Box, (0, _componentHelpers.removeSomeProps)(props, _utils.defaultProgressPropsToTrim), children);
};

exports.RootComponent = RootComponent;
RootComponent.propTypes = {
  children: _propTypes.default.any
};
RootComponent.defaultProps = {
  children: null
};

const CircleComponent = (_ref2) => {
  let children = _ref2.children,
      props = (0, _objectWithoutProperties2.default)(_ref2, ["children"]);
  const indicatorPropsToTrim = props.indicatorPropsToTrim,
        trackPropsToTrim = props.trackPropsToTrim;
  const propsToTrim = [..._utils.defaultProgressPropsToTrim, ...indicatorPropsToTrim, ...trackPropsToTrim];
  return /*#__PURE__*/_react.default.createElement("circle", (0, _componentHelpers.removeSomeProps)(props, propsToTrim), children);
};

exports.CircleComponent = CircleComponent;
CircleComponent.propTypes = {
  children: _propTypes.default.any,
  indicatorPropsToTrim: _propTypes.default.arrayOf(_propTypes.default.string),
  trackPropsToTrim: _propTypes.default.arrayOf(_propTypes.default.string)
};
CircleComponent.defaultProps = {
  children: null,
  indicatorPropsToTrim: [],
  trackPropsToTrim: []
};