'use strict';

var _globalStyles = require('../../../../global-styles');

var _ = require('../..');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    colorSchema = _getGlobalStyles.colors;

describe('When given props with propName undefined', function () {
  it('should return the default color', function () {
    var props = {};
    expect((0, _.resolveColorByPropName)(props)).toEqual(_.defaultStylesBase.color);
  });
});

describe('When given props with bg undefined and default color explicitly defined', function () {
  it('should return the explicit default color', function () {
    var props = {};
    var defaultColor = 'transparent';
    expect((0, _.resolveColorByPropName)(props, 'bg', defaultColor)).toEqual(defaultColor);
  });
});

describe('When given props with color defined', function () {
  it('should return the color from a default theme', function () {
    var props = { color: 'green.dark' };
    expect((0, _.resolveColorByPropName)(props)).toEqual(colorSchema.green.dark);
  });
});

describe('When given props with bg defined', function () {
  it('should return the bg color from a default theme', function () {
    var props = { bg: 'green.dark' };
    expect((0, _.resolveColorByPropName)(props, 'bg')).toEqual(colorSchema.green.dark);
  });
});

describe('When given props with bg defined mistakenly attempting to resolve property name color', function () {
  it('should return the default color value', function () {
    var props = { bg: 'green.dark' };
    expect((0, _.resolveColorByPropName)(props, 'color')).toEqual(_.defaultStylesBase.color);
  });
});

describe('When given props with color defined and a provided colors theme', function () {
  it('should return the color from a default theme', function () {
    var theme = {
      colors: {
        yellow: {
          base: 'hsl(65, 65%, 50%)'
        }
      }
    };
    var props = {
      color: 'yellow.base',
      theme: theme
    };
    expect((0, _.resolveColorByPropName)(props)).toEqual(theme.colors.yellow.base);
  });
});