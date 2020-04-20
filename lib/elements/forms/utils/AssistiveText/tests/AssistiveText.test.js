import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { AssistiveText } from '..';
import 'jest-styled-components';
var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

describe('Assistive Text Component base', function () {
  it('should return an Assistive Text object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(AssistiveText, {
      id: "assitiveTextIdHelp"
    }, "Helper text is here"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an Assistive Text object with danger text color', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/React.createElement(AssistiveText, {
      color: "brandDanger",
      id: "assitiveTextIdError"
    }, "Error text is here"));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});