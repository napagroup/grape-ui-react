"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.CircularProgress = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styledSystem = require("styled-system");

var _utils = require("../../../elements/utils");

var _utils2 = require("../../../elements/Progress/utils");

var _component = require("./component");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject7() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  animation-name: ", ";\n  ", "\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  from {\n    stroke-dashoffset: ", ";\n  }\n  to {\n    stroke-dashoffset: 0;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  animation-name: ", ";\n  ", "\n  ", "\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  -webkit-backface-visibility: hidden;\n  fill: none;\n  ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  0% {\n    stroke-dashoffset: ", ";\n  }\n  100% {\n    stroke-dashoffset: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const stroke = (0, _utils2.makeColorResolver)('stroke', 'strokeColor');
const circularRotate = (0, _styledComponents.keyframes)(_templateObject());

const circularDash = props => (0, _styledComponents.keyframes)(_templateObject2(), props.circumference * 2);

const StyledSvg = (0, _styledComponents.default)('svg')(_templateObject3(), _styledSystem.layout, _styledSystem.space);
StyledSvg.defaultProps = {
  display: 'block',
  m: 'auto',
  maxWidth: '100%',
  overflow: 'hidden'
};
const Track = (0, _styledComponents.default)(_component.CircleComponent)(_templateObject4(), stroke);
const StyledRoot = (0, _styledComponents.default)((0, _utils.withHideable)(_component.RootComponent))(_templateObject5(), circularRotate, (0, _styledSystem.system)({
  transform: true
}), _utils2.styledSystemAnimation);

const determinateCircularDash = props => (0, _styledComponents.keyframes)(_templateObject6(), props.circumference);

const getCircleAnimationName = props => {
  const animationName = props.animationName,
        isDeterminate = props.isDeterminate;

  if (animationName) {
    return animationName;
  }

  if (isDeterminate) {
    return determinateCircularDash;
  }

  return circularDash;
};

const Circle = (0, _styledComponents.default)(Track)(_templateObject7(), getCircleAnimationName, (0, _styledSystem.system)({
  strokeDashoffset: true
}), _utils2.styledSystemAnimation);

const getStyledRootProps = props => {
  const animationDuration = props.animationDuration,
        animationTimingFunction = props.animationTimingFunction,
        isDeterminate = props.isDeterminate,
        value = props.value;

  if (isDeterminate || value >= 0) {
    return {
      transform: 'rotate(-90deg)'
    };
  }

  return {
    animationDuration,
    animationIterationCount: (0, _utils2.getAnimationIterationCount)(props),
    animationTimingFunction
  };
};

const getTrackColor = props => props.hideTrack ? 'transparent' : props.trackColor;

const CircularProgress = props => {
  const containerProps = props.containerProps,
        diameter = props.diameter,
        indicatorColor = props.indicatorColor,
        indicatorProps = props.indicatorProps,
        indicatorPropsToTrim = props.indicatorPropsToTrim,
        isHidden = props.isHidden,
        strokeWidth = props.strokeWidth,
        trackProps = props.trackProps,
        trackPropsToTrim = props.trackPropsToTrim;
  const centerMath = diameter / 2;
  const radiusMath = centerMath - strokeWidth / 2;
  const circumferenceMath = 2 * Math.PI * radiusMath;
  const baseCircleProps = {
    circumference: circumferenceMath,
    cx: centerMath,
    cy: centerMath,
    r: radiusMath,
    strokeWidth
  };

  const progressProps = _objectSpread({}, baseCircleProps, {}, props);

  return /*#__PURE__*/_react.default.createElement(StyledRoot, (0, _extends2.default)({
    isHidden: isHidden
  }, getStyledRootProps(props), containerProps), /*#__PURE__*/_react.default.createElement(StyledSvg, {
    height: diameter,
    width: diameter
  }, /*#__PURE__*/_react.default.createElement(Track, (0, _extends2.default)({}, baseCircleProps, {
    strokeColor: getTrackColor(props)
  }, trackProps, {
    trackPropsToTrim: trackPropsToTrim
  })), /*#__PURE__*/_react.default.createElement(Circle, (0, _extends2.default)({}, baseCircleProps, (0, _utils2.getProgressProps)(progressProps), {
    strokeColor: indicatorColor,
    strokeDasharray: circumferenceMath
  }, indicatorProps, {
    indicatorPropsToTrim: indicatorPropsToTrim
  }))));
};

exports.CircularProgress = CircularProgress;
CircularProgress.propTypes = _objectSpread({}, _utils2.progressBasePropTypes, {
  diameter: _propTypes.default.number,
  strokeWidth: _propTypes.default.number
});
CircularProgress.defaultProps = _objectSpread({}, _utils2.progressBaseDefaultProps, {
  diameter: 24,
  strokeWidth: 4
});