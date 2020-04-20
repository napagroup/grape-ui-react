import "core-js/modules/es.date.to-json";
import "core-js/modules/web.url.to-json";
import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { CheckboxFieldComponent } from '..';
import 'jest-styled-components';

var assertReactElement = function assertReactElement(element) {
  var component = renderer.create(element);
  return component.toJSON();
};

var colorOptions = [{
  label: 'Red',
  value: 'red'
}, {
  label: 'Yellow',
  value: 'yellow'
}, {
  label: 'Green',
  value: 'green'
}];
describe('CheckboxFieldComponent Component base', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(CheckboxFieldComponent, {
      id: "exampleColor",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a CheckboxFieldComponent that contains PlainText object', function () {
    var selectedValue = ['red'];
    var element = /*#__PURE__*/React.createElement(ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/React.createElement(CheckboxFieldComponent, {
      id: "exampleColor",
      name: "Color",
      options: colorOptions,
      plainText: true,
      value: selectedValue
    }));
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});