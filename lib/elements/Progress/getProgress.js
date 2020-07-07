"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.getProgress = exports.getProgressPropTypes = exports.getProgressDefaultProps = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Progress = require("../../elements/Progress");

const getProgressDefaultProps = {
  progress: null,
  progressPlacement: 'top',
  progressProps: {},
  showProgress: false
};
exports.getProgressDefaultProps = getProgressDefaultProps;
const getProgressPropTypes = {
  progress: _propTypes.default.any,
  progressPlacement: _propTypes.default.oneOf(['bottom', 'left', 'right', 'top']),
  progressProps: _propTypes.default.object,
  showProgress: _propTypes.default.bool
};
exports.getProgressPropTypes = getProgressPropTypes;

const getProgress = options => {
  const progress = options.progress,
        progressProps = options.progressProps,
        showProgress = options.showProgress;

  if (_react.default.isValidElement(progress)) {
    return progress;
  }

  return /*#__PURE__*/_react.default.createElement(_Progress.Progress, (0, _extends2.default)({
    isHidden: !showProgress
  }, progressProps));
};

exports.getProgress = getProgress;