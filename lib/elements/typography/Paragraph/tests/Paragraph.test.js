"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Paragraph Component base', function () {
  it('should return a Paragraph object with base styling', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Paragraph Component specified styles', function () {
  it('should return a Paragraph object with a green color', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      color: "green"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a serif font-family', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      fontFamily: "serif"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a bold font-weight', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-style: italic', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      italic: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with specified kerning', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      kerning: "1px"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: lg', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      lg: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: sm', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      sm: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-align: right', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      textAlign: "right"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a lead paragraph stlying', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      lead: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-decoration: underline', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with custom margins', function () {
    var component = _reactTestRenderer2["default"].create(_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, _react2["default"].createElement(_.Paragraph, {
      mb: 1,
      mt: 1
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});