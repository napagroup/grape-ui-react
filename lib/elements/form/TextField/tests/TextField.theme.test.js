"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

require("jest-styled-components");

var _reactTestRenderer = require("react-test-renderer");

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _styledComponents = require("styled-components");

var _ = require("..");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('TextField using Theme color', function () {
  it('should return a TextField object with custom color', function () {
    var theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)'
        }
      }
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react2["default"].createElement(_.TextField, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light",
      name: "myButton"
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer2["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('TextField using custom brand colors', function () {
  it('should return a TextField object with custom brand primary color', function () {
    var theme = {
      colors: {
        brandPrimary: {
          base: 'hsl(100, 84.6%, 28%)',
          dark: 'hsl(105, 33.9%, 23.7%)',
          light: 'hsl(113, 67.8%, 47.5%)'
        }
      },
      fonts: {
        base: 'Nunito, sans-serif'
      }
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react2["default"].createElement(_.TextField, {
      name: "myButton"
    }, "I should be hsl(100, 84.6%, 28%) on focus and I should be in Nunito"));

    var component = _reactTestRenderer2["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('TextField using Theme Font Family', function () {
  it('should return a TextField object with a custom font family', function () {
    var theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    var element = _react2["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, _react2["default"].createElement(_.TextField, {
      fontFamily: "trueSpace",
      name: "myButton"
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer2["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});