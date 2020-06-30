"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.CircularProgress = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _utils = require("../../../elements/utils");

var _utils2 = require("../utils");

function _templateObject9() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  animation: ", " 2.4s ease-in-out infinite;\n  fill: none;\n  ", ";\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  animation: ", " 2.4s linear infinite;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  animation: ", " 4.2s ease-in-out infinite;\n  fill: none;\n  ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = (0, _taggedTemplateLiteral2.default)(["\nfrom {\n  stroke-dashoffset: ", ";\n}\nto {\n  stroke-dashoffset: ", ";\n}\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  transform: rotate(-90deg);\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  fill: none;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  display: block;\n  margin: 20px auto;\n  max-width: 100%;\n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\nfrom {\n  stroke-dashoffset: ", ";\n}\nto {\n  stroke-dashoffset: ", ";\n}\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\nfrom {\n  transform: rotate(0deg);\n}\n\nto {\n  transform: rotate(360deg);\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const stroke = (0, _utils2.makeColorResolver)('stroke', 'strokeColor');
const circularRotate = (0, _styledComponents.keyframes)(_templateObject());

const circularDash = props => (0, _styledComponents.keyframes)(_templateObject2(), props.circumference, -1 * props.circumference);

const StyledSvg = (0, _styledComponents.default)('svg')(_templateObject3());
const StyledCircleBg = (0, _styledComponents.default)('circle')(_templateObject4(), stroke);
const StyledRootDet = (0, _styledComponents.default)('div')(_templateObject5());

const determinateCircularDash = props => (0, _styledComponents.keyframes)(_templateObject6(), props.circumference, 0);

const DeterminateCircleFg = (0, _styledComponents.default)('circle')(_templateObject7(), determinateCircularDash, stroke);
const StyledRootInDet = (0, _styledComponents.default)('div')(_templateObject8(), circularRotate);
const IndeterminateCircleFg = (0, _styledComponents.default)('circle')(_templateObject9(), circularDash, stroke);

const CircularProgress = props => {
  const indicatorColor = props.indicatorColor,
        hideTrack = props.hideTrack,
        isDeterminate = props.isDeterminate,
        diameter = props.diameter,
        strokeWidth = props.strokeWidth,
        trackColor = props.trackColor;
  const radius = diameter / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const center = diameter / 2;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: !isDeterminate
  }, /*#__PURE__*/_react.default.createElement(StyledRootDet, null, /*#__PURE__*/_react.default.createElement(StyledSvg, {
    height: diameter,
    width: diameter
  }, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: hideTrack
  }, /*#__PURE__*/_react.default.createElement(StyledCircleBg, {
    circumference: circumference,
    cx: center,
    cy: center,
    r: radius,
    strokeColor: trackColor,
    strokeWidth: strokeWidth
  })), /*#__PURE__*/_react.default.createElement(DeterminateCircleFg, {
    circumference: circumference,
    cx: center,
    cy: center,
    r: radius,
    strokeColor: indicatorColor,
    strokeDasharray: circumference,
    strokeWidth: strokeWidth
  })))), /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: isDeterminate
  }, /*#__PURE__*/_react.default.createElement(StyledRootInDet, null, /*#__PURE__*/_react.default.createElement(StyledSvg, {
    height: diameter,
    width: diameter
  }, /*#__PURE__*/_react.default.createElement(_utils.Hideable, {
    hide: hideTrack
  }, /*#__PURE__*/_react.default.createElement(StyledCircleBg, {
    circumference: circumference,
    cx: center,
    cy: center,
    r: radius,
    strokeColor: trackColor,
    strokeWidth: strokeWidth
  })), /*#__PURE__*/_react.default.createElement(IndeterminateCircleFg, {
    circumference: circumference,
    cx: center,
    cy: center,
    r: radius,
    strokeColor: indicatorColor,
    strokeDasharray: circumference,
    strokeWidth: strokeWidth
  })))));
};

exports.CircularProgress = CircularProgress;
CircularProgress.propTypes = {
  diameter: _propTypes.default.number,
  hideTrack: _propTypes.default.bool,
  indicatorColor: _propTypes.default.string,
  isDeterminate: _propTypes.default.bool,
  strokeWidth: _propTypes.default.number,
  trackColor: _propTypes.default.string
};
CircularProgress.defaultProps = {
  diameter: 35,
  hideTrack: false,
  indicatorColor: 'indigo.dark',
  isDeterminate: false,
  strokeWidth: 5,
  trackColor: 'indigo.light'
};