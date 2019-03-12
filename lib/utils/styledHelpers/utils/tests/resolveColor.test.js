'use strict';

var _globalStyles = require('../../../../global-styles');

var mockGlobalStyles = _interopRequireWildcard(_globalStyles);

var _ = require('../..');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var colors = {
  grape: {
    base: 'hsl(323.3, 84.6%, 29%)',
    dark: 'hsl(302.9, 33.9%, 23.7%)',
    light: 'hsl(312.8, 67.8%, 47.5%)'
  }
};

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
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors: colors
    });
  });
  it('should return \'inherit\' when color is ChocolateCoveredTunaEnchiladas', function () {
    expect((0, _.resolveColor)('ChocolateCoveredTunaEnchiladas')).toEqual(defaultValue);
  });
});

describe('When resolving a color given an recognized color', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors: colors
    });
  });
  it('should return a base color', function () {
    expect((0, _.resolveColor)('grape')).toEqual(colors.grape.base);
  });
  it('should return a dark color', function () {
    expect((0, _.resolveColor)('grape.dark')).toEqual(colors.grape.dark);
  });
  it('should return a light color', function () {
    expect((0, _.resolveColor)('grape.light')).toEqual(colors.grape.light);
  });
});

describe('When resolving a color given a color theme', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors: colors
    });
  });
  it('should return a theme color', function () {
    var props = {
      theme: {
        colors: {
          yellow: {
            base: 'hsl(65, 65%, 50%)'
          }
        }
      }
    };
    expect((0, _.resolveColor)('yellow', props)).toEqual(props.theme.colors.yellow.base);
  });
});

describe('When resolving a color given undefined colors Theme', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors: colors
    });
  });
  it('should return the implicitly defined default value', function () {
    var theme = {
      colors: undefined
    };
    expect((0, _.resolveColor)('yellow', theme)).toEqual(_.defaultStylesBase.color);
  });
});

describe('When resolving a color given undefined colors Theme and an explicit value to default to', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors: colors
    });
  });
  it('should return the explicit default value', function () {
    var theme = {
      colors: undefined
    };
    expect((0, _.resolveColor)('yellow', theme, defaultValue)).toEqual(defaultValue);
  });
});