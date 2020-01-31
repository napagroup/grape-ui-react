"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _globalStyles = require("../../../../global-styles");

var mockGlobalStyles = _interopRequireWildcard(_globalStyles);

var _ = require("../..");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var colors = {
  grape: {
    base: 'hsl(325.3, 85.6%, 29%)',
    dark: 'hsl(305.9, 43.9%, 23.7%)',
    light: 'hsl(315.8, 77.8%, 47.5%)'
  },
  kiwi: {
    base: 'hsl(122.4, 39.4%, 49.2%)',
    dark: 'hsl(122.4, 39.4%, 29.2%)',
    light: 'hsl(122.4, 39.4%, 69.2%)'
  }
};
describe('When calling resolve global with no parameters', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors: colors
    });
    mockGlobalStyles.getGlobalOverrides = jest.fn();
  });
  it('should call the get global styles', function () {
    (0, _.resolveGlobal)();
    expect(mockGlobalStyles.getGlobalStyles).toHaveBeenCalledTimes(1);
  });
  it('should not call the get global overrides', function () {
    (0, _.resolveGlobal)();
    expect(mockGlobalStyles.getGlobalOverrides).toHaveBeenCalledTimes(0);
  });
  it('should return global styles', function () {
    var actual = (0, _.resolveGlobal)();
    expect(actual).toEqual({
      colors: colors
    });
  });
});
describe('When calling resolve global with no themes', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors: colors
    });
    mockGlobalStyles.getGlobalOverrides = jest.fn();
  });
  var cyan = {
    base: 'hsl(186.8, 100%, 41.6%)',
    dark: 'hsl(186.8, 100%, 21.6%)',
    light: 'hsl(186.8, 100%, 61.6%)'
  };
  var styles = {
    colors: {
      cyan: cyan
    }
  };
  it('should not call the get global styles', function () {
    (0, _.resolveGlobal)(styles);
    expect(mockGlobalStyles.getGlobalStyles).toHaveBeenCalledTimes(0);
  });
  it('should not call the get global overrides', function () {
    (0, _.resolveGlobal)(styles);
    expect(mockGlobalStyles.getGlobalOverrides).toHaveBeenCalledTimes(0);
  });
  it('should return the same style object as is', function () {
    var actual = (0, _.resolveGlobal)(styles);
    expect(actual).toEqual(styles);
  });
});
describe('When calling resolve global with themes', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      colors: colors
    });
    mockGlobalStyles.getGlobalOverrides = jest.fn();
  });
  var cyan = {
    base: 'hsl(186.8, 100%, 41.6%)',
    dark: 'hsl(186.8, 100%, 21.6%)',
    light: 'hsl(186.8, 100%, 61.6%)'
  };
  var props = {
    theme: {
      colors: {
        cyan: cyan
      }
    }
  };
  it('should call the get global styles', function () {
    (0, _.resolveGlobal)(props);
    expect(mockGlobalStyles.getGlobalStyles).toHaveBeenCalledTimes(0);
  });
  it('should call the get global overrides', function () {
    (0, _.resolveGlobal)(props);
    expect(mockGlobalStyles.getGlobalOverrides).toHaveBeenCalledWith(props);
  });
});