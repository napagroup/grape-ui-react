"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

describe('PlainText Component base', () => {
  it('should return a PlainText object', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.PlainText, null, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a PlainText object with ellipsis', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.PlainText, {
      ellipsis: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a PlainText object with multi line ellipsis', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.PlainText, {
      ellipsis: 2
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});