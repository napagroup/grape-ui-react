import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { SelectFieldComponent } from '..';
import 'jest-styled-components';

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

var colorOptions = [{
  color: '#FF5630',
  label: 'Red',
  value: 'red'
}, {
  color: '#FFC400',
  label: 'Yellow',
  value: 'yellow'
}, {
  color: '#36B37E',
  label: 'Green',
  value: 'green'
}];
describe('SelectFieldComponent base', function () {
  it('should return a SelectFieldComponent object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      options: colorOptions
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectFieldComponent with some style relate', function () {
  it('should return a SelectFieldComponent lg object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      lg: true,
      options: colorOptions
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent sm object', function () {
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      options: colorOptions,
      sm: true
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});