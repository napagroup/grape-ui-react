'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Link = require('../Link');

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _reactRouterDom = require('react-router-dom');

require('jest-styled-components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Link Component', function () {
  it('should return an anchor tag', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Link.Link,
      null,
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return an anchor tag with an href, given the href attribute', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _Link.Link,
      { href: './home' },
      'Lorem Ipsum'
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should return a react router tag, given a \'to\' attribute', function () {
    var component = _reactTestRenderer2.default.create(_react2.default.createElement(
      _reactRouterDom.MemoryRouter,
      null,
      _react2.default.createElement(
        _Link.Link,
        { to: './home' },
        'Lorem Ipsum'
      )
    ));
    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});