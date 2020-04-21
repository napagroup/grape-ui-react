"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var mockGlobalStyles = _interopRequireWildcard(require("../../../../global-styles"));

var _ = require("../..");

const fonts = {
  trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
};
const defaultValue = undefined;
describe('When resolving a font family given a falsy value', () => {
  it('should return a default font family when no parameter is given.', () => {
    expect((0, _.resolveFontFamily)()).toEqual(defaultValue);
  });
  it('should return a default font family when given undefined.', () => {
    expect((0, _.resolveFontFamily)(undefined)).toEqual(defaultValue);
  });
  it('should return a default font family when given false.', () => {
    expect((0, _.resolveFontFamily)(false)).toEqual(defaultValue);
  });
  it('should return a default font family when given empty string.', () => {
    expect((0, _.resolveFontFamily)('')).toEqual(defaultValue);
  });
  it('should return a default font family when given 0.', () => {
    expect((0, _.resolveFontFamily)(0)).toEqual(defaultValue);
  });
});
describe('When resolving a font family given a correct defaultStylesBase fontFamily value', () => {
  it('should return a default font family when no parameter is given.', () => {
    const defaultCorrectValue = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    expect((0, _.resolveFontFamily)(_.defaultStylesBase.fontFamily)).toEqual(defaultCorrectValue);
  });
});
describe('When resolving a font family given an unrecognized value', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return a default font family when value is ChocolateCoveredTunaEnchiladas', () => {
    expect((0, _.resolveFontFamily)('ChocolateCoveredTunaEnchiladas')).toEqual(defaultValue);
  });
});
describe('When resolving a font family given a recognized value', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return the indicated font family', () => {
    expect((0, _.resolveFontFamily)('trueSpace')).toEqual(fonts.trueSpace);
  });
});
describe('When resolving a font family given a theme', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return a theme color', () => {
    const props = {
      theme: {
        fonts: {
          geneva: 'Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
          sansSerif: 'Frutiger, "Frutiger Linotype", Univers, Calibri, sans-serif'
        }
      }
    };
    expect((0, _.resolveFontFamily)('sansSerif', props)).toEqual(props.theme.fonts.sansSerif);
  });
});
describe('When resolving a font family given undefined font Theme values', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return the implicitly defined default value', () => {
    const theme = {
      fonts: undefined
    };
    expect((0, _.resolveFontFamily)('sansSerif', theme)).toEqual(defaultValue);
  });
});
describe('When resolving a font family given undefined font Theme values with an explicit value to default to', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return the explicit default value', () => {
    const theme = {
      fonts: undefined
    };
    const geneva = 'Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif';
    expect((0, _.resolveFontFamily)('sansSerif', theme, geneva)).toEqual(geneva);
  });
});