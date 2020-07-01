"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _typography = require("../../../../elements/typography");

const emptyTheme = {};

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

describe('Code Component base', () => {
  it('should return an empty Code with base styling', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_typography.Code, {
      code: '<Code code="" />'
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});