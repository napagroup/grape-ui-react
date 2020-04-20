import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { Paragraph } from '..';
import 'jest-styled-components';
describe('Paragraph Component base', function () {
  it('should return a Paragraph object with base styling', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, null, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Paragraph Component specified styles', function () {
  it('should return a Paragraph object with a green color', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      color: "green"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with ellipsis', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      ellipsis: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a serif font-family', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      fontFamily: "serif"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a bold font-weight', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      fontWeight: "bold"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-style: italic', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      italic: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with specified kerning', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      kerning: "1px"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: lg', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      lg: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: sm', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      sm: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-align: right', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      textAlign: "right"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with a lead paragraph stlying', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      lead: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-decoration: underline', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      textDecoration: "underline"
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with custom margins', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(Paragraph, {
      mb: 1,
      mt: 1
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});