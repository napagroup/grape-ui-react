import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter as Router } from 'react-router-dom';
import { Link } from '..';
import 'jest-styled-components';
describe('Link Component base', function () {
  it('should return an anchor tag', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, null, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an anchor tag with an href, given the href attribute', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      href: "./home"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a react router tag, given a \'to\' attribute', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Router, null, /*#__PURE__*/React.createElement(Link, {
      to: "/home"
    }, "Lorem Ipsum"))));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Link Component specified styles', function () {
  it('should return a Link object with a base color (implicit)', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      color: "green"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a base color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      color: "green.base"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a light color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      color: "green.light"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a dark color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      color: "green.dark"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with ellipsis', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      ellipsis: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-family', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      fontFamily: "monospace"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified font-weight', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-style: italic', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      italic: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: lg', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      lg: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with font-size: sm', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      sm: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified kerning', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      kerning: "2px"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-align', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      textAlign: "right"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with a specified text-decoration', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with custom margin & padding', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
      m: 1,
      p: 1,
      textDecoration: "underline"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Link object with mailto props filled out', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Link, {
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