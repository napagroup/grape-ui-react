'use strict';

var _globalStyles = require('../../../../global-styles');

var _ = require('../..');

var _getGlobalStyles = (0, _globalStyles.getGlobalStyles)(),
    colorSchema = _getGlobalStyles.colors;

var defaultValue = 'inherit';
describe('When resolving a color given an empty string or non-string value', function () {
  it('should return \'inherit\' when color is undefined (implicit)', function () {
    expect((0, _.resolveColor)()).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is undefined (explicit)', function () {
    expect((0, _.resolveColor)(undefined)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is null', function () {
    expect((0, _.resolveColor)(null)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is false', function () {
    expect((0, _.resolveColor)(false)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is empty string', function () {
    expect((0, _.resolveColor)('')).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is 0', function () {
    expect((0, _.resolveColor)(0)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is NaN', function () {
    expect((0, _.resolveColor)(NaN)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is Infinity', function () {
    expect((0, _.resolveColor)(Infinity)).toEqual(defaultValue);
  });
});

describe('When resolving a color given an unrecognized color', function () {
  it('should return \'inherit\' when color is ChocolateCoveredTunaEnchiladas', function () {
    expect((0, _.resolveColor)('ChocolateCoveredTunaEnchiladas')).toEqual(defaultValue);
  });
});

describe('When resolving a color given an recognized color', function () {
  it('should return a base color', function () {
    expect((0, _.resolveColor)('green')).toEqual('hsl(122.4, 39.4%, 49.2%)');
  });
  it('should return a dark color', function () {
    expect((0, _.resolveColor)('green.dark')).toEqual('hsl(122.4, 39.4%, 29.2%)');
  });
  it('should return a light color', function () {
    expect((0, _.resolveColor)('green.light')).toEqual('hsl(122.4, 39.4%, 69.2%)');
  });
});

describe('When resolving a color given a color theme', function () {
  it('should return a theme color', function () {
    var theme = {
      colors: {
        yellow: {
          base: 'hsl(65, 65%, 50%)'
        }
      }
    };
    expect((0, _.resolveColor)('yellow', theme.colors)).toEqual(theme.colors.yellow.base);
  });
});

describe('When resolving a color given undefined colorsTheme', function () {
  it('should return theme color based on a default theme', function () {
    var theme = {
      colors: undefined
    };
    expect((0, _.resolveColor)('yellow', theme.colors)).toEqual(colorSchema.yellow.base);
  });
});