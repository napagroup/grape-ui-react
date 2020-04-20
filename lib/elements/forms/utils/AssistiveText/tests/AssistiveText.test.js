"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _styledComponents = require("styled-components");

var _ = require("..");

require("jest-styled-components");

const emptyTheme = {};

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

describe('Assistive Text Component base', () => {
  it('should return an Assistive Text object', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.AssistiveText, {
      id: "assitiveTextIdHelp"
    }, "Helper text is here"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an Assistive Text object with danger text color', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_.AssistiveText, {
      color: "brandDanger",
      id: "assitiveTextIdError"
    }, "Error text is here"));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});