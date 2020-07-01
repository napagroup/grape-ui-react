"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Progress = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../elements/utils");

var _CircleProgress = require("./CircleProgress");

var _LinearProgress = require("./LinearProgress");

const showCircular = props => props.progressType === 'circular';

const showLinear = props => props.progressType === 'linear';

const Progress = props => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
  isHidden: !showCircular(props)
}, /*#__PURE__*/_react.default.createElement(_CircleProgress.CircularProgress, props)), /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
  isHidden: !showLinear(props)
}, /*#__PURE__*/_react.default.createElement(_LinearProgress.LinearProgress, props)));

exports.Progress = Progress;
Progress.propTypes = {
  progressType: _propTypes.default.string
};
Progress.defaultProps = {
  progressType: 'linear'
};