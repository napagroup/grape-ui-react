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
});
