"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _reactRouterDom = require("react-router-dom");

var _ = require("..");

require("jest-styled-components");

describe('Link Component base', () => {
  it('should return an anchor tag', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, null, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an anchor tag with an href, given the href attribute', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      href: "./home"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a react router tag, given a \'to\' attribute', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_.Link, {
      to: "/home"
    }, "Lorem Ipsum"))));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Link Component specified styles', () => {
  it('should return a Link object with a base color (implicit)', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      color: "green"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a base color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      color: "green.base"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a light color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      color: "green.light"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a dark color', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      color: "green.dark"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with ellipsis', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      ellipsis: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-family', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      fontFamily: "monospace"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-weight', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-style: italic', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      italic: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: lg', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      lg: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: sm', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      sm: true
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified kerning', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      kerning: "2px"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-align', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      textAlign: "right"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-decoration', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with custom margin & padding', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
      m: 1,
      p: 1,
      textDecoration: "underline"
    }, "Lorem Ipsum")));

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with mailto props filled out', () => {
    const component = _reactTestRenderer.default.create( /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.Link, {
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