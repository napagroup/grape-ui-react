"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

describe('Paragraph Component base', function () {
  it('should return a Paragraph object with base styling', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Paragraph Component specified styles', function () {
  it('should return a Paragraph object with a green color', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      color: "green"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with ellipsis', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      ellipsis: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a serif font-family', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      fontFamily: "serif"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a bold font-weight', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-style: italic', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      italic: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with specified kerning', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      kerning: "1px"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: lg', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      lg: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: sm', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      sm: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-align: right', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      textAlign: "right"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a lead paragraph stlying', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      lead: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-decoration: underline', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with custom margins', function () {
    var component = _reactTestRenderer["default"].create( /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.Paragraph, {
      mb: 1,
      mt: 1
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});