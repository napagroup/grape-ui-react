"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _enzyme = require("enzyme");

var _enzymeAdapterReact = _interopRequireDefault(require("enzyme-adapter-react-16"));

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

var _styledComponents = require("styled-components");

var _ = require("..");

(0, _enzyme.configure)({
  adapter: new _enzymeAdapterReact.default()
});
describe('Image Component base', () => {
  it('should return a shallow Image object with base styling', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Image, {
      alt: "blue flower",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect((0, _enzymeToJson.default)((0, _find.default)(component).call(component, 'Img'))).toMatchSnapshot();
  });
  it('should return a Image object with a console error', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Image, {
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect((0, _enzymeToJson.default)((0, _find.default)(component).call(component, 'Img'))).toMatchSnapshot();
  });
  it('should return a Image object with maxWidth applied', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Image, {
      alt: "blue flower",
      maxWidth: "200px",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
    })));
    expect((0, _enzymeToJson.default)((0, _find.default)(component).call(component, 'Img'))).toMatchSnapshot();
  });
  it('should return a Image object with width applied', () => {
    const component = (0, _enzyme.mount)( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Image, {
      alt: "blue flower",
      src: "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg",
      width: [1, 3 / 4, 2 / 3, 1 / 2]
    })));
    expect((0, _enzymeToJson.default)((0, _find.default)(component).call(component, 'Img'))).toMatchSnapshot();
  });
});