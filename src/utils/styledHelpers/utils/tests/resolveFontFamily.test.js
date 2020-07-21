import * as mockGlobalStyles from 'src/global-styles';
import { defaultStylesBase, resolveFontFamily } from '../..';

const fonts = {
  trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier',
};
const defaultValue = undefined;
describe('When resolving a font family given a falsy value', () => {
  it('should return a default font family when no parameter is given.', () => {
    expect(resolveFontFamily()).toEqual(defaultValue);
  });
  it('should return a default font family when given undefined.', () => {
    expect(resolveFontFamily(undefined)).toEqual(defaultValue);
  });

  it('should return a default font family when given false.', () => {
    expect(resolveFontFamily(false)).toEqual(defaultValue);
  });
  it('should return a default font family when given empty string.', () => {
    expect(resolveFontFamily('')).toEqual(defaultValue);
  });
  it('should return a default font family when given 0.', () => {
    expect(resolveFontFamily(0)).toEqual(defaultValue);
  });
});

describe('When resolving a font family given a correct defaultStylesBase fontFamily value', () => {
  it('should return a default font family when no parameter is given.', () => {
    const defaultCorrectValue = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    expect(resolveFontFamily(defaultStylesBase.fontFamily)).toEqual(defaultCorrectValue);
  });
});
describe('When resolving a font family given an unrecognized value', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts,
    });
  });
  it('should return a default font family when value is ChocolateCoveredTunaEnchiladas', () => {
    expect(resolveFontFamily('ChocolateCoveredTunaEnchiladas')).toEqual(defaultValue);
  });
});

describe('When resolving a font family given a recognized value', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts,
    });
  });
  it('should return the indicated font family', () => {
    expect(resolveFontFamily('trueSpace')).toEqual(fonts.trueSpace);
  });
});

describe('When resolving a font family given a theme', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts,
    });
  });
  it('should return a theme color', () => {
    const props = {
      theme: {
        fonts: {
          geneva: 'Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
          sansSerif: 'Frutiger, "Frutiger Linotype", Univers, Calibri, sans-serif',
        },
      },
    };
    expect(resolveFontFamily('sansSerif', props)).toEqual(props.theme.fonts.sansSerif);
  });
});

describe('When resolving a font family given undefined font Theme values', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts,
    });
  });
  it('should return the implicitly defined default value', () => {
    const theme = {
      fonts: undefined,
    };
    expect(resolveFontFamily('sansSerif', theme)).toEqual(defaultValue);
  });
});

describe('When resolving a font family given undefined font Theme values with an explicit value to default to', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts,
    });
  });
  it('should return the explicit default value', () => {
    const theme = {
      fonts: undefined,
    };
    const geneva = 'Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif';
    expect(resolveFontFamily('sansSerif', theme, geneva)).toEqual(geneva);
  });
});
