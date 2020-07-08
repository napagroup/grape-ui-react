"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.indeterminateKeyframes = exports.determinateKeyframes = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

function _templateObject4() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  0% {\n    transform: translate(-100%, 0);\n  }\n  50% {\n    transform: translate(60%, 0);\n  }\n  65% {\n    transform: translate(100%, 0);\n  }\n  65.1% {\n    transform: translate(-100%, 100%);\n  }\n  65.2% {\n    transform: translate(-100%, 0);\n  }\n  100% {\n    transform: translate(100%, 0);\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = (0, _taggedTemplateLiteral2.default)(["\n  0% {\n    transform: translate(-100%, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

const determinateKeyframesBase = (0, _styledComponents.keyframes)(_templateObject());

const determinateKeyframes = () => (0, _styledComponents.css)(_templateObject2(), determinateKeyframesBase);

exports.determinateKeyframes = determinateKeyframes;
const indeterminateKeyframesBase = (0, _styledComponents.keyframes)(_templateObject3());

const indeterminateKeyframes = () => (0, _styledComponents.css)(_templateObject4(), indeterminateKeyframesBase);

exports.indeterminateKeyframes = indeterminateKeyframes;