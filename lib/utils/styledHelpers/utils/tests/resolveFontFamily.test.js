"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mockGlobalStyles = _interopRequireWildcard(require("../../../../global-styles"));

var _ = require("../..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fonts = {
  trueSpace: '"DejaVu Sans Mono", "Bitstream Vera Sans Mono", Courier'
};
var defaultValue = undefined;
describe('When resolving a font family given a falsy value', function () {
  it('should return a default font family when no parameter is given.', function () {
    expect((0, _.resolveFontFamily)()).toEqual(defaultValue);
  });
  it('should return a default font family when given undefined.', function () {
    expect((0, _.resolveFontFamily)(undefined)).toEqual(defaultValue);
  });
  it('should return a default font family when given false.', function () {
    expect((0, _.resolveFontFamily)(false)).toEqual(defaultValue);
  });
  it('should return a default font family when given empty string.', function () {
    expect((0, _.resolveFontFamily)('')).toEqual(defaultValue);
  });
  it('should return a default font family when given 0.', function () {
    expect((0, _.resolveFontFamily)(0)).toEqual(defaultValue);
  });
});
describe('When resolving a font family given a correct defaultStylesBase fontFamily value', function () {
  it('should return a default font family when no parameter is given.', function () {
    var defaultCorrectValue = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"';
    expect((0, _.resolveFontFamily)(_.defaultStylesBase.fontFamily)).toEqual(defaultCorrectValue);
  });
});
describe('When resolving a font family given an unrecognized value', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return a default font family when value is ChocolateCoveredTunaEnchiladas', function () {
    expect((0, _.resolveFontFamily)('ChocolateCoveredTunaEnchiladas')).toEqual(defaultValue);
  });
});
describe('When resolving a font family given a recognized value', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      fontFamily: fonts
    });
  });
  it('should return the indicated font family', function () {
    expect((0, _.resolveFontFamily)('trueSpace')).toEqual(fonts.trueSpace);
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
    expect((0, _.resolveFontFamily)('sansSerif', props)).toEqual(props.theme.fonts.sansSerif);
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
    expect((0, _.resolveFontFamily)('sansSerif', theme)).toEqual(defaultValue);
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
    expect((0, _.resolveFontFamily)('sansSerif', theme, geneva)).toEqual(geneva);
  });
});