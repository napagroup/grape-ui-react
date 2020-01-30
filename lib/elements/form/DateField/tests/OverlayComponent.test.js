"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _OverlayComponent = require("../OverlayComponent");

require("jest-styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

  return component.toJSON();
};

describe('Overlay Component base', function () {
  it('should return an Overlay Component object', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_OverlayComponent.OverlayComponent, null, "I am an overlay component."));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an Overlay Component with position set to relative', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_OverlayComponent.OverlayComponent, {
      position: "relative"
    }, "I am relative."));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});