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

var colorOptions = [{ label: 'Red', value: 'red' }, { label: 'Yellow', value: 'yellow' }, { label: 'Green', value: 'green' }];

describe('CheckboxFieldComponent Component base', function () {
  it('should return a CheckboxFieldComponent that contains CheckboxComponent object', function () {
    var selectedValue = ['red'];
    var element = _react2.default.createElement(_.CheckboxFieldComponent, { id: 'exampleColor', name: 'Color', options: colorOptions, value: selectedValue });
    expect(assertReactElement(element)).toMatchSnapshot();
  });
});