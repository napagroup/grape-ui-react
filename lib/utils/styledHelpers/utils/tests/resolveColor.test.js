"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var mockGlobalStyles = _interopRequireWildcard(require("../../../../global-styles"));

var _ = require("../..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
  it('should return Infinity when color is Infinity (an invalid color)', function () {
    expect((0, _.resolveColor)(Infinity)).toEqual(Infinity);
  });
});
describe('When resolving a color given an unrecognized color', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors: colors
    });
  });
  it('should return ChocolateCoveredTunaEnchiladas when color is ChocolateCoveredTunaEnchiladas', function () {
    expect((0, _.resolveColor)('ChocolateCoveredTunaEnchiladas')).toEqual('ChocolateCoveredTunaEnchiladas');
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
    expect((0, _.resolveColor)('yellow', theme)).toEqual('yellow');
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
    expect((0, _.resolveColor)('yellow', theme, defaultValue)).toEqual('yellow');
  });
});