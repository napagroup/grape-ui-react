"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.defaultProgressPropsToTrim = exports.progressBaseDefaultProps = exports.progressBasePropTypes = exports.getProgressProps = void 0;

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledHelpers = require("./styledHelpers");

const getProgressProps = props => {
  const animation = props.animation,
        animationDelay = props.animationDelay,
        animationDirection = props.animationDirection,
        animationDuration = props.animationDuration,
        animationFillMode = props.animationFillMode,
        animationName = props.animationName,
        animationPlayState = props.animationPlayState,
        animationTimingFunction = props.animationTimingFunction,
        circumference = props.circumference,
        isDeterminate = props.isDeterminate,
        loop = props.loop,
        progressType = props.progressType,
        total = props.total,
        value = props.value;

  if (progressType === 'linear' && value >= 0) {
    return {
      width: value / total
    };
  }

  if (progressType === 'circular' && value >= 0) {
    return {
      strokeDashoffset: "".concat(circumference - value / total * circumference, "px")
    };
  }

  return {
    animation,
    animationDelay,
    animationDirection,
    animationDuration,
    animationFillMode,
    animationIterationCount: (0, _styledHelpers.getAnimationIterationCount)(props),
    animationName,
    animationPlayState,
    animationTimingFunction,
    isDeterminate,
    loop
  };
};

exports.getProgressProps = getProgressProps;
const progressBasePropTypes = {
  animation: _propTypes.default.any,
  animationDelay: _propTypes.default.any,
  animationDirection: _propTypes.default.any,
  animationDuration: _propTypes.default.any,
  animationFillMode: _propTypes.default.any,
  animationIterationCount: _propTypes.default.any,
  animationName: _propTypes.default.any,
  animationPlayState: _propTypes.default.any,
  animationTimingFunction: _propTypes.default.any,
  containerProps: _propTypes.default.object,
  hideTrack: _propTypes.default.bool,
  indicatorColor: _propTypes.default.string,
  indicatorProps: _propTypes.default.object,
  indicatorPropsToTrim: _propTypes.default.arrayOf(_propTypes.default.string),
  isDeterminate: _propTypes.default.bool,
  isHidden: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  total: _propTypes.default.number,
  trackColor: _propTypes.default.string,
  trackProps: _propTypes.default.object,
  trackPropsToTrim: _propTypes.default.arrayOf(_propTypes.default.string),
  value: _propTypes.default.number
};
exports.progressBasePropTypes = progressBasePropTypes;
const progressBaseDefaultProps = {
  animation: '',
  animationDelay: '0s',
  animationDirection: 'normal',
  animationDuration: '1.5s',
  animationFillMode: 'none',
  animationIterationCount: '',
  animationName: '',
  animationPlayState: 'running',
  animationTimingFunction: 'linear',
  containerProps: {},
  hideTrack: false,
  indicatorColor: 'brandPrimary.light',
  indicatorProps: {},
  indicatorPropsToTrim: [],
  isDeterminate: false,
  isHidden: false,
  loop: true,
  total: 100,
  trackColor: 'gray.light',
  trackProps: {},
  trackPropsToTrim: [],
  value: -1
};
exports.progressBaseDefaultProps = progressBaseDefaultProps;
const defaultProgressPropsToTrim = [...(0, _keys.default)(progressBaseDefaultProps), 'strokeColor'];
exports.defaultProgressPropsToTrim = defaultProgressPropsToTrim;