"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

require("jest-styled-components");

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

describe('AssistiveText using Theme color', () => {
  it('should return a AssistiveText object with custom color', () => {
    const theme = {
      colors: {
        grapeSoda: {
          base: 'hsl(325, 84.6%, 28%)',
          dark: 'hsl(305, 33.9%, 23.7%)',
          light: 'hsl(313, 67.8%, 47.5%)'
        }
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.AssistiveText, {
      bg: "grapeSoda.dark",
      color: "grapeSoda.light"
    }, "Lorem Ipsum"));

    const component = _reactTestRenderer.default.create(element);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
describe('AssistiveText using Theme Font Family', () => {
  it('should return a AssistiveText object with a custom font family', () => {
    const theme = {
      fonts: {
        trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
      }
    };

    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, /*#__PURE__*/_react.default.createElement(_.AssistiveText, {
      fontFamily: "trueSpace"
    }, "Lorem Ipsum"));

    const component = _reactTestRenderer.default.create(element);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});