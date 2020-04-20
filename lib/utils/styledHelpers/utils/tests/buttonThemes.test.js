"use strict";

var _interopRequireWildcard = require("@babel/runtime-corejs3/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-property"));

var _defineProperties = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/define-properties"));

var _getOwnPropertyDescriptors = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _getOwnPropertyDescriptor = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor"));

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _getOwnPropertySymbols = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols"));

var _keys = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/keys"));

var _defineProperty3 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var mockGlobalStyles = _interopRequireWildcard(require("../../../../global-styles"));

var _buttonThemes = require("../buttonThemes");

var _resolvers = require("../resolvers");

function ownKeys(object, enumerableOnly) { var keys = (0, _keys["default"])(object); if (_getOwnPropertySymbols["default"]) { var symbols = (0, _getOwnPropertySymbols["default"])(object); if (enumerableOnly) symbols = (0, _filter["default"])(symbols).call(symbols, function (sym) { return (0, _getOwnPropertyDescriptor["default"])(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { var _context; (0, _forEach["default"])(_context = ownKeys(Object(source), true)).call(_context, function (key) { (0, _defineProperty3["default"])(target, key, source[key]); }); } else if (_getOwnPropertyDescriptors["default"]) { (0, _defineProperties["default"])(target, (0, _getOwnPropertyDescriptors["default"])(source)); } else { var _context2; (0, _forEach["default"])(_context2 = ownKeys(Object(source))).call(_context2, function (key) { (0, _defineProperty2["default"])(target, key, (0, _getOwnPropertyDescriptor["default"])(source, key)); }); } } return target; }

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
var plainVariants = {
  danger: {
    backgroundColor: null,
    color: (0, _resolvers.resolveColor)('brandDanger', globalOverrides)
  },
  "default": {
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
    expected = _objectSpread({}, plainVariants, {}, containedVariants, {}, magicVariants);
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
    expect(actual["default"]).toEqual(expected["default"]);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});
describe('When given an array of types', function () {
  var expected = null;
  beforeEach(function () {
    expected = _objectSpread({}, plainVariants, {}, containedVariants);
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
    expect(actual["default"]).toEqual(expected["default"]);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});
describe('When given no type', function () {
  var expected = null;
  beforeEach(function () {
    expected = _objectSpread({}, plainVariants, {}, containedVariants, {}, magicVariants);
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
    expect(actual["default"]).toEqual(expected["default"]);
    expect(actual.primary).toEqual(expected.primary);
    expect(actual['contained-danger']).toEqual(expected['contained-danger']);
    expect(actual['contained-default']).toEqual(expected['contained-default']);
    expect(actual['contained-primary']).toEqual(expected['contained-primary']);
  });
});