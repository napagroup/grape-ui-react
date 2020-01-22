"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _ = require("../..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var emptyTheme = {};

var assertReactElement = function assertReactElement(element) {
  var component = _reactTestRenderer2["default"].create(element);

  return component.toJSON();
};

describe('Box Component flexbox base', function () {
  it('should return a Box object with alignSelf', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Flex, {
      alignItems: "center"
    }, _react2["default"].createElement(_.Box, null, "I stay centered."), _react2["default"].createElement(_.Box, {
      alignSelf: "baseline"
    }, "I am at baseline."), _react2["default"].createElement(_.Box, {
      alignSelf: ['auto', 'flex-start', 'flex-end', 'stretch']
    }, "I am responsive.")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flex', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Flex, null, _react2["default"].createElement(_.Box, {
      flex: 1
    }, "I have Flex of 1"), _react2["default"].createElement(_.Box, {
      flex: [2, 1, 3, 2]
    }, "I have a responsive Flex"), _react2["default"].createElement(_.Box, {
      flex: "1 1 auto"
    }, "I have a flex string")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexBasis', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Flex, null, _react2["default"].createElement(_.Box, {
      flexBasis: 1
    }, "I have flex basis of 1"), _react2["default"].createElement(_.Box, {
      flexBasis: [2, 1, 3, 2]
    }, "I have a responsive flex basis"), _react2["default"].createElement(_.Box, {
      flexBasis: "auto"
    }, "I have flex basis of 1")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexGrow', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Flex, null, _react2["default"].createElement(_.Box, {
      flexGrow: 1
    }, "I have flex grow of 1"), _react2["default"].createElement(_.Box, {
      flexGrow: [2, 1, 3, 2]
    }, "I have a responsive flex grow")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with flexShrink', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Flex, null, _react2["default"].createElement(_.Box, {
      flexShrink: 1
    }, "I have flex shrink of 1"), _react2["default"].createElement(_.Box, {
      flexShrink: [2, 1, 3, 2]
    }, "I have a responsive flex shrink")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with justifySelf', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Flex, {
      justifyContent: "center"
    }, _react2["default"].createElement(_.Box, null, "I stay centered."), _react2["default"].createElement(_.Box, {
      justifySelf: "baseline"
    }, "I am at baseline."), _react2["default"].createElement(_.Box, {
      justifySelf: ['auto', 'flex-start', 'flex-end', 'stretch']
    }, "I am responsive.")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Box object with order', function () {
    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, _react2["default"].createElement(_.Flex, null, _react2["default"].createElement(_.Box, {
      order: [1, 2, 3, 4]
    }, "I am first xs, second sm, third md, fourth lg"), _react2["default"].createElement(_.Box, {
      order: [2, 1, 4, 3]
    }, "I am second xs, first sm, fourth md, third lg"), _react2["default"].createElement(_.Box, {
      order: [3, 4, 2, 1]
    }, "I am third xs, fourth sm, second md, first lg"), _react2["default"].createElement(_.Box, {
      order: [4, 3, 1, 2]
    }, "I am fourth xs, third sm, first md, second lg")));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});