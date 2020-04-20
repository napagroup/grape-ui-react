"use strict";

var _globalStyles = require("../../../../global-styles");

var _ = require("../..");

/* eslint-disable import/no-duplicates */
const {
  colors: colorSchema
} = (0, _globalStyles.getGlobalStyles)();
describe('When given props with undefined color and bg', () => {
  it('should return the default styling for background and color', () => {
    const props = {};
    const expected = {
      backgroundColor: _.defaultStylesBase.bg,
      color: _.defaultStylesBase.color
    };
    expect((0, _.colorCore)(props)).toEqual(expected);
  });
});
describe('When given props with color and bg', () => {
  it('should return the default styling for background and color', () => {
    const props = {
      bg: 'green.dark',
      color: 'green'
    };
    const expected = {
      backgroundColor: colorSchema.green.dark,
      color: colorSchema.green.base
    };
    expect((0, _.colorCore)(props)).toEqual(expected);
  });
});
describe('When given props with non-variable color and bg', () => {
  it('should return the default styling for background and color', () => {
    const props = {
      bg: '#ff0000',
      color: '#ffffff'
    };
    const expected = {
      backgroundColor: props.bg,
      color: props.color
    };
    expect((0, _.colorCore)(props)).toEqual(expected);
  });
});