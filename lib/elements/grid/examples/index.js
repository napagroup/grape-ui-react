"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ElementEight = exports.ElementSeven = exports.ElementSix = exports.ElementFive = exports.ElementFour = exports.ElementThree = exports.ElementTwo = exports.ElementOne = exports.StyledFlex = exports.StyledBox = undefined;

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject10() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["", ""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var colors = "\n  background: palevioletred;\n  &:nth-of-type(2n) { background: darkorange; }\n  &:nth-of-type(3n) { background: lightgoldenrodyellow; }\n  &:nth-of-type(4n) { background: mediumseagreen; }\n  &:nth-of-type(5n) { background: steelblue; }\n  &:nth-of-type(6n) { background: rebeccapurple; }\n  &:nth-of-type(7n) { background: indianred; }\n  &:nth-of-type(8n) { background: orange; }\n  &:nth-of-type(9n) { background: yellowgreen; }\n  &:nth-of-type(10n) { background: lightseagreen; }\n  &:nth-of-type(11n) { background: blueviolet; }\n  &:nth-of-type(12n) { background: mediumpurple; }\n";
var StyledBox = exports.StyledBox = (0, _styledComponents2["default"])(_.Box)(_templateObject(), colors);
var StyledFlex = exports.StyledFlex = (0, _styledComponents2["default"])(_.Flex)(_templateObject2(), colors);
var ElementOne = exports.ElementOne = (0, _styledComponents2["default"])(StyledBox)(_templateObject3());
var ElementTwo = exports.ElementTwo = (0, _styledComponents2["default"])(StyledBox)(_templateObject4());
var ElementThree = exports.ElementThree = (0, _styledComponents2["default"])(StyledBox)(_templateObject5());
var ElementFour = exports.ElementFour = (0, _styledComponents2["default"])(StyledBox)(_templateObject6());
var ElementFive = exports.ElementFive = (0, _styledComponents2["default"])(StyledBox)(_templateObject7());
var ElementSix = exports.ElementSix = (0, _styledComponents2["default"])(StyledBox)(_templateObject8());
var ElementSeven = exports.ElementSeven = (0, _styledComponents2["default"])(StyledBox)(_templateObject9());
var ElementEight = exports.ElementEight = (0, _styledComponents2["default"])(StyledBox)(_templateObject10());
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