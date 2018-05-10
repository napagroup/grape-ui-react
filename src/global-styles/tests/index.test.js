import { getGlobalStyles } from '../index';

const assertGlobalStyleInterface = globalStyles => {
  expect(globalStyles).toHaveProperty('breakpoints');
  expect(globalStyles).toHaveProperty('colors');
  expect(globalStyles).toHaveProperty('fontFamily');
  expect(globalStyles).toHaveProperty('fontSize');
  expect(globalStyles).toHaveProperty('shadow');
  expect(globalStyles).toHaveProperty('zIndex');
};

describe('When using default global styles', () => {
  it('should return a well defined structure', () => {
    const defaultStyles = getGlobalStyles();
    assertGlobalStyleInterface(defaultStyles);
  });
});

describe('When generating global styles', () => {
  it('should not break with invalid overrides (e.g. numbers, strings booleans, arrays)', () => {
    expect(getGlobalStyles(6)).toBeTruthy();
    expect(getGlobalStyles('6')).toBeTruthy();
    expect(getGlobalStyles(true)).toBeTruthy();
    expect(getGlobalStyles(false)).toBeTruthy();
    expect(getGlobalStyles({ heart: 'water' })).toBeTruthy();
    expect(getGlobalStyles([])).toBeTruthy();
    expect(getGlobalStyles([true, false])).toBeTruthy();
  });

  it('should override only the intended values', () => {
    const expectedGlobals = getGlobalStyles();
    const expectedBreakpointXs = '33em';
    const actualGlobals = getGlobalStyles({ breakpoints: { xs: expectedBreakpointXs } });
    const { breakpoints: expectedBreakpoints } = expectedGlobals;
    const { breakpoints: actualBreakpoints } = actualGlobals;

    expect(actualBreakpoints.xs).toEqual(expectedBreakpointXs);
    expect(actualBreakpoints.sm).toEqual(expectedBreakpoints.sm);
    expect(actualBreakpoints.md).toEqual(expectedBreakpoints.md);
    expect(actualBreakpoints.lg).toEqual(expectedBreakpoints.lg);
    expect(actualBreakpoints.xl).toEqual(expectedBreakpoints.xl);
  });

  it('should continue to return a well defined structure upon overriding values', () => {
    const actualGlobals = getGlobalStyles({ breakpoints: { xs: '33em' } });
    assertGlobalStyleInterface(actualGlobals);
  });
});
