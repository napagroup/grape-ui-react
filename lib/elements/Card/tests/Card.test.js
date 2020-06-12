"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

require("jest-styled-components");

var _styledComponents = require("styled-components");

var _Card = require("../../../elements/Card");

const emptyTheme = {};

const assertReactElement = element => {
  const component = _reactTestRenderer.default.create(element);

  return component.toJSON();
};

describe('Box Component base', () => {
  it('should return a Card with base styling', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_Card.Card, {
      cardActions: "cardActions",
      cardActionsLeft: "cardActionsLeft",
      cardActionsRight: "cardActionsRight",
      cardBody: "cardBody",
      cardRichMedia: "cardRichMedia",
      cardSecondaryMedia: "cardSecondaryMedia",
      cardSubtitle: "cardSubtitle",
      cardThumbnail: "cardThumbnail",
      cardTitle: "cardTitle"
    }, "I am a child."));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Card with nuances', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_Card.Card, {
      cardActionsRight: "Card Actions Right",
      cardBody: "Card Body"
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return a Card with objects in title', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_Card.Card, {
      cardSubtitle: /*#__PURE__*/_react.default.createElement("div", null),
      cardTitle: /*#__PURE__*/_react.default.createElement("div", null)
    }));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
  it('should return an empty Card', () => {
    const element = /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
      theme: emptyTheme
    }, /*#__PURE__*/_react.default.createElement(_Card.Card, null));

    expect(assertReactElement(element)).toMatchSnapshot();
  });
});