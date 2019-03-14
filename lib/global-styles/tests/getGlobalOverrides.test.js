"use strict";

var _index = require("../index");

var assertGlobalStyleInterface = function assertGlobalStyleInterface(globalStyles) {
  expect(globalStyles).toHaveProperty('border');
  expect(globalStyles).toHaveProperty('breakpoints');
  expect(globalStyles).toHaveProperty('colors');
  expect(globalStyles).toHaveProperty('fontFamily');
  expect(globalStyles).toHaveProperty('fontSize');
  expect(globalStyles).toHaveProperty('shadow');
  expect(globalStyles).toHaveProperty('zIndex');
  expect(globalStyles).toHaveProperty('grid');
};

var themeColors = {
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
describe('When calling global overrides with no parameters', function () {
  it('should return default global styles', function () {
    var actual = (0, _index.getGlobalOverrides)();
    var expected = (0, _index.getGlobalStyles)();
    expect(actual).toEqual(expected);
  });
});
describe('When calling global overrides with props with no theme defined', function () {
  it('should return default global styles', function () {
    var props = {
      theme: undefined
    };
    var actual = (0, _index.getGlobalOverrides)(props);
    var expected = (0, _index.getGlobalStyles)();
    expect(actual).toEqual(expected);
  });
});
describe('When calling global overrides with props with theme', function () {
  it('should return global styles merged with theme colors', function () {
    var props = {
      theme: {
        colors: themeColors
      }
    };
    var actual = (0, _index.getGlobalOverrides)(props);
    assertGlobalStyleInterface(actual);
    expect(actual.colors.grape).toEqual(themeColors.grape);
    expect(actual.colors.kiwi).toEqual(themeColors.kiwi);
  });
});