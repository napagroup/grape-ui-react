"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

const colorOptions = [{
  label: 'Red',
  value: 'red'
}, {
  label: 'Yellow',
  value: 'yellow'
}, {
  label: 'Green',
  value: 'green'
}];
describe('CheckboxFieldComponent Component base', () => {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', () => {
    const selectedValue = ['red'];

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxFieldComponent, {
      id: "exampleColor",
      name: "Color",
      options: colorOptions,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a CheckboxFieldComponent that contains PlainText object', () => {
    const selectedValue = ['red'];

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react.default.createElement(_.CheckboxFieldComponent, {
      id: "exampleColor",
      name: "Color",
      options: colorOptions,
      plainText: true,
      value: selectedValue
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});