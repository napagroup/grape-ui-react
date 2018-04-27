'use strict';

var _index = require('../index');

describe('global-styles', function () {
  it('should return a default object of global styles with a well defined structure', function () {
    expect((0, _index.generateGlobalStyles)()).toBeTruthy();
    expect((0, _index.getDefaultGlobalStyles)()).toBeTruthy();
  });

  it('should not break with invalid overrides (e.g. numbers, strings booleans, arrays)', function () {
    expect((0, _index.generateGlobalStyles)(6)).toBeTruthy();
    expect((0, _index.generateGlobalStyles)('6')).toBeTruthy();
    expect((0, _index.generateGlobalStyles)(true)).toBeTruthy();
    expect((0, _index.generateGlobalStyles)(false)).toBeTruthy();
    expect((0, _index.generateGlobalStyles)({ heart: 'water' })).toBeTruthy();
    expect((0, _index.generateGlobalStyles)([])).toBeTruthy();
    expect((0, _index.generateGlobalStyles)([true, false])).toBeTruthy();
  });
  it('should override only the intended values', function () {
    var defaultGlobals = (0, _index.getDefaultGlobalStyles)();
    var actualBreakpointXs = '33em';
    var actual = (0, _index.generateGlobalStyles)({ breakpoints: { xs: actualBreakpointXs } });

    var defaultBreakpoints = defaultGlobals.breakpoints;
    var actualBreakpoints = actual.breakpoints;

    expect(actualBreakpoints.xs).toEqual(actualBreakpointXs);
    expect(actualBreakpoints.sm).toEqual(defaultBreakpoints.sm);
    expect(actualBreakpoints.md).toEqual(defaultBreakpoints.md);
    expect(actualBreakpoints.lg).toEqual(defaultBreakpoints.lg);
    expect(actualBreakpoints.xl).toEqual(defaultBreakpoints.xl);
  });
});