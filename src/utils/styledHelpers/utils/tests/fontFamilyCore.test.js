// import { getGlobalStyles } from 'src/global-styles';

import { defaultStylesBase, fontFamilyCore, resolveFontFamily } from 'src/utils/styledHelpers';
import * as mockGlobalStyles from 'src/global-styles';
import * as mockResolvers from '../resolvers';

const fonts = {
  geneva: 'Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
  sansSerif: 'Frutiger, "Frutiger Linotype", Univers, Calibri, sans-serif',
  trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier',
};

describe('When calling font family core with no props', () => {
  const defaultValue = resolveFontFamily(defaultStylesBase.fontFamily);
  const expected = { fontFamily: defaultValue };
  it('should return the default font family', () => {
    expect(fontFamilyCore()).toEqual(expected);
  });
});
describe('When calling font family core with an empty object literal', () => {
  const defaultValue = resolveFontFamily(defaultStylesBase.fontFamily);
  const expected = { fontFamily: defaultValue };
  it('should return the default font family for an empty object literal', () => {
    expect(fontFamilyCore({})).toEqual(expected);
  });
});

describe('When calling font family core with props but no font family defined', () => {
  const defaultValue = resolveFontFamily(defaultStylesBase.fontFamily);
  const expected = { fontFamily: defaultValue };
  it('should return the default font family', () => {
    expect(fontFamilyCore({ fontFamily: null })).toEqual(expected);
  });
});

describe('When given props with a font family value', () => {
  const globalResult = { fontFamily: fonts };
  beforeEach(() => {
    mockGlobalStyles.getGlobalOverrides = jest.fn().mockReturnValue(globalResult);
    mockResolvers.resolveFontFamily = jest.fn().mockReturnValue({
      fontFamily: fonts.geneva,
    });
  });
  it('should return the resolved font family', () => {
    const actual = { fontFamily: 'geneva' };
    const expected = [{ fontFamily: fonts.geneva }];
    expect(fontFamilyCore(actual)).toEqual(expected);
  });
  it('should have props passed down to the global overrides', () => {
    const actual = { fontFamily: 'geneva' };
    fontFamilyCore(actual);
    expect(mockGlobalStyles.getGlobalOverrides).toBeCalledWith(actual);
  });
});
