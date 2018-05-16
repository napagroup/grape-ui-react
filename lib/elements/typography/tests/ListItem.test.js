'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItem = require('../ListItem');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('jest-styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ListItem Component', function () {
  it('should return a ListItem object with base styling', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _ListItem.ListItem,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with font-style: italic', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _ListItem.ListItem,
      { italic: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with font-size: lg', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _ListItem.ListItem,
      { lg: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a ListItem object with font-size: sm', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _ListItem.ListItem,
      { sm: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});