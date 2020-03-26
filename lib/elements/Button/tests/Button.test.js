"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _reactRouterDom = require("react-router-dom");

var _styledComponents = require("styled-components");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

  return component.toJSON();
};

describe('Button base', function () {
  it('should return a Button', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, null, "Button Base"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an outlined Button', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      id: "buttonOutline",
      outline: true
    }, "Button Outline"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an contained Button', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      contained: true,
      id: "buttonContained"
    }, "Button Contained"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an contained raised Button', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      contained: true,
      id: "buttonContainedRaised",
      raised: true
    }, "Button Contained and Raised"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with disabled', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      disabled: true,
      id: "exampleColor"
    }, "Disabled button"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Button Component base with style', function () {
  it('should return a Button with bg and color', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      bg: "green",
      color: "white",
      id: "exampleColor"
    }, "Happy St. Patrick's Day!"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with bg and color and bgActiveColor and bgHoverColor ', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      bg: "green",
      bgActiveColor: "green.light",
      bgHoverColor: "green.dark",
      color: "white",
      id: "exampleColor"
    }, "Happy St. Patrick's Day!"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with sm', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      id: "exampleColor",
      sm: true
    }, "Do this"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with lg', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      id: "exampleColor",
      lg: true
    }, "Do this"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a string', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      zIndex: "500"
    }, "Do this"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a number', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      zIndex: 500
    }, "Do this"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with href with button look', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      href: "https://www.google.com/",
      target: "_blank"
    }, "google"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with to with button look', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react2["default"].createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react2["default"].createElement(_.Button, {
      to: "/404"
    }, "404")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button object with mailto props filled out', function () {
    var component = _reactTestRenderer2["default"].create( /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.Button, {
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