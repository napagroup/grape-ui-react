import { generateGlobalStyles, getDefaultGlobalStyles } from '../index';

describe('global-styles', () => {
  it('should return a default object of global styles with a well defined structure', () => {
    expect(generateGlobalStyles()).toBeTruthy();
    expect(getDefaultGlobalStyles()).toBeTruthy();
  });

  it('should not break with invalid overrides (e.g. numbers, strings booleans, arrays)', () => {
    expect(generateGlobalStyles(6)).toBeTruthy();
    expect(generateGlobalStyles('6')).toBeTruthy();
    expect(generateGlobalStyles(true)).toBeTruthy();
    expect(generateGlobalStyles(false)).toBeTruthy();
    expect(generateGlobalStyles({ heart: 'water' })).toBeTruthy();
    expect(generateGlobalStyles([])).toBeTruthy();
    expect(generateGlobalStyles([true, false])).toBeTruthy();
  });
  it('should override only the intended values', () => {
    const defaultGlobals = getDefaultGlobalStyles();
    const actualBreakpointXs = '33em';
    const actual = generateGlobalStyles({ breakpoints: { xs: actualBreakpointXs } });

    const { breakpoints: defaultBreakpoints } = defaultGlobals;
    const { breakpoints: actualBreakpoints } = actual;
    expect(actualBreakpoints.xs).toEqual(actualBreakpointXs);
    expect(actualBreakpoints.sm).toEqual(defaultBreakpoints.sm);
    expect(actualBreakpoints.md).toEqual(defaultBreakpoints.md);
    expect(actualBreakpoints.lg).toEqual(defaultBreakpoints.lg);
    expect(actualBreakpoints.xl).toEqual(defaultBreakpoints.xl);
  });
});
