"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

describe('Text Component base', function () {
  it('should return a Text object with base styling', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Text Component specified styles', function () {
  it('should return a Text object with a specified color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      color: "green.light"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with ellipsis', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      ellipsis: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified font-family', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      fontFamily: "monospace"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified font-weight', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      fontWeight: "bolder"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-style: italic', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      italic: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified kerning', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      kerning: "1px"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-size: lg', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      lg: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-size: sm', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      sm: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with a specified text-align', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      textAlign: "right"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with a specified text-decoration', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with a specified padding', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Text, {
      px: [1, 2, 3, 4]
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});