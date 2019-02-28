'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

require('jest-styled-components');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _TextField = require('../../TextField/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2.default.create(element);
  return component.toJSON();
};

describe('Form Component base', function () {
  it('should return a Form object', function () {
    var element = _react2.default.createElement(_.Form, null);
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with flex direction column', function () {
    var element = _react2.default.createElement(_.Form, { display: 'flex', flexDirection: 'column' });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with div that do not get formStyle="filled"', function () {
    var element = _react2.default.createElement(
      _.Form,
      { display: 'flex', formStyle: 'filled' },
      _react2.default.createElement('div', { id: '1' })
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object and textField with filled formStyle', function () {
    var element = _react2.default.createElement(
      _.Form,
      { display: 'flex', formStyle: 'filled' },
      _react2.default.createElement(_TextField.TextField, { controlId: 'exampleFullName', labelText: 'Full name' })
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Form object  with filled formStyle and textField with outlined', function () {
    var element = _react2.default.createElement(
      _.Form,
      { display: 'flex', formStyle: 'filled' },
      _react2.default.createElement(_TextField.TextField, { controlId: 'exampleFullName', formStyle: 'outlined', labelText: 'Full name' })
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Form object  with  2 filled formStyle and textField with outlined', function () {
    var element = _react2.default.createElement(
      _.Form,
      { display: 'flex', formStyle: 'filled' },
      _react2.default.createElement(_TextField.TextField, { controlId: 'exampleFullName', labelText: 'Full name' }),
      _react2.default.createElement(_TextField.TextField, { controlId: 'address', labelText: 'Address' })
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});