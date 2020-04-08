"use strict";

require("core-js/modules/es.array.find");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

var _styledComponents = require("styled-components");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact["default"]()
});
describe('Image Component base', function () {
  it('should return a shallow Image object with base styling', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Image, {
      alt: "blue flower",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect((0, _enzymeToJson["default"])(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with a console error', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Image, {
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect((0, _enzymeToJson["default"])(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with maxWidth applied', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Image, {
      alt: "blue flower",
      maxWidth: "200px",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect((0, _enzymeToJson["default"])(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with width applied', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Image, {
      alt: "blue flower",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg",
      width: [1, 3 / 4, 2 / 3, 1 / 2]
    })));
    expect((0, _enzymeToJson["default"])(component.find('Img'))).toMatchSnapshot();
  });
});