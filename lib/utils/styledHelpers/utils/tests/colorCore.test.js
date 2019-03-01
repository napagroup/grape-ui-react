'use strict';

var _ = require('../..');

var _globalStyles = require('../../../../global-styles');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    colorSchema = _getGlobalStyles.colors;
// import { defaultStylesBase } from '../..';


describe('When given props with undefined color and bg', function () {
  it('should return the default styling for background and color', function () {
    var props = {};
    var expected = {
      backgroundColor: _.defaultStylesBase.bg,
      color: _.defaultStylesBase.color
    };
    expect((0, _.colorCore)(props)).toEqual(expected);
  });
});

describe('When given props with color and bg', function () {
  it('should return the default styling for background and color', function () {
    var props = {
      bg: 'green.dark',
      color: 'green'
    };
    var expected = {
      backgroundColor: colorSchema.green.dark,
      color: colorSchema.green.base
    };
    expect((0, _.colorCore)(props)).toEqual(expected);
  });
});