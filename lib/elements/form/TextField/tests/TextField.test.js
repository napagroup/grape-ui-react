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

describe('TextField Component base', function () {
  it('should return a TextField object', function () {
    var element = _react2.default.createElement(_.TextField, { controlId: 'exampleFullName', labelText: 'Full name' });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with assistive text', function () {
  it('should return a TextField object contain Assistive Text', function () {
    var element = _react2.default.createElement(_.TextField, { assistiveText: 'Please tell me your name', controlId: 'exampleFullName', labelText: 'Full name' });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with validation error', function () {
  it('should return a TextField object contain Assistive Text with error style', function () {
    var element = _react2.default.createElement(_.TextField, { controlId: 'exampleFullName', labelText: 'Full name', validationError: 'This is a required field.' });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField with some other props', function () {
  it('should return a TextField object contain input with those other props ', function () {
    var element = _react2.default.createElement(_.TextField, { controlId: 'exampleFullName', labelText: 'Full name', link: 'abc', required: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField  a large TextFieldComponent object', function () {
  it('should return a large TextFieldComponent object ', function () {
    var element = _react2.default.createElement(_.TextField, { controlId: 'exampleFullName', labelText: 'Full name', lg: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', function () {
  it('should return a small TextFieldComponent object ', function () {
    var element = _react2.default.createElement(_.TextField, { controlId: 'exampleFullName', labelText: 'Full name', sm: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', function () {
  it('should return a small TextFieldComponent object with space mb ', function () {
    var element = _react2.default.createElement(_.TextField, { controlId: 'exampleFullName2', labelText: 'Full name2', m: '1' });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', function () {
  it('should return a small TextFieldComponent object with a red activeColor ', function () {
    var element = _react2.default.createElement(_.TextField, { activeColor: 'red', controlId: 'exampleFullName2', labelText: 'Full name2' });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a small TextFieldComponent object', function () {
  it('should return a disabled TextFieldComponent', function () {
    var element = _react2.default.createElement(_.TextField, { activeColor: 'red', controlId: 'exampleFullName2', labelText: 'Full name2', disabled: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a plainText TextFieldComponent', function () {
  it('should return a disabled TextFieldComponent', function () {
    var element = _react2.default.createElement(_.TextField, { activeColor: 'red', controlId: 'exampleFullName2', labelText: 'Full name2', plainText: true });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});
describe('TextField a TextFieldComponent object', function () {
  it('should return a TextFieldComponent object with a red bgColor ', function () {
    var element = _react2.default.createElement(_.TextField, { bgColor: 'red', controlId: 'exampleFullName2', labelText: 'Full name2' });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});