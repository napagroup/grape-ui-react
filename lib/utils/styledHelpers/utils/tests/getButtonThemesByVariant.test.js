import * as mockGlobalStyles from 'src/global-styles';
import { getButtonThemesByVariant } from '../buttonThemes';
import { resolveColor } from '../resolvers';
var buttonVariant = {
  contained: {
    danger: {
      backgroundColor: 'brandDanger',
      color: 'white',
      focusColor: 'brandDanger.light',
      hoverColor: 'brandDanger.dark'
    },
    "default": {
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
  plain: {
    danger: {
      backgroundColor: null,
      color: 'brandDanger'
    },
    "default": {
      backgroundColor: null,
      color: null
    },
    primary: {
      backgroundColor: null,
      color: 'brandPrimary'
    }
  }
};
var colors = {
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
var globalOverrides = {
  buttonVariant: buttonVariant,
  colors: colors
};
describe('When given a plain type (default type)', function () {
  var expected = null;
  beforeEach(function () {
    expected = {
      danger: {
        backgroundColor: null,
        color: resolveColor('brandDanger', globalOverrides)
      },
      "default": {
        backgroundColor: null,
        color: null
      },
      primary: {
        backgroundColor: null,
        color: resolveColor('brandPrimary', globalOverrides)
      }
    };
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  it('should return themes of that type', function () {
    var type = 'plain';
    var globalStyles = mockGlobalStyles.getGlobalStyles();
    var actual = getButtonThemesByVariant(type, globalStyles);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual["default"]).toEqual(expected["default"]);
    expect(actual.primary).toEqual(expected.primary);
  });
});
describe('When given a non plain type', function () {
  var expected = null;
  beforeEach(function () {
    expected = {
      'contained-danger': {
        '&:focus': {
          backgroundColor: resolveColor('brandDanger.light', globalOverrides)
        },
        '&:hover': {
          backgroundColor: resolveColor('brandDanger.dark', globalOverrides)
        },
        backgroundColor: resolveColor('brandDanger', globalOverrides),
        color: resolveColor('white', globalOverrides)
      },
      'contained-default': {
        backgroundColor: null,
        color: null
      },
      'contained-light': {
        '&:focus': {
          backgroundColor: resolveColor('brandLight.light', globalOverrides)
        },
        '&:hover': {
          backgroundColor: resolveColor('brandLight.dark', globalOverrides)
        },
        backgroundColor: resolveColor('brandLight', globalOverrides),
        color: resolveColor('black', globalOverrides)
      },
      'contained-primary': {
        '&:focus': {
          backgroundColor: resolveColor('brandPrimary.light', globalOverrides)
        },
        '&:hover': {
          backgroundColor: resolveColor('brandPrimary.dark', globalOverrides)
        },
        backgroundColor: resolveColor('brandPrimary', globalOverrides),
        color: null
      }
    };
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  it('should return themes of that type', function () {
    var type = 'contained';
    var globalStyles = mockGlobalStyles.getGlobalStyles();
    var actual = getButtonThemesByVariant(type, globalStyles);
    expect(actual).toEqual(expected);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-light']).toEqual(expected['contained-light']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});
describe('When given no type', function () {
  var expected = null;
  beforeEach(function () {
    expected = {};
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  it('should return an empty object', function () {
    var type = null;
    var globalStyles = mockGlobalStyles.getGlobalStyles();
    var actual = getButtonThemesByVariant(type, globalStyles);
    expect(actual).toEqual(expected);
  });
});