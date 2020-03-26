"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

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
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      options: colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('SelectFieldComponent with some style relate', function () {
  it('should return a SelectFieldComponent lg object', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      lg: true,
      options: colorOptions
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent sm object', function () {
    var element = /*#__PURE__*/_react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: {}
    }, /*#__PURE__*/_react2["default"].createElement(_.SelectFieldComponent, {
      defaultValue: colorOptions[1],
      id: "exampleColor",
      options: colorOptions,
      sm: true
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});