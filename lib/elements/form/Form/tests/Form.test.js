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

describe('Form Component base', function () {
  it('should return a Form object', function () {
    var element = _react2.default.createElement(_.Form, null);
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Form object with flex direction column', function () {
    var element = _react2.default.createElement(_.Form, { display: 'flex', flexDirection: 'column' });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});