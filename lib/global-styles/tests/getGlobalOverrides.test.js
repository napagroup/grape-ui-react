import { getGlobalStyles, getGlobalOverrides } from '../index';

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
    var actual = getGlobalOverrides();
    var expected = getGlobalStyles();
    expect(actual).toEqual(expected);
  });
});
describe('When calling global overrides with props with no theme defined', function () {
  it('should return default global styles', function () {
    var props = {
      theme: undefined
    };
    var actual = getGlobalOverrides(props);
    var expected = getGlobalStyles();
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
    var actual = getGlobalOverrides(props);
    assertGlobalStyleInterface(actual);
    expect(actual.colors.grape).toEqual(themeColors.grape);
    expect(actual.colors.kiwi).toEqual(themeColors.kiwi);
  });
  it('should return global styles merged with theme border radius', function () {
    // Arrange
    var themeBorder = {
      borderRadius: {
        base: '8px',
        lg: '12px',
        sm: '4px'
      }
    };
    var props = {
      theme: {
        border: themeBorder
      }
    }; // Act

    var actual = getGlobalOverrides(props); // Assert

    assertGlobalStyleInterface(actual);
    expect(actual.border.borderRadius).toEqual(themeBorder.borderRadius);
  });
});