"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = require("enzyme-adapter-react-16");

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _enzymeToJson = require("enzyme-to-json");

var _enzymeToJson2 = _interopRequireDefault(_enzymeToJson);

var _styledComponents = require("styled-components");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact2["default"]()
});
describe('Image Component base', function () {
  it('should return a shallow Image object with base styling', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Image, {
      alt: "blue flower",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect((0, _enzymeToJson2["default"])(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with a console error', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Image, {
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect((0, _enzymeToJson2["default"])(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with maxWidth applied', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Image, {
      alt: "blue flower",
      maxWidth: "200px",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect((0, _enzymeToJson2["default"])(component.find('Img'))).toMatchSnapshot();
  });
  it('should return a Image object with width applied', function () {
    var component = (0, _enzyme.mount)( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Image, {
      alt: "blue flower",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg",
      width: [1, 3 / 4, 2 / 3, 1 / 2]
    })));
    expect((0, _enzymeToJson2["default"])(component.find('Img'))).toMatchSnapshot();
  });
});