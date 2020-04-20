import * as mockGlobalStyles from 'src/global-styles';
import { defaultStylesBase, resolveFontFamily } from '../..';
var fonts = {
  trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
};
var defaultValue = undefined;
describe('When resolving a font family given a falsy value', function () {
  it('should return a default font family when no parameter is given.', function () {
    expect(resolveFontFamily()).toEqual(defaultValue);
  });
  it('should return a default font family when given undefined.', function () {
    expect(resolveFontFamily(undefined)).toEqual(defaultValue);
  });
  it('should return a default font family when given false.', function () {
    expect(resolveFontFamily(false)).toEqual(defaultValue);
  });
  it('should return a default font family when given empty string.', function () {
    expect(resolveFontFamily('')).toEqual(defaultValue);
  });
  it('should return a default font family when given 0.', function () {
    expect(resolveFontFamily(0)).toEqual(defaultValue);
  });
});
describe('When resolving a font family given a correct defaultStylesBase fontFamily value', function () {
  it('should return a default font family when no parameter is given.', function () {
    var defaultCorrectValue = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    expect(resolveFontFamily(defaultStylesBase.fontFamily)).toEqual(defaultCorrectValue);
  });
});
describe('When resolving a font family given an unrecognized value', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return a default font family when value is ChocolateCoveredTunaEnchiladas', function () {
    expect(resolveFontFamily('ChocolateCoveredTunaEnchiladas')).toEqual(defaultValue);
  });
});
describe('When resolving a font family given a recognized value', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return the indicated font family', function () {
    expect(resolveFontFamily('trueSpace')).toEqual(fonts.trueSpace);
  });
});
describe('When resolving a font family given a theme', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return a theme color', function () {
    var props = {
      theme: {
        fonts: {
          geneva: 'Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
          sansSerif: 'Frutiger, "Frutiger Linotype", Univers, Calibri, sans-serif'
        }
      }
    };
    expect(resolveFontFamily('sansSerif', props)).toEqual(props.theme.fonts.sansSerif);
  });
});
describe('When resolving a font family given undefined font Theme values', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return the implicitly defined default value', function () {
    var theme = {
      fonts: undefined
    };
    expect(resolveFontFamily('sansSerif', theme)).toEqual(defaultValue);
  });
});
describe('When resolving a font family given undefined font Theme values with an explicit value to default to', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return the explicit default value', function () {
    var theme = {
      fonts: undefined
    };
    var geneva = 'Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif';
    expect(resolveFontFamily('sansSerif', theme, geneva)).toEqual(geneva);
  });
});