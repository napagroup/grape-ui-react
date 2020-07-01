"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty2 = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.LinearProgress = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/extends"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grid = require("../../../elements/grid");

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys.default)(object); if (_getOwnPropertySymbols.default) { var symbols = (0, _getOwnPropertySymbols.default)(object); if (enumerableOnly) symbols = (0, _filter.default)(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach.default)(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3.default)(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors.default) { (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source)); } else { var _context2; (0, _forEach.default)(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key)); }); } } return target; }

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  animation-name: ", ";\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const backgroundIndicatorColor = (0, _utils.makeColorResolver)('background', 'indicatorColor');
const backgroundTrackColor = (0, _utils.makeColorResolver)('background', 'trackColor');
const Track = (0, _styledComponents.default)(_grid.Box)(_templateObject(), backgroundTrackColor);
Track.defaultProps = {
  height: 5,
  overflow: 'hidden'
};

const getAnimationName = props => {
  const animationName = props.animationName,
        isDeterminate = props.isDeterminate;

  if (animationName) {
    return animationName;
  }

  if (isDeterminate) {
    return (0, _utils.determinateKeyframes)();
  }

  return (0, _utils.indeterminateKeyframes)();
};

const Line = (0, _styledComponents.default)(_grid.Box)(_templateObject2(), backgroundIndicatorColor, getAnimationName, _utils.styledSystemAnimation);
Line.defaultProps = {
  height: '100%',
  width: 1
};

const getTrackColor = props => props.hideTrack ? 'transparent' : props.trackColor;

const LinearProgress = props => {
  const hideTrack = props.hideTrack,
        indicatorColor = props.indicatorColor,
        indicatorProps = props.indicatorProps,
        trackColor = props.trackColor,
        trackProps = props.trackProps;
  return /*#__PURE__*/_react.default.createElement(Track, (0, _extends2.default)({
    trackColor: getTrackColor({
      hideTrack,
      trackColor
    })
  }, trackProps), /*#__PURE__*/_react.default.createElement(Line, (0, _extends2.default)({}, (0, _utils.getProgressProps)(props), {
    indicatorColor: indicatorColor
  }, indicatorProps)));
};

exports.LinearProgress = LinearProgress;
LinearProgress.propTypes = _objectSpread({}, _utils.progressBasePropTypes, {
  value: _propTypes.default.number
});
LinearProgress.defaultProps = _objectSpread({}, _utils.progressBaseDefaultProps, {
  total: 100,
  value: -1
});