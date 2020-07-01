"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.styledSystemAnimation = exports.makeColorResolver = exports.getAnimationIterationCount = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

var _styledSystem = require("styled-system");

var _styledHelpers = require("../../../utils/styledHelpers");

var _globalStyles = require("../../../global-styles");

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const getAnimationIterationCount = props => {
  const animationIterationCount = props.animationIterationCount,
        loop = props.loop;

  if (animationIterationCount) {
    return animationIterationCount;
  }

  if (loop) {
    return 'infinite';
  }

  return 1;
};

exports.getAnimationIterationCount = getAnimationIterationCount;

const makeColorResolver = (styleName, propName) => props => ({
  [styleName]: (0, _styledHelpers.resolveColor)(props[propName], (0, _globalStyles.getGlobalOverrides)(props))
});

exports.makeColorResolver = makeColorResolver;
const styledSystemAnimation = (0, _styledComponents.css)(_templateObject(), (0, _styledSystem.system)({
  animationDuration: true
}), (0, _styledSystem.system)({
  animationTimingFunction: true
}), (0, _styledSystem.system)({
  animationDelay: true
}), (0, _styledSystem.system)({
  animationIterationCount: true
}), (0, _styledSystem.system)({
  animationDirection: true
}), (0, _styledSystem.system)({
  animationFillMode: true
}), (0, _styledSystem.system)({
  animationPlayState: true
}), (0, _styledSystem.system)({
  animation: true
}));
exports.styledSystemAnimation = styledSystemAnimation;