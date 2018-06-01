'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Text = require('../Text');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('jest-styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Text Component base', function () {
  it('should return a Text object with base styling', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Text Component specified styles', function () {
  it('should return a Text object with a specified color', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      { color: 'green.light' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified font-family', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      { fontFamily: 'monospace' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified font-weight', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      { fontWeight: 'bolder' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-style: italic', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      { italic: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with specified kerning', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      { kerning: '1px' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-size: lg', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      { lg: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with font-size: sm', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      { sm: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with a specified text-align', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      { textAlign: 'right' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Text object with a specified text-decoration', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Text.Text,
      { textDecoration: 'underline' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});