import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { PlainText } from '..';
import 'jest-styled-components';
describe('PlainText Component base', function () {
  it('should return a PlainText object', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(PlainText, null, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a PlainText object with ellipsis', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(PlainText, {
      ellipsis: true
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a PlainText object with multi line ellipsis', function () {
    var component = renderer.create( /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(PlainText, {
      ellipsis: 2
    }, "Lorem Ipsum")));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});