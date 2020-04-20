"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

require("core-js/modules/es.date.to-json");

require("core-js/modules/web.url.to-json");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer["default"].create(element);

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
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      options: colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectFieldComponent with some style relate', function () {
  it('should return a SelectFieldComponent lg object', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      lg: true,
      options: colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent sm object', function () {
    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react["default"].createElement(_.SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      options: colorOptions,
      sm: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});