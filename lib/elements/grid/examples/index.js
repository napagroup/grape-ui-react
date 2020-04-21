"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ElementEight = exports.ElementSeven = exports.ElementSix = exports.ElementFive = exports.ElementFour = exports.ElementThree = exports.ElementTwo = exports.ElementOne = exports.StyledFlex = exports.StyledBox = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grid = require("../../../elements/grid");

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])([""]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var colors = "\n  background: palevioletred;\n  &:nth-of-type(2n) { background: darkorange; }\n  &:nth-of-type(3n) { background: lightgoldenrodyellow; }\n  &:nth-of-type(4n) { background: mediumseagreen; }\n  &:nth-of-type(5n) { background: steelblue; }\n  &:nth-of-type(6n) { background: rebeccapurple; }\n  &:nth-of-type(7n) { background: indianred; }\n  &:nth-of-type(8n) { background: orange; }\n  &:nth-of-type(9n) { background: yellowgreen; }\n  &:nth-of-type(10n) { background: lightseagreen; }\n  &:nth-of-type(11n) { background: blueviolet; }\n  &:nth-of-type(12n) { background: mediumpurple; }\n";
var StyledBox = (0, _styledComponents["default"])(_grid.Box)(_templateObject(), colors);
exports.StyledBox = StyledBox;
var StyledFlex = (0, _styledComponents["default"])(_grid.Flex)(_templateObject2(), colors);
exports.StyledFlex = StyledFlex;
var ElementOne = (0, _styledComponents["default"])(StyledBox)(_templateObject3());
exports.ElementOne = ElementOne;
var ElementTwo = (0, _styledComponents["default"])(StyledBox)(_templateObject4());
exports.ElementTwo = ElementTwo;
var ElementThree = (0, _styledComponents["default"])(StyledBox)(_templateObject5());
exports.ElementThree = ElementThree;
var ElementFour = (0, _styledComponents["default"])(StyledBox)(_templateObject6());
exports.ElementFour = ElementFour;
var ElementFive = (0, _styledComponents["default"])(StyledBox)(_templateObject7());
exports.ElementFive = ElementFive;
var ElementSix = (0, _styledComponents["default"])(StyledBox)(_templateObject8());
exports.ElementSix = ElementSix;
var ElementSeven = (0, _styledComponents["default"])(StyledBox)(_templateObject9());
exports.ElementSeven = ElementSeven;
var ElementEight = (0, _styledComponents["default"])(StyledBox)(_templateObject10());
exports.ElementEight = ElementEight;
ElementOne.defaultProps = {
  height: 50
};
ElementTwo.defaultProps = {
  height: 60
};
ElementThree.defaultProps = {
  height: 70
};
ElementFour.defaultProps = {
  height: 80
};
ElementFive.defaultProps = {
  height: 90
};
ElementSix.defaultProps = {
  height: 100
};
ElementSeven.defaultProps = {
  height: 110
};
ElementEight.defaultProps = {
  height: 120
};