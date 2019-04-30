"use strict";

var _globalStyles = require("../../../../global-styles");

var mockGlobalStyles = _interopRequireWildcard(_globalStyles);

var _buttonThemes = require("../buttonThemes");

var _resolvers = require("../resolvers");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var buttonVariant = {
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
var plainVariants = {
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
var containedVariants = {
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
var magicVariants = {
  'magic-danger': {
    backgroundColor: (0, _resolvers.resolveColor)('brandDanger', globalOverrides),
    color: (0, _resolvers.resolveColor)('brandDanger.light', globalOverrides)
  }
};
describe('When given an empty array', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  test('should return return an empty object', function () {
    var type = [];
    var actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual({});
  });
});
describe('When given a truthy value that is not an array', function () {
  beforeEach(function () {
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  test('should return return null', function () {
    // Arrange
    var type = {}; // Act

    var actual = (0, _buttonThemes.buttonThemes)(type); // Assert

    expect(actual).toBeNull();
  });
});
describe('When given null (falsy)', function () {
  var expected = null;
  beforeEach(function () {
    expected = _objectSpread({}, plainVariants, containedVariants, magicVariants);
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  it('should return all available themes', function () {
    var type = null;
    var actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual.default).toEqual(expected.default);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});
describe('When given an array of types', function () {
  var expected = null;
  beforeEach(function () {
    expected = _objectSpread({}, plainVariants, containedVariants);
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  it('should return all variants of the specified types', function () {
    var type = ['plain', 'contained'];
    var actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual.default).toEqual(expected.default);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});
describe('When given no type', function () {
  var expected = null;
  beforeEach(function () {
    expected = _objectSpread({}, plainVariants, containedVariants, magicVariants);
    mockGlobalStyles.getGlobalStyles = jest.fn().mockReturnValue({
      buttonVariant: buttonVariant,
      colors: colors
    });
  });
  it('should return ALL variants', function () {
    var type = null;
    var actual = (0, _buttonThemes.buttonThemes)(type);
    expect(actual).toEqual(expected);
    expect(actual.danger).toEqual(expected.danger);
    expect(actual.default).toEqual(expected.default);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});