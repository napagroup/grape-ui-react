"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.ElementEight = exports.ElementSeven = exports.ElementSix = exports.ElementFive = exports.ElementFour = exports.ElementThree = exports.ElementTwo = exports.ElementOne = exports.StyledFlex = exports.StyledBox = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _grid = require("../../../elements/grid");

const colors = `
  background: palevioletred;
  &:nth-of-type(2n) { background: darkorange; }
  &:nth-of-type(3n) { background: lightgoldenrodyellow; }
  &:nth-of-type(4n) { background: mediumseagreen; }
  &:nth-of-type(5n) { background: steelblue; }
  &:nth-of-type(6n) { background: rebeccapurple; }
  &:nth-of-type(7n) { background: indianred; }
  &:nth-of-type(8n) { background: orange; }
  &:nth-of-type(9n) { background: yellowgreen; }
  &:nth-of-type(10n) { background: lightseagreen; }
  &:nth-of-type(11n) { background: blueviolet; }
  &:nth-of-type(12n) { background: mediumpurple; }
`;
const StyledBox = (0, _styledComponents.default)(_grid.Box)`${colors}`;
exports.StyledBox = StyledBox;
const StyledFlex = (0, _styledComponents.default)(_grid.Flex)`${colors}`;
exports.StyledFlex = StyledFlex;
const ElementOne = (0, _styledComponents.default)(StyledBox)``;
exports.ElementOne = ElementOne;
const ElementTwo = (0, _styledComponents.default)(StyledBox)``;
exports.ElementTwo = ElementTwo;
const ElementThree = (0, _styledComponents.default)(StyledBox)``;
exports.ElementThree = ElementThree;
const ElementFour = (0, _styledComponents.default)(StyledBox)``;
exports.ElementFour = ElementFour;
const ElementFive = (0, _styledComponents.default)(StyledBox)``;
exports.ElementFive = ElementFive;
const ElementSix = (0, _styledComponents.default)(StyledBox)``;
exports.ElementSix = ElementSix;
const ElementSeven = (0, _styledComponents.default)(StyledBox)``;
exports.ElementSeven = ElementSeven;
const ElementEight = (0, _styledComponents.default)(StyledBox)``;
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