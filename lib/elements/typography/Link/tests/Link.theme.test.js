"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _styledComponents = require("styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ = require("..");

require("jest-styled-components");

describe('Link using Theme color', function () {
  it('should return a Link object with custom color', function () {
    var theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)'
        }
      }
    };

    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react["default"].createElement(_.Link, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light"
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('Link using Theme Font Family', function () {
  it('should return a Link object with a custom font family', function () {
    var theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    var element = /*#__PURE__*/_react["default"].createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react["default"].createElement(_.Link, {
      fontFamily: "trueSpace"
    }, "Lorem Ipsum"));

    var component = _reactTestRenderer["default"].create(element);

    var tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});