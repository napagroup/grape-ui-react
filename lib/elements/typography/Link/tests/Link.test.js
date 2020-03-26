"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _reactRouterDom = require("react-router-dom");

var _ = require("..");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Link Component base', function () {
  it('should return an anchor tag', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, null, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an anchor tag with an href, given the href attribute', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      href: "./home"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a react router tag, given a \'to\' attribute', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      to: "/home"
    }, "Lorem Ipsum"))));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Link Component specified styles', function () {
  it('should return a Link object with a base color (implicit)', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      color: "green"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a base color', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      color: "green.base"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a light color', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      color: "green.light"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a dark color', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      color: "green.dark"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with ellipsis', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      ellipsis: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-family', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      fontFamily: "monospace"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-weight', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-style: italic', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      italic: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: lg', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      lg: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: sm', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      sm: true
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified kerning', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      kerning: "2px"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-align', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      textAlign: "right"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-decoration', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with custom margin & padding', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      m: 1,
      p: 1,
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with mailto props filled out', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Link, {
      emailHref: {
        bcc: 'email@napa.com',
        body: 'Body text for email.',
        cc: 'email@napa.com',
        subject: 'Subject line',
        to: 'email@napa.com'
      }
    }, "Lorem Ipsum")));

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});