"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _reactRouterDom = require("react-router-dom");

var _styledComponents = require("styled-components");

var _ = require("..");

const emptyTheme = {};

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

describe('Button base', () => {
  it('should return a Button', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, null, "Button Base"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an outlined Button', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      id: "buttonOutline",
      outline: true
    }, "Button Outline"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an contained Button', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      contained: true,
      id: "buttonContained"
    }, "Button Contained"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an contained raised Button', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      contained: true,
      id: "buttonContainedRaised",
      raised: true
    }, "Button Contained and Raised"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with disabled', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      disabled: true,
      id: "exampleColor"
    }, "Disabled button"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with leading icon', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      leadingIcon: "foo"
    }, "Leading Icon on this button"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with loading indicator', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      showProgress: true
    }, "Loading..."));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('Button Component base with style', () => {
  it('should return a Button with bg and color', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      bg: "green",
      color: "white",
      id: "exampleColor"
    }, "Happy St. Patrick's Day!"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with bg and color and bgActiveColor and bgHoverColor ', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      bg: "green",
      bgActiveColor: "green.light",
      bgHoverColor: "green.dark",
      color: "white",
      id: "exampleColor"
    }, "Happy St. Patrick's Day!"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with sm', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      id: "exampleColor",
      sm: true
    }, "Do this"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with lg', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      id: "exampleColor",
      lg: true
    }, "Do this"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a string', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      zIndex: "500"
    }, "Do this"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a number', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      zIndex: 500
    }, "Do this"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with href with button look', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      href: "https://www.google.com/",
      target: "_blank"
    }, "google"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Link with to with button look', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_.Button, {
      to: "/404"
    }, "404")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button object with mailto props filled out', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Button, {
      emailHref: {
        bcc: 'email@napa.com',
        body: 'Body text for email.',
        cc: 'email@napa.com',
        subject: 'Subject line',
        to: 'email@napa.com'
      }
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});