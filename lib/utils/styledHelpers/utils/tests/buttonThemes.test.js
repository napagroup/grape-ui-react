"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var mockGlobalStyles = _interopRequireWildcard(require("../../../../global-styles"));

var _buttonThemes = require("../buttonThemes");

var _resolvers = require("../resolvers");

const buttonVariant = {
  contained: {
    danger: {
      backgroundColor: 'brandDanger',
      color: 'white',
      focusColor: 'brandDanger.light',
      hoverColor: 'brandDanger.dark'
    },
    default: {
      backgroundColor: null,
      color: null
    },
    light: {
      backgroundColor: 'brandLight',
      color: 'black',
      focusColor: 'brandLight.light',
      hoverColor: 'brandLight.dark'
    },
    primary: {
      backgroundColor: 'brandPrimary',
      color: null,
      focusColor: 'brandPrimary.light',
      hoverColor: 'brandPrimary.dark'
    }
  },
  magic: {
    danger: {
      backgroundColor: 'brandDanger',
      color: 'brandDanger.light'
    }
  },
  plain: {
    danger: {
      backgroundColor: null,
      color: 'brandDanger'
    },
    default: {
      backgroundColor: null,
      color: null
    },
    primary: {
      backgroundColor: null,
      color: 'brandPrimary'
    }
  }
};
const colors = {
  black: {
    base: 'hsl(0, 0%, 25%)',
    dark: 'hsl(0, 0%, 0%)',
    light: 'hsl(0, 0%, 35%)'
  },
  brandDanger: {
    base: 'hsl(4.1, 89.6%, 58.4%)',
    dark: 'hsl(4.1, 89.6%, 40.4%)',
    light: 'hsl(4.1, 89.6%, 68.4%)'
  },
  brandLight: {
    base: 'hsl(0, 0%, 98%)',
    dark: 'hsl(0, 0%, 90%)',
    light: 'hsl(0, 0%, 100%)'
  },
  brandPrimary: {
    base: 'hsl(323.3, 84.6%, 28%)',
    dark: 'hsl(302.9, 33.9%, 23.7%)',
    light: 'hsl(312.8, 67.8%, 47.5%)'
  },
  white: {
    base: 'hsl(0, 0%, 98%)',
    dark: 'hsl(0, 0%, 90%)',
    light: 'hsl(0, 0%, 100%)'
  }
};
const globalOverrides = {
  buttonVariant,
  colors
};
const plainVariants = {
  danger: {
    backgroundColor: null,
    color: (0, _resolvers.resolveColor)('brandDanger', globalOverrides)
  },
  default: {
    backgroundColor: null,
    color: null
  },
  primary: {
    backgroundColor: null,
    color: (0, _resolvers.resolveColor)('brandPrimary', globalOverrides)
  }
};
const containedVariants = {
  'contained-danger': {
    '&:focus': {
      backgroundColor: (0, _resolvers.resolveColor)('brandDanger.light', globalOverrides)
    },
    '&:hover': {
      backgroundColor: (0, _resolvers.resolveColor)('brandDanger.dark', globalOverrides)
    },
    backgroundColor: (0, _resolvers.resolveColor)('brandDanger', globalOverrides),
    color: (0, _resolvers.resolveColor)('white', globalOverrides)
  },
  'contained-default': {
    backgroundColor: null,
    color: null
  },
  'contained-light': {
    '&:focus': {
      backgroundColor: (0, _resolvers.resolveColor)('brandLight.light', globalOverrides)
    },
    '&:hover': {
      backgroundColor: (0, _resolvers.resolveColor)('brandLight.dark', globalOverrides)
    },
    backgroundColor: (0, _resolvers.resolveColor)('brandLight', globalOverrides),
    color: (0, _resolvers.resolveColor)('black', globalOverrides)
  },
  'contained-primary': {
    '&:focus': {
      backgroundColor: (0, _resolvers.resolveColor)('brandPrimary.light', globalOverrides)
    },
    '&:hover': {
      backgroundColor: (0, _resolvers.resolveColor)('brandPrimary.dark', globalOverrides)
    },
    backgroundColor: (0, _resolvers.resolveColor)('brandPrimary', globalOverrides),
    color: null
  }
};
const magicVariants = {
  'magic-danger': {
    backgroundColor: (0, _resolvers.resolveColor)('brandDanger', globalOverrides),
    color: (0, _resolvers.resolveColor)('brandDanger.light', globalOverrides)
  }
};
describe('When given an empty array', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant,
      colors
    });
  });
  test('should return return an empty object', () => {
    const type = [];
    const actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual({});
  });
});
describe('When given a truthy value that is not an array', () => {
  beforeEach(() => {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant,
      colors
    });
  });
  test('should return return null', () => {
    // Arrange
    const type = {}; // Act

    const actual = (0, _buttonThemes.buttonThemes)(type); // Assert

    expect(actual).toBeNull();
  });
});
describe('When given null (falsy)', () => {
  let expected = null;
  beforeEach(() => {
    expected = { ...plainVariants,
      ...containedVariants,
      ...magicVariants
    };
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant,
      colors
    });
  });
  it('should return all available themes', () => {
    const type = null;
    const actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual.default).toEqual(expected.default);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});
describe('When given an array of types', () => {
  let expected = null;
  beforeEach(() => {
    expected = { ...plainVariants,
      ...containedVariants
    };
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant,
      colors
    });
  });
  it('should return all variants of the specified types', () => {
    const type = ['plain', 'contained'];
    const actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual.default).toEqual(expected.default);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});
describe('When given no type', () => {
  let expected = null;
  beforeEach(() => {
    expected = { ...plainVariants,
      ...containedVariants,
      ...magicVariants
    };
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant,
      colors
    });
  });
  it('should return ALL variants', () => {
    const type = null;
    const actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual.default).toEqual(expected.default);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});