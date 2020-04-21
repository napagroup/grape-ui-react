"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _styledHelpers = require("../../../../utils/styledHelpers");

var mockGlobalStyles = _interopRequireWildcard(require("../../../../global-styles"));

var mockResolvers = _interopRequireWildcard(require("../resolvers"));

// import { getGlobalStyles } from 'src/global-styles';
const fonts = {
  geneva: 'Geneva, "Helvetica Neue", Helvetica, Arial, sans-serif',
  sansSerif: 'Frutiger, "Frutiger Linotype", Univers, Calibri, sans-serif',
  trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
};
describe('When calling font family core with no props', () => {
  const defaultValue = (0, _styledHelpers.resolveFontFamily)(_styledHelpers.defaultStylesBase.fontFamily);
  const expected = {
    fontFamily: defaultValue
  };
  it('should return the default font family', () => {
    expect((0, _styledHelpers.fontFamilyCore)()).toEqual(expected);
  });
});
describe('When calling font family core with an empty object literal', () => {
  const defaultValue = (0, _styledHelpers.resolveFontFamily)(_styledHelpers.defaultStylesBase.fontFamily);
  const expected = {
    fontFamily: defaultValue
  };
  it('should return the default font family for an empty object literal', () => {
    expect((0, _styledHelpers.fontFamilyCore)({})).toEqual(expected);
  });
});
describe('When calling font family core with props but no font family defined', () => {
  const defaultValue = (0, _styledHelpers.resolveFontFamily)(_styledHelpers.defaultStylesBase.fontFamily);
  const expected = {
    fontFamily: defaultValue
  };
  it('should return the default font family', () => {
    expect((0, _styledHelpers.fontFamilyCore)({
      fontFamily: null
    })).toEqual(expected);
  });
});
describe('When given props with a font family value', () => {
  const globalResult = {
    fontFamily: fonts
  };
  beforeEach(() => {
    mockGlobalStyles.getGlobalOverrides = jest.fn().mockReturnValue(globalResult);
    mockResolvers.resolveFontFamily = jest.fn().mockReturnValue({
      fontFamily: fonts.geneva
    });
  });
  it('should return the resolved font family', () => {
    const actual = {
      fontFamily: 'geneva'
    };
    const expected = {
      fontFamily: fonts.geneva
    };
    expect((0, _styledHelpers.fontFamilyCore)(actual)).toEqual(expected);
  });
  it('should have props passed down to the global overrides', () => {
    const actual = {
      fontFamily: 'geneva'
    };
    (0, _styledHelpers.fontFamilyCore)(actual);
    expect(mockGlobalStyles.getGlobalOverrides).toBeCalledWith(actual);
  });
});