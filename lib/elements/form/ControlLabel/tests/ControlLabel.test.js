'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ = require('../');

require('jest-styled-components');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ControlLabel Component base', function () {
  it('should return a ControlLabel object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _.ControlLabel,
      { htmlFor: 'forWhatId' },
      'Label text is here'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});