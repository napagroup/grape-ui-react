"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.LinearProgress = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../../elements/utils");

var _utils2 = require("../utils");

function _templateObject6() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  position: absolute;\n  ", "\n  left: 0;\n  bottom: 0;\n  top: 0;\n  transition: transform 0.2s linear;\n  transformOrigin: left;\n  animation: ", " 1.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  width: 100%;\n  position: absolute;\n  ", "\n  left: 0;\n  bottom: 0;\n  top: 0;\n  animation: ", " ", "s cubic-bezier(0.165, 0.84, 0.44, 0.001) ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  height: 5px;\n  position: relative;\n  ", "\n  padding: 1px;\n  box-shadow: inset 0 -1px 1px rgba(255,255,255,0.3);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  position: relative;\n  overflow: hidden;\n  height: 4;\n  @media print: {\n    colorAdjust: exact;\n  };\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  0% {\n    left: -35%;\n    right: 100%;\n  }\n  60% {\n    left: 100%;\n    right: -90%;\n  }\n  100% {\n    left: 100%;\n    right: -90%;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  0% {\n    left: -100%;\n    right: 100%;\n  }\n  50% {\n    left: -50%;\n    right: 100%;\n  }\n  95% {\n    left: -5%;\n    right: 100%;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const backgroundIndicatorColor = (0, _utils2.makeColorResolver)('background', 'indicatorColor');
const backgroundTrackColor = (0, _utils2.makeColorResolver)('background', 'trackColor');
const determinate1 = (0, _styledComponents.keyframes)(_templateObject());
const indeterminate1 = (0, _styledComponents.keyframes)(_templateObject2());
const StyledRoot = (0, _styledComponents.default)('div')(_templateObject3());
const StyledDiv = (0, _styledComponents.default)('div')(_templateObject4(), backgroundTrackColor);
const StyledLineDet = (0, _styledComponents.default)('span')(_templateObject5(), backgroundIndicatorColor, determinate1, props => props.duration, props => props.loop ? 'infinite' : '');
const StyledLineIndet = (0, _styledComponents.default)('span')(_templateObject6(), backgroundIndicatorColor, indeterminate1);

const getTrackColor = props => props.hideTrack ? 'transparent' : props.trackColor;

const LinearProgress = props => {
  const duration = props.duration,
        hideTrack = props.hideTrack,
        indicatorColor = props.indicatorColor,
        isDeterminate = props.isDeterminate,
        loop = props.loop,
        trackColor = props.trackColor;
  return /*#__PURE__*/_react.default.createElement(StyledRoot, null, /*#__PURE__*/_react.default.createElement(StyledDiv, {
    trackColor: getTrackColor({
      hideTrack,
      trackColor
    })
  }, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: !isDeterminate
  }, /*#__PURE__*/_react.default.createElement(StyledLineDet, {
    duration: duration,
    indicatorColor: indicatorColor,
    loop: loop
  })), /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: isDeterminate
  }, /*#__PURE__*/_react.default.createElement(StyledLineIndet, {
    indicatorColor: indicatorColor,
    loop: loop
  }))));
};

exports.LinearProgress = LinearProgress;
LinearProgress.propTypes = {
  duration: _propTypes.default.number,
  hideTrack: _propTypes.default.bool,
  indicatorColor: _propTypes.default.string,
  isDeterminate: _propTypes.default.bool,
  loop: _propTypes.default.bool,
  trackColor: _propTypes.default.string
};
LinearProgress.defaultProps = {
  duration: 25,
  hideTrack: false,
  indicatorColor: 'indigo.dark',
  isDeterminate: false,
  loop: true,
  trackColor: 'indigo.light'
};