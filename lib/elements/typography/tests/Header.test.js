'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('../Header');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require('jest-styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Header.h1 Component', function () {
  it('should return a Header object with font-style: base', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Header.Header,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-style: italic', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Header.Header,
      { italic: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: lg', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Header.Header,
      { lg: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header object with font-size: sm', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Header.Header,
      { sm: true },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Header Elements Component', function () {
  it('should return a h2 element', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Header.Header.h2,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header.h3 object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Header.Header.h3,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header.h4 object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Header.Header.h4,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header.h5 object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Header.Header.h5,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a Header.h6 object', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Header.Header.h6,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});