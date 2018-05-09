import { generateGlobalStyles, getDefaultGlobalStyles } from '../index';

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
    const defaultStyles = getDefaultGlobalStyles();
    assertGlobalStyleInterface(defaultStyles);
  });
});

describe('When generating global styles', () => {
  it('should not break with invalid overrides (e.g. numbers, strings booleans, arrays)', () => {
    expect(generateGlobalStyles(6)).toBeTruthy();
    expect(generateGlobalStyles('6')).toBeTruthy();
    expect(generateGlobalStyles(true)).toBeTruthy();
    expect(generateGlobalStyles(false)).toBeTruthy();
    expect(generateGlobalStyles({ heart: 'water' })).toBeTruthy();
    expect(generateGlobalStyles([])).toBeTruthy();
    expect(generateGlobalStyles([true, false])).toBeTruthy();
  });

  it('should return a well defined structure', () => {
    const defaultStyles = generateGlobalStyles();
    assertGlobalStyleInterface(defaultStyles);
  });

  it('should override only the intended values', () => {
    const expectedGlobals = getDefaultGlobalStyles();
    const expectedBreakpointXs = '33em';
    const actualGlobals = generateGlobalStyles({ breakpoints: { xs: expectedBreakpointXs } });
    const { breakpoints: expectedBreakpoints } = expectedGlobals;
    const { breakpoints: actualBreakpoints } = actualGlobals;

    expect(actualBreakpoints.xs).toEqual(expectedBreakpointXs);
    expect(actualBreakpoints.sm).toEqual(expectedBreakpoints.sm);
    expect(actualBreakpoints.md).toEqual(expectedBreakpoints.md);
    expect(actualBreakpoints.lg).toEqual(expectedBreakpoints.lg);
    expect(actualBreakpoints.xl).toEqual(expectedBreakpoints.xl);
  });

  it('should continue to return a well defined structure upon overriding values', () => {
    const actualGlobals = generateGlobalStyles({ breakpoints: { xs: '33em' } });
    assertGlobalStyleInterface(actualGlobals);
  });
});
