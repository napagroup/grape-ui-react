'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _List = require('../List');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('jest-styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('List Component', function () {
  it('should return a List object with base styling', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-style: italic', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { italic: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: lg', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { lg: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: sm', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { sm: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('List Specific Styling', function () {
  it('should return an unstyled List object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { unstyled: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline List object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { inline: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a base color (implicit)', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { color: 'green' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a base color', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { color: 'green.base' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a light color', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { color: 'green.light' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a dark color', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { color: 'green.dark' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified font-family', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { fontFamily: 'monospace' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified font-weight', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { fontWeight: 'bold' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with font-size: sm', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { sm: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified kerning', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { kerning: '2px' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified text-align', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { textAlign: 'right' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with a specified text-decoration', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List,
      { textDecoration: 'underline' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Numbered List Component', function () {
  it('should return a Numbered List object with base styling', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-style: italic', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { italic: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered Numbered List object with font-size: lg', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { lg: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with font-size: sm', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { sm: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with roman numerals uppercase', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { type: 'I' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Numbered List object with roman numerals lowercase', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { type: 'i' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with Alpha uppercase', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { type: 'A' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List object with Alpha lowercase', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { type: 'a' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Numbered List Specific Styling', function () {
  it('should return an unstyled Numbered List object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { unstyled: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an inline Numbered List object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { inline: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a base color (implicit)', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { color: 'green' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a base color', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { color: 'green.base' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a light color', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { color: 'green.light' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a dark color', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { color: 'green.dark' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified font-family', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { fontFamily: 'monospace' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified font-weight', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { fontWeight: 'bold' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with font-size: sm', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { sm: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified kerning', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { kerning: '2px' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified text-align', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { textAlign: 'right' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a List.ol object with a specified text-decoration', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _List.List.ol,
      { textDecoration: 'underline' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});