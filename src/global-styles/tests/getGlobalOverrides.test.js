import { getGlobalStyles, getGlobalOverrides } from '../index';

const assertGlobalStyleInterface = globalStyles => {
  expect(globalStyles).toHaveProperty('border');
  expect(globalStyles).toHaveProperty('breakpoints');
  expect(globalStyles).toHaveProperty('colors');
  expect(globalStyles).toHaveProperty('fontFamily');
  expect(globalStyles).toHaveProperty('fontSize');
  expect(globalStyles).toHaveProperty('shadow');
  expect(globalStyles).toHaveProperty('zIndex');
  expect(globalStyles).toHaveProperty('grid');
};

const themeColors = {
  grape: {
    base: 'hsl(325.3, 85.6%, 29%)',
    dark: 'hsl(305.9, 43.9%, 23.7%)',
    light: 'hsl(315.8, 77.8%, 47.5%)',
  },
  kiwi: {
    base: 'hsl(122.4, 39.4%, 49.2%)',
    dark: 'hsl(122.4, 39.4%, 29.2%)',
    light: 'hsl(122.4, 39.4%, 69.2%)',
  },
};

describe('When calling global overrides with no parameters', () => {
  it('should return default global styles', () => {
    const actual = getGlobalOverrides();
    const expected = getGlobalStyles();
    expect(actual).toEqual(expected);
  });
});

describe('When calling global overrides with props with no theme defined', () => {
  it('should return default global styles', () => {
    const props = { theme: undefined };
    const actual = getGlobalOverrides(props);
    const expected = getGlobalStyles();
    expect(actual).toEqual(expected);
  });
});

describe('When calling global overrides with props with theme', () => {
  it('should return global styles merged with theme colors', () => {
    const props = { theme: { colors: themeColors } };
    const actual = getGlobalOverrides(props);
    assertGlobalStyleInterface(actual);
    expect(actual.colors.grape).toEqual(themeColors.grape);
    expect(actual.colors.kiwi).toEqual(themeColors.kiwi);
  });
  it('should return global styles merged with theme border radius', () => {
    // Arrange
    const themeBorder = {
      borderRadius: {
        base: '8px',
        lg: '12px',
        sm: '4px',
      },
    };
    const props = { theme: { border: themeBorder } };
    // Act
    const actual = getGlobalOverrides(props);
    // Assert
    assertGlobalStyleInterface(actual);
    expect(actual.border.borderRadius).toEqual(themeBorder.borderRadius);
  });
});
