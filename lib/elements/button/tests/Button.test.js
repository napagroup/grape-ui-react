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
describe('Button base', function () {
  it('should return a Button', function () {
    var element = _react2.default.createElement(
      _.Button,
      null,
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with disabled', function () {
    var element = _react2.default.createElement(
      _.Button,
      { disabled: true, id: 'exampleColor' },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});

describe('Button Component base with style', function () {
  it('should return a Button with bgColor and color', function () {
    var element = _react2.default.createElement(
      _.Button,
      { bgColor: 'green', color: 'brandDanger', id: 'exampleColor' },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with sm', function () {
    var element = _react2.default.createElement(
      _.Button,
      { id: 'exampleColor', sm: true },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with lg', function () {
    var element = _react2.default.createElement(
      _.Button,
      { id: 'exampleColor', lg: true },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });

  it('should return a Button with a zIndex when using a string', function () {
    var element = _react2.default.createElement(
      _.Button,
      { zIndex: '500' },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Button with a zIndex when using a number', function () {
    var element = _react2.default.createElement(
      _.Button,
      { zIndex: 500 },
      'Do this'
    );
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});