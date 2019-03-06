'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('..');

require('jest-styled-components');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2.default.create(element);
  return component.toJSON();
};

describe('TextFieldComponent base', function () {
  it('should return a TextFieldComponent object', function () {
    var element = _react2.default.createElement(_.TextFieldComponent, null);
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a small TextFieldComponent object', function () {
    var element = _react2.default.createElement(_.TextFieldComponent, { sm: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a large TextFieldComponent object', function () {
    var element = _react2.default.createElement(_.TextFieldComponent, { lg: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with a password attribute', function () {
  it('should return a TextFieldComponent of input type password', function () {
    var element = _react2.default.createElement(_.TextFieldComponent, { password: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('TextFieldComponent with an email attribute', function () {
  it('should return a TextFieldComponent of input type email', function () {
    var element = _react2.default.createElement(_.TextFieldComponent, { email: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});