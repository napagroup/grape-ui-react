'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

require('jest-styled-components');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2.default.create(element);
  return component.toJSON();
};
var colorOptions = [{ value: 'red', label: 'Red', color: '#FF5630' }, { value: 'yellow', label: 'Yellow', color: '#FFC400' }, { value: 'green', label: 'Green', color: '#36B37E' }];

describe('SelectFieldComponent base', function () {
  it('should return a SelectFieldComponent object', function () {
    var element = _react2.default.createElement(_.SelectFieldComponent, { defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('SelectFieldComponent with some style relate', function () {
  it('should return a SelectFieldComponent lg object', function () {
    var element = _react2.default.createElement(_.SelectFieldComponent, { defaultValue: colorOptions[1], id: 'exampleColor', lg: true, options: colorOptions });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a SelectFieldComponent sm object', function () {
    var element = _react2.default.createElement(_.SelectFieldComponent, { defaultValue: colorOptions[1], id: 'exampleColor', options: colorOptions, sm: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});