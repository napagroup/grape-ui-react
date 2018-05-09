'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Paragraph = require('../Paragraph');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('jest-styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Paragraph Component', function () {
  it('should return a Paragraph object with font-style: base', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-style: italic', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { italic: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: lg', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { lg: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-size: sm', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { sm: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with text-align: right', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { textAlign: 'right' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Paragraph object with font-weight: bold', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Paragraph.Paragraph,
      { fontWeight: 'bold' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});