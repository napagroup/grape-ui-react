'use strict';

var _index = require('../index');

var assertGlobalStyleInterface = function assertGlobalStyleInterface(globalStyles) {
  expect(globalStyles).toHaveProperty('breakpoints');
  expect(globalStyles).toHaveProperty('colors');
  expect(globalStyles).toHaveProperty('fontFamily');
  expect(globalStyles).toHaveProperty('fontSize');
  expect(globalStyles).toHaveProperty('shadow');
  expect(globalStyles).toHaveProperty('zIndex');
};

describe('When using default global styles', function () {
  it('should return a well defined structure', function () {
    var defaultStyles = (0, _index.getGlobalStyles)();
    assertGlobalStyleInterface(defaultStyles);
  });
});

describe('When generating global styles', function () {
  it('should not break with invalid overrides (e.g. numbers, strings booleans, arrays)', function () {
    expect((0, _index.getGlobalStyles)(6)).toBeTruthy();
    expect((0, _index.getGlobalStyles)('6')).toBeTruthy();
    expect((0, _index.getGlobalStyles)(true)).toBeTruthy();
    expect((0, _index.getGlobalStyles)(false)).toBeTruthy();
    expect((0, _index.getGlobalStyles)({ heart: 'water' })).toBeTruthy();
    expect((0, _index.getGlobalStyles)([])).toBeTruthy();
    expect((0, _index.getGlobalStyles)([true, false])).toBeTruthy();
  });

  it('should override only the intended values', function () {
    var expectedGlobals = (0, _index.getGlobalStyles)();
    var expectedBreakpointXs = '33em';
    var actualGlobals = (0, _index.getGlobalStyles)({ breakpoints: { xs: expectedBreakpointXs } });
    var expectedBreakpoints = expectedGlobals.breakpoints;
    var actualBreakpoints = actualGlobals.breakpoints;


    expect(actualBreakpoints.xs).toEqual(expectedBreakpointXs);
    expect(actualBreakpoints.sm).toEqual(expectedBreakpoints.sm);
    expect(actualBreakpoints.md).toEqual(expectedBreakpoints.md);
    expect(actualBreakpoints.lg).toEqual(expectedBreakpoints.lg);
    expect(actualBreakpoints.xl).toEqual(expectedBreakpoints.xl);
  });

  it('should continue to return a well defined structure upon overriding values', function () {
    var actualGlobals = (0, _index.getGlobalStyles)({ breakpoints: { xs: '33em' } });
    assertGlobalStyleInterface(actualGlobals);
  });
});