"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var mockGlobalStyles = _interopRequireWildcard(require("../../../../global-styles"));

var _ = require("../..");

const colors = {
  grape: {
    base: 'hsl(323.3, 84.6%, 29%)',
    dark: 'hsl(302.9, 33.9%, 23.7%)',
    light: 'hsl(312.8, 67.8%, 47.5%)'
  }
};
const defaultValue = 'inherit';
describe('When resolving a color given an empty string or non-string value', () => {
  it('should return \'inherit\' when color is undefined (implicit)', () => {
    expect((0, _.resolveColor)()).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is undefined (explicit)', () => {
    expect((0, _.resolveColor)(undefined)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is null', () => {
    expect((0, _.resolveColor)(null)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is false', () => {
    expect((0, _.resolveColor)(false)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is empty string', () => {
    expect((0, _.resolveColor)('')).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is 0', () => {
    expect((0, _.resolveColor)(0)).toEqual(defaultValue);
  });
  it('should return \'inherit\' when color is NaN', () => {
    expect((0, _.resolveColor)(NaN)).toEqual(defaultValue);
  });
  it('should return Infinity when color is Infinity (an invalid color)', () => {
    expect((0, _.resolveColor)(Infinity)).toEqual(Infinity);
  });
});
describe('When resolving a color given an unrecognized color', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors
    });
  });
  it('should return ChocolateCoveredTunaEnchiladas when color is ChocolateCoveredTunaEnchiladas', () => {
    expect((0, _.resolveColor)('ChocolateCoveredTunaEnchiladas')).toEqual('ChocolateCoveredTunaEnchiladas');
  });
});
describe('When resolving a color given an recognized color', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors
    });
  });
  it('should return a base color', () => {
    expect((0, _.resolveColor)('grape')).toEqual(colors.grape.base);
  });
  it('should return a dark color', () => {
    expect((0, _.resolveColor)('grape.dark')).toEqual(colors.grape.dark);
  });
  it('should return a light color', () => {
    expect((0, _.resolveColor)('grape.light')).toEqual(colors.grape.light);
  });
});
describe('When resolving a color given a color theme', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors
    });
  });
  it('should return a theme color', () => {
    const props = {
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
describe('When resolving a color given undefined colors Theme', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors
    });
  });
  it('should return the implicitly defined default value', () => {
    const theme = {
      colors: undefined
    };
    expect((0, _.resolveColor)('yellow', theme)).toEqual('yellow');
  });
});
describe('When resolving a color given undefined colors Theme and an explicit value to default to', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors
    });
  });
  it('should return the explicit default value', () => {
    const theme = {
      colors: undefined
    };
    expect((0, _.resolveColor)('yellow', theme, defaultValue)).toEqual('yellow');
  });
});