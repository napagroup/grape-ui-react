"use strict";

var _globalStyles = require("../../../../global-styles");

var _ = require("../..");

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    colorSchema = _getGlobalStyles.colors;

describe('When given props with undefined color and bg', function () {
  it('should return the default styling for background and color', function () {
    var props = {};
    var expected = [{
      color: _.defaultStylesBase.color
    }, {
      backgroundColor: _.defaultStylesBase.bg
    }];
    expect((0, _.colorCore)(props)).toEqual(expected);
  });
});
describe('When given props with color and bg', function () {
  it('should return the default styling for background and color', function () {
    var props = {
      bg: 'green.dark',
      color: 'green'
    };
    var expected = [{
      color: colorSchema.green.base
    }, {
      backgroundColor: colorSchema.green.dark
    }];
    expect((0, _.colorCore)(props)).toEqual(expected);
  });
});