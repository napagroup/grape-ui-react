"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Progress = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _typography = require("../../elements/typography");

var _utils = require("../../elements/utils");

var _CircleProgress = require("./CircleProgress");

var _LinearProgress = require("./LinearProgress");

const showCircular = props => props.progressType === 'circular';

const showLinear = props => props.progressType === 'linear';

const getCaption = props => {
  const caption = props.caption,
        captionProps = props.captionProps;

  if (_react.default.isValidElement(caption)) {
    return caption;
  }

  return /*#__PURE__*/_react.default.createElement(_typography.Paragraph, (0, _extends2.default)({
    isHidden: !caption,
    sm: true
  }, captionProps), caption);
};

getCaption.propTypes = {
  caption: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.string]),
  captionProps: _propTypes.default.object
};
getCaption.defaultProps = {
  caption: '',
  captionProps: {}
};

const Progress = props => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
  isHidden: !showCircular(props)
}, /*#__PURE__*/_react.default.createElement(_CircleProgress.CircularProgress, props)), /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
  isHidden: !showLinear(props)
}, /*#__PURE__*/_react.default.createElement(_LinearProgress.LinearProgress, props)), getCaption(props));

exports.Progress = Progress;
Progress.propTypes = {
  /** Styled system prop for defining animation */
  animation: _propTypes.default.any,

  /** Styled system prop for defining animation-delay */
  animationDelay: _propTypes.default.any,

  /** Styled system prop for defining animation-direction */
  animationDirection: _propTypes.default.any,

  /** Styled system prop for defining animation-duration */
  animationDuration: _propTypes.default.any,

  /** Styled system prop for defining animation-fill-mode */
  animationFillMode: _propTypes.default.any,

  /** Styled system prop for defining animation-iteration-count. When blank, it will determine if its value based off the `loop` property. */
  animationIterationCount: _propTypes.default.any,

  /** Prop for defining custom animation name.  Does NOT follow styled system's responsive breakpoints. */
  animationName: _propTypes.default.any,

  /** Styled system prop for defining animation-play-state */
  animationPlayState: _propTypes.default.any,

  /** Styled system prop for defining animation-timing-function */
  animationTimingFunction: _propTypes.default.any,

  /** Shorthand for setting the track to transparent */
  hideTrack: _propTypes.default.bool,

  /** Defines the background color for the indicator. */
  indicatorColor: _propTypes.default.string,

  /** Passes props to the inidicator DOM. */
  indicatorProps: _propTypes.default.object,

  /** Allow for additional props to be removed from the indicator DOM. Props passed through `indicatorProps` are already trimmed. */
  indicatorPropsToTrim: _propTypes.default.arrayOf(_propTypes.default.string),

  /** Will make the progress bar finite. */
  isDeterminate: _propTypes.default.bool,

  /** Shorthand prop for setting `animationDuration` to 'infinite'. */
  loop: _propTypes.default.bool,

  /** Defines which progress bar to display */
  progressType: _propTypes.default.oneOf(['circular', 'linear']),

  /** Defines the total length for the indicator. */
  total: _propTypes.default.number,

  /** Defines the background color for the track. */
  trackColor: _propTypes.default.string,

  /** Passes props to the track DOM. */
  trackProps: _propTypes.default.object,

  /** Allow for additional props to be removed from the track DOM. Props passed through `trackProps` are already trimmed. */
  trackPropsToTrim: _propTypes.default.arrayOf(_propTypes.default.string),

  /** Defines the length of the indicator within the track total. When provided 0 or above, will make progess bar determinate. */
  value: _propTypes.default.number
};
Progress.defaultProps = {
  animation: '',
  animationDelay: '0s',
  animationDirection: 'normal',
  animationDuration: '1.5s',
  animationFillMode: 'none',
  animationIterationCount: '',
  animationName: '',
  animationPlayState: 'running',
  animationTimingFunction: 'linear',
  hideTrack: false,
  indicatorColor: 'brandPrimary.light',
  indicatorProps: {},
  indicatorPropsToTrim: [],
  isDeterminate: false,
  loop: true,
  progressType: 'linear',
  total: 100,
  trackColor: 'gray.light',
  trackProps: {},
  trackPropsToTrim: [],
  value: -1
};