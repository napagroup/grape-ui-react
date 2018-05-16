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
});